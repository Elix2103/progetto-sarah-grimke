


/*POPOLA SELECT*/
function popolaSelect(idSelect, valori, numeric = false) { 
	
	
	const select = document.getElementById(idSelect); // Cerca nel DOM (Document Object Model) l'elemnento con ID=idSelect
	
	if (!select) return; 	

	// 1) pulizia + normalizzazione
	const puliti = valori
    	.filter(v => v !== null && v !== undefined) // Rimuove null e undefined. Null: hai deciso di lasciare vuoto un valore. undefined: non hai ancora dato un valore
    	.map(v => String(v).trim()); 

	const unici = [...new Set(puliti)].filter(v => v !== ""); 
	if (idSelect !== "filtroTitolo") {
		if (numeric) {
			unici.sort((a, b) => Number(a) - Number(b)); 
		} else {
			unici.sort((a, b) => a.localeCompare(b, "it", {sensitivity: "base"}));
		}
	}

	// 3) crea option
	unici.forEach(valore => {
		const option = document.createElement("option");
		option.value = valore;
		option.textContent = valore;
		select.appendChild(option);
	});
}





/*FILTRO MULTIPLO*/

function filtraLettere() {
	
	const testo = document.getElementById("searchBar").value.toLowerCase().trim(); 
	const titolo = document.getElementById("filtroTitolo").value; 
	const numero = document.getElementById("filtroNumero").value; 
	const destinatario = document.getElementById("filtroDestinatario").value; 
	const luogo = document.getElementById("filtroLuogo").value; 
	const argomento = document.getElementById("filtroArgomento").value; 

	const risultati = lettere.filter(l => { 
		if (testo) {
			const matchTesto = Object.values(l).some(v => v.toString().toLowerCase().includes(testo)); 
			if (!matchTesto) return false;
		}

		
		
		if (titolo && l.titolo !== titolo) return false;
		if (numero && l.numero != numero) return false; 
		if (destinatario && l.destinatario !== destinatario) return false;
		if (luogo && l.luogo !== luogo) return false;

		
		if (argomento &&
			!l.argomenti
				.map(a => a.toLowerCase().trim()) 
				.includes(argomento.toLowerCase().trim())
			) return false;

		return true;
	});

	mostraRisultati(risultati);
}



/* OUTPUT RISULTATI*/

function mostraRisultati(lista) {
	const container = document.getElementById("risultati"); 
	if (!container) return; 
	
	container.innerHTML = "";  
							
	if (lista.length === 0) {
		container.innerHTML = `
		<div class="alert alert-warning">
			Nessun risultato trovato
		</div>
		`;
		return;
	}

	
	const row = document.createElement("div");
	row.className = "row g-3"; 

	lista.forEach(l => { 
		const col = document.createElement("div");
		col.className = "col-12 col-md-6 col-lg-4"; 
		const destinatario = l.destinatario || "—";
		const data = l.data || "—";
		const luogo = l.luogo || "—";
		const titolo = l.titolo || "Senza titolo";
		const numero = l.numero ?? "—";
		const img = l.immagine || "";
		const url = l.url || "#";

		
		col.innerHTML = `
			<div class="card h-100 shadow-sm">
				<div class="card-body d-flex flex-column flex-fill categorieDC">
					<a href="${url}"><img src="${img}" class="card-img-top p-1 image" alt="Copertina della lettera ${numero}: ${titolo}"></a>
					<h5 class="card-title">${titolo}</h5>
					<h6 class="card-subtitle mb-2 text-muted">Lettera n. ${numero}</h6>
					
					<ul class="list-unstyled mt-3 mb-4">
						<li><strong>Destinatario:</strong> ${destinatario}</li>
						<li><strong>Data:</strong> ${data}</li>
						<li><strong>Luogo:</strong> ${luogo}</li>
					</ul>

					<a href="${url}" class="btn btn-primary" role="button" title="visita la lettera n. ${numero}: ${titolo}">Vai alla lettera</a>
				</div>
			</div>
		`;
		row.appendChild(col); 
	});
	container.appendChild(row); 
}





function chiudiAccordion(id) {
	
	const el = document.getElementById(id);
	if (!el) return; 
	const inst = bootstrap.Collapse.getOrCreateInstance(el, {toggle: false}); 
	inst.hide(); 
}


function controllaParametriURL() {
    const params = new URLSearchParams(window.location.search);
    
    // 1. Recuperiamo i valori dall'URL
    const argomentoDaCloud = params.get("argomento");
    const destinatarioDaIndex = params.get("destinatario");

    let haFiltrato = false; 

    // 2. Gestione Argomento
    if (argomentoDaCloud) {
        const selectArgomento = document.getElementById("filtroArgomento");
        if (selectArgomento) {
            selectArgomento.value = argomentoDaCloud;
            haFiltrato = true;
        } else {
			mostraRisultati(lettere);
		}
    }

    // 3. Gestione Destinatario
    if (destinatarioDaIndex) {
        const selectDestinatario = document.getElementById("filtroDestinatario");
        if (selectDestinatario) {
            selectDestinatario.value = destinatarioDaIndex;
            haFiltrato = true;
        } else {
			mostraRisultati(lettere);
		}
    }

    // 4. Azione Finale
    if (haFiltrato) {
        filtraLettere(); 
        chiudiAccordion("collapseOne");
    } else {
        mostraRisultati(lettere);
    }


}
  


/* EVENT LISTENER*/

  
document.addEventListener("DOMContentLoaded", () => {
	popolaSelect("filtroTitolo", lettere.map(l => l.titolo));
	popolaSelect("filtroNumero", lettere.map(l => l.numero), numeric = true); 
	popolaSelect("filtroDestinatario", lettere.map(l => l.destinatario));
	popolaSelect("filtroLuogo", lettere.map(l => l.luogo));
	popolaSelect("filtroArgomento", lettere.flatMap(l => l.argomenti));
	
	//da dove si accede al Catalogo
	controllaParametriURL();
  
	// listener bottone filtra
	const tastoFiltra = document.getElementById("btnFiltra"); 
	if (tastoFiltra) { 
		tastoFiltra.addEventListener("click", () => { 
			filtraLettere(); 
			chiudiAccordion("collapseOne"); 
	  });
	}
});
  






