/* Vue Todolist
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da almeno due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

SUPERBONUS
Inseriamo un filtro per cercare all'interno dei task
<br>
<br>

- **0**
  - 
- **1**
  - 
- **2**
  - 
- **3**
  - 
  **4**
  - 
 **5**
  - 
**FINE**  


Const works = [
  'leggere la casella di posta in arrivo',
  'dare feedback per ordine stampe evento',
  'verificare se nei canali social ci sono nuove notifiche',
  'aggiornare sitoweb corporate',

];

*/

// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # inizializzo Vue JS

    //Estrapolo il metodo createApp
    const app = Vue.createApp ({
        data() {
            return {
                works: [
                'Leggere la casella di posta in arrivo',
                'Dare feedback per ordine stampe evento',
                'Verificare se nei canali social ci sono nuove notifiche',
                'Aggiornare sito web corporate',
              ]
            }
        },
        methods: {
          deleteWork(targetIndex){
            this.works.splice(targetIndex, 1)
        }
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
