const { createApp }=Vue;

createApp({
  data(){
    return{
      tasks:{
        spesa:{
          text: "Comprare Latte e Biscotti",
          done: true
        },
        palestra:{
          text: "Completare la scheda di oggi",
          done: false
        },
        corsa:{
          text: "Fare 10km di corsa",
          done: false
        }
      },

      newTask:{
        text: "",
        done: false
      },

      error: {
        text:""
      }
    }
  },

  methods:{
    remuveOJ(indice){
      if (this.tasks[indice].done) {
        delete this.tasks[indice]
      }
    },

    addTask(){
      Object.assign(this.tasks, this.newTask)
      console.log(this.tasks);
    },
     
    addBar(indice){
      if (this.tasks[indice].done) {
        this.tasks[indice].done = false
      }else{
        this.tasks[indice].done = true
      }
    }
  }
}).mount("#app");