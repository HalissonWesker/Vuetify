<template>
    <v-card elevation="2" :disabled="disabled">
      <vue-countdown :time="this.seconds * 1000" v-slot="{ seconds }" v-if="disabled" class="text-h1 my-10 py-29">
        <vue-countdown-circle>{{ seconds }}</vue-countdown-circle>        
      </vue-countdown>
      
      <v-img  v-else
        src="https://wojakparadise.net/wojak/50395/img" 
        cover 
        class="align-end text-white"
      >
        
        <v-card-title>
          tengo lengo tengo kkkkk
        </v-card-title>
      </v-img>
  
      <v-card-subtitle class="d-flex flex-absolute pt-4">
        Wojak Nordestino
      </v-card-subtitle>
  
      <v-card-text>
        <div>Representa um nordestino de 40 anos</div>
        <div>Possui filhos de 16 e 18 anos</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn 
          variant="outlined"
          color="primary"
        >
          Saber mais
        </v-btn>
        <v-btn
          prepend-icon="mdi-timelapse" 
          variant="tonal"
          color="error" 
          @click="disableCard"
        >
          Desabilitar
        </v-btn>
        <v-btn icon="mdi-home">
          
        </v-btn>
      </v-card-actions>
    </v-card>
    
  </template>
  
  <script>
  export default {
    data () {
      return {
        disabled: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    },
    methods: {
      disableCard() {
        this.disabled = !this.disabled;
        this.seconds = 50;
  
        setTimeout(() => {
          this.disabled = !this.disabled
        }, this.seconds * 1000);
      }
    }
  }
  </script>
  