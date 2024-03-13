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
      }
    }
  },

  methods:{
    remuveOJ(indice){
      console.log(indice);
      // if (this.done) {
        this.tasks.delete(indice, 1)
      // }
    }
  }
}).mount("#app");