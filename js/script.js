const { createApp }=Vue;

createApp({
  data(){
    return{
      spesa:{
        text: "Comprare Latte e Biscotti",
        done: false
      },
      palestra:{
        text: "Completare la scheda di oggi",
        done: false
      },
      corsa:{
        text: "Fare 10km di corsa",
        done: false
      },
    }
  }
}).mount("#app");