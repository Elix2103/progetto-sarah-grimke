

/* 
SCOPO:
    Costruisce dinamicamente una “word cloud” di argomenti prendendoli dal dataset globale lettere, contando quante 
    volte compaiono, e creando un bottone-link per ciascun argomento che manda al catalogo filtrato
*/
document.addEventListener('DOMContentLoaded', () => { 
    const cloudContainer = document.getElementById("word-cloud"); 
    
   
    if (!cloudContainer) return; 
    // 1. Estrae e conta gli argomenti dal dataset 'lettere'
    const tuttiGliArgomenti = lettere.flatMap(l => l.argomenti); 
    const conteggioArgomenti = {}; 
    tuttiGliArgomenti.forEach(arg => {
        conteggioArgomenti[arg] = (conteggioArgomenti[arg] || 0) + 1;
    });

    // 2. Genera i bottoni per ogni argomento unico
    Object.keys(conteggioArgomenti).forEach(arg => { 
        const occorrenze = conteggioArgomenti[arg]; 
        const link = document.createElement('a'); 
        
        link.href = `catalogo.html?argomento=${encodeURIComponent(arg)}`; 
        link.className = "btn btn-primary btn-cloud dynamic-size shadow-sm";
        link.style.setProperty('--weight', occorrenze);
        link.textContent = arg; 
        link.title = `Visualizza tutte le lettere su ${arg}`

        cloudContainer.appendChild(link); 
    });

});
