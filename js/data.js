// =======================
// DATASET
// =======================
const lettere = [
	{
	id: 1,
	titolo: "The original equality of woman",
	numero: 1,
	destinatario: "Mary S. Parker",
	data: "1837-07-11",
	luogo: "Amesbury",
	argomenti: ["Uguale responsabilità della donna e dell'uomo nella peccato originale","Donna e uomo uguali davanti a Dio", "Donna come essere immortale", "Donne soggette solo a Dio"],
	url:"lettera_1.html",
	immagine: "jpg/capitolo/1.jpg"
	},
	{
	id: 2,
	titolo: "Woman subject only to god",
	numero: 2,
	destinatario: "Angelina Grimké",
	data: "1837-07-17",
	luogo: "Newbury",
	argomenti: ["Donne soggette solo a Dio","Ingiusta sottomissione della donna", "Donna e uomo uguali davanti a Dio", "Valorizzazione denigrante della bellezza femminile",],
	url:"#",
	immagine: "jpg/capitolo/2.jpg"
	},
	{
	id: 3,
	titolo: "The pastoral letter of the general...",
	numero: 3,
	destinatario: "Mary S. Parker",
	data: "1837-07",
	luogo: "Haverhill",
	argomenti: ["Donna moralmente obbligata alla predicazione","Donne soggette solo a Dio", "Donne relegate alla sfera domestica"],
	url:"#",
	immagine: "jpg/capitolo/3.jpg"
	},
	{
	id: 4,
	titolo: "Social intercourse of the sexes",
	numero: 4,
	destinatario: "Mary S. Parker",
	data: "1837-07-27",
	luogo: "Andover",
	argomenti: ["Ingiusta sottomissione della donna","Condizione delle donne in altre culture", "Donne relegate alla sfera domestica", "Donna come essere immortale", "Ideale parità all'interno del matrimonio"],
	url:"#",
	immagine: "jpg/capitolo/4.jpg"
	},
	{
	id: 5,
	titolo: "Condition in Asia and Africa",
	numero: 5,
	destinatario: "Angelina Grimké",
	data: "1837-08-04",
	luogo: "Groton",
	argomenti: ["Ingiusta sottomissione della donna","Condizione delle donne in altre culture", "Valorizzazione denigrante della bellezza femminile" ,"Sfruttamento del lavoro femminile"],
	url:"#",
	immagine: "jpg/capitolo/5.jpg"
	},
	{
	id: 6,
	titolo: "Condition in Asia and Africa",
	numero: 6,
	destinatario: "Mary S. Parker",
	data: "1837-08-15",
	luogo: "Groton",
	argomenti: ["Pari abilità intellettive e di comando tra uomini e donne", "Condizione delle donne in altre culture", "Valorizzazione denigrante della bellezza femminile", "Ingiusta sottomissione della donna"],
	url:"#",
	immagine: "jpg/capitolo/6.jpg"
	},
	{
	id: 7,
	titolo: "Condition in some parts of Europe and America",
	numero: 7,
	destinatario: "Angelina Grimké",
	data: "1837-08-22",
	luogo: "Brookline",
	argomenti: ["Ingiusta sottomissione della donna", "Condizione delle donne in altre culture", "Donna come essere immortale", "Sfruttamento del lavoro femminile","Abolizionismo" ],
	url:"#",
	immagine: "jpg/capitolo/7.jpg"
	},
	{
	id: 8,
	titolo: "On the condition of women in the United States",
	numero: 8,
	destinatario: "Angelina Grimké",
	data: "1837",
	luogo: "Brookline",
	argomenti: ["Valorizzazione denigrante della bellezza femminile", "Donne relegate alla sfera domestica", "Sfruttamento del lavoro femminile", "Abolizionismo", "Importanza dell'educazione delle donne", "Vantaggi degli uomini in una maggiore parità",  "Donne obbligate ad obbidire con la violenza" ],
	url:"#",
	immagine: "jpg/capitolo/8.jpg"
	},
	{
	id: 9,
	titolo: "Heroism of women - Women in autority",
	numero: 9,
	destinatario: "Angelina Grimké",
	data: "1837-08-25",
	luogo: "Brookline",
	argomenti: ["Pari abilità intellettive e di comando tra uomini e donne", "Donna come essere immortale", "Ideale parità all'interno del matrimonio"],
	url:"#",
	immagine: "jpg/capitolo/9.jpg"
	},
	{
	id: 10,
	titolo: "Intellect of woman",
	numero: 10,
	destinatario: "Angelina Grimké",
	data: "1837-08",
	luogo: "Brookline",
	argomenti: ["Importanza dell'educazione delle donne", "Donne relegate alla sfera domestica", "Abolizionismo", "Pari abilità intellettive e di comando tra uomini e donne"],
	url:"#",
	immagine: "jpg/capitolo/10.jpg"
	},
	{
	id: 11,
	titolo: "Dress of women",
	numero: 11,
	destinatario: "Angelina Grimké",
	data: "1837-09",
	luogo: "Brookline",
	argomenti: [ "Donna come essere immortale", "Valorizzazione denigrante della bellezza femminile", "Abolizionismo" ],
	url:"#",
	immagine: "jpg/capitolo/11.jpg"
	},
	{
	id: 12,
	titolo: "Legal disabilities of women",
	numero: 12,
	destinatario: "Angelina Grimké",
	data: "1837-09-06",
	luogo: "Concord",
	argomenti: ["Ingiustizia del sistema giuridico", "Abolizionismo", "Importanza dell'educazione delle donne", "Donne obbligate ad obbidire con la violenza"],
	url:"#",
	immagine: "jpg/capitolo/12.jpg"
	},
	{
	id: 13,
	titolo: "Relation of husband and wife",
	numero: 13,
	destinatario: "Angelina Grimké",
	data: "1837-09",
	luogo: "Brookline",
	argomenti: ["Ingiusta sottomissione della donna", "Ideale parità all'interno del matrimonio", "Abolizionismo", "Donne obbligate ad obbidire con la violenza", "Donne soggette solo a Dio", ],
	url:"#",
	immagine: "jpg/capitolo/13.jpg"
	},
	{
	id: 14,
	titolo: "Ministry of women",
	numero: 14,
	destinatario: "Angelina Grimké",
	data: "1837-09",
	luogo: "Brookline",
	argomenti: ["Donna come essere immortale", "Donna moralmente obbligata alla predicazione", "Ingiusta sottomissione della donna", "Donne soggette solo a Dio", "I veri compiti dei ministri di Dio" ],
	url:"#",
	immagine: "jpg/capitolo/14.jpg"
	},
	{
	id: 15,
	titolo: "Man egually guilty with woman in the fall",
	numero: 15,
	destinatario: "Angelina Grimké",
	data: "1837-10-20",
	luogo: "Uxbrindge",
	argomenti: ["Uguale responsabilità della donna e dell'uomo nella peccato originale", "Importanza dell'educazione delle donne", "Donna e uomo uguali davanti a Dio", "Donna moralmente obbligata alla predicazione","Sfruttamento del lavoro femminile","Donna come essere immortale","Abolizionismo","I veri compiti dei ministri di Dio","Vantaggi degli uomini in una maggiore parità",],
	url:"#",
	immagine: "jpg/capitolo/15.jpg"
	},




	// fino a 15 Ricordati le virgole!!!!
];
