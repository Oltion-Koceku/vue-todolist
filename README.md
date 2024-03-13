Vue To Do List
===
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
- MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
- MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
- MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
- Bonus:
1. esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3. rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente
4. Se la lista è vuota stampare “Non sono presenti task” al posto della lista

 ## Svolgimento: 
 1. Stampiamo con un ciclo for le task
 2. se DONE è true aggiungere classe sbarra
 3. al click della x con splice togliamo l'oggetto in base all'indice
 4. all'interno dell'imput con kayup.enter pushiamo un nuovo oggetto, stessa cosa al click fdel pulsante
 

