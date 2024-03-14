const { createApp }=Vue;

createApp({
  data(){
    return{
      tasks:[
        {
          text: "Comprare Latte e Biscotti",
          done: true
        },
        {
          text: "Completare la scheda di oggi",
          done: false
        },
        {
          text: "Fare 10km di corsa",
          done: false
        }
      ],

      newTask:{
        text: "",
        done: false
      },

      error: {
        text:"La task non ha almeno 4 lettere",
        textRemuve: "devi sbarrare la taskPrima di cancellarla"
      },

      isError: false,
      notRemuve: false
    }
  },

  methods:{
    remuveOJ(indice){
      if (this.tasks[indice].done) {
        this.tasks.splice(indice, 1)

        this.notRemuve = false
      }else{
        this.notRemuve = true
      }
    },

    addTask(){
      if (this.newTask.text.length < 4) {
        this.isError = true
      }else{
        this.tasks.unshift(this.newTask)
        this.newTask = {
          text: "",
          done: false
        }

        this.isError = false

      }
    },
     
    addBar(indice){
      if (this.tasks[indice].done) {
        this.tasks[indice].done = false
      }else{
        this.tasks[indice].done = true
        this.notRemuve = false
      }

      console.log(this.tasks);
    }
  }
}).mount("#app");
