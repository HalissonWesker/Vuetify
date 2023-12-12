<template>
  <v-main>
    
    <v-container>

      <h1 class=" text-h3">Dashboard</h1>

      <v-row >
        <v-col cols="12" sm="6" lg="4" xl="3">
          <PostCard />
        </v-col>
        <v-col cols="12" sm="6" lg="4" xl="3">
          <PostCard />
        </v-col>
        <v-col cols="12" sm="6" lg="4" xl="3">
          <PostCard />
        </v-col>
        </v-row>
    </v-container>

    
  </v-main>
</template>

<script setup>

import PostCard from '../components/PostCard.vue'

</script>
