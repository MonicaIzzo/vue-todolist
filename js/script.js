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
console.log('Vue OK, Vue');

// # inizializzo Vue JS

    //Estrapolo il metodo createApp
    const app = Vue.createApp({
        data() {
            return {
                searchedJobs: '',
                newJob: '',
               /* jobs: [
                  'Leggere la casella di posta in arrivo',
                  'Dare feedback per ordine stampe evento',
                  'Verificare se nei canali social ci sono nuove notifiche',
                  'Aggiornare sito web corporate'
                ], */
                jobs: [
                  {id: 101, text:'Leggere la casella di posta in arrivo', done: false},
                  {id: 223, text:'Dare feedback per ordine stampe evento', done: false},
                  {id: 349, text:'Verificare se nei canali social ci sono nuove notifiche', done: false},
                  {id: 459, text:'Aggiornare sito web corporate', done: false}
                ],
            }
        },
        computed: {
          filteredJobs() {
            const term = this.searchedJobs.toLowerCase();
            console.log(term);

            return this.jobs.filter((job) => job.text.toLowerCase().includes(term));
          },

          nextId() {
          // ? cerco l'id più alto
            let highestId = 0;
            this.jobs.forEach((job) => {
              if (job.id > highestId) highestId = job.id
            });

            nextId = ++highestId;

            return nextId;
          }
         },
        methods: {
          // funzione per eliminare un job
          deleteJob(targetId) {
            this.jobs = this.jobs.filter((job) => targetId !== job.id);
          },

        // funzione per sggiungere un job
          addJob () {
            if (!this.newJob.length) return;

            this.searchedJobs = '';

            const newJob = {id: this.nextId, text: this.newJob, done: false};
            this.jobs.push(newJob);
            
            this.newJob = '';
            this.$refs.focus.focus();
          },
          // Funzione per eliminare tutti i job
          deleteAll() {
            this.jobs = [];
          },

          // Funzione per settare i job a "tutti fatti"
          setAllDone () {
            this.jobs.forEach(job => {
              job.done = true;
            });
          },

          // Funzione per settare i job a "nessuno fatto"
          setAllUndone () {
            this.jobs.forEach(job => {
              job.done = false;
            });
          },
        }
  });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
