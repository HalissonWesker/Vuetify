<template>
  <v-app theme="dark">  
    <v-navigation-drawer v-model="openDrawer" permanent :location="side">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home" to="/">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account-group">Users</v-list-item>
        <v-divider></v-divider>
        <v-list-group value="Users">
          <template #activator="{props}">
            <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Clientes">
          </v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-cash-multiple">Faturamento</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatórios</v-list-item>
          <v-list-item prepend-icon="mdi-currency-usd">Orcamento</v-list-item>
          <v-list-item prepend-icon="mdi-cash-register">Caixa</v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer> 

   <v-app-bar class="border-b">
     <v-app-bar-nav-icon @click="openDrawer = !openDrawer"></v-app-bar-nav-icon>   
     <v-avatar size="90" tile>
       <v-img src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-fitness-e-academia_18099-1557.jpg"></v-img>
     </v-avatar>
    <v-app-bar-title>Dashboard</v-app-bar-title>    
   
    <template #append>

      <v-menu>
        <template  #activator="{props}">
          <v-btn icon class="mr-2" v-bind="props" >
            <v-badge content="14">
              <v-icon icon="mdi-bell-outline" size="x-large"></v-icon>
            </v-badge>
          </v-btn>
        </template>
       <Notifications />
      </v-menu>

      <v-menu>
        <template #activator="{ props }">
        <v-avatar color="green" fit v-bind="props">
          <v-img cover src="https://i.redd.it/leon-kennedy-is-absurdly-attractive-in-resident-evil-4-v0-24o386br63ta1.jpg?width=1079&format=pjpg&auto=webp&s=ae1516e7194271c0862d2955d709bb39b21c4159" alt="Piru"></v-img>
        </v-avatar>
        </template>         
          <ProfileDashboard />     
    </v-menu>
  </template>
         
   </v-app-bar>

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import Notifications from '../../components/NotificationsComp.vue'
  import ProfileDashboard from '../../components/ModalDashboad.vue'
  import { ref } from 'vue'

  const openDrawer = ref(false);
  const side = 'left';

</script>

<script> 
  
export default {
  methods: {
    goToGoogle() {
        // Redirect to Google
        window.location.href = 'https://www.google.com';
      },
    },
  };

</script>

<style>

</style>
