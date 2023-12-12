<template>   

<v-list  nav>
    <v-list-item prepend-icon="mdi-account" to="/profile" >
        <v-list-item-title>
            Perfil
        </v-list-item-title>
    </v-list-item>
    <v-list-item prepend-icon="mdi-cog" to="/config">
        <v-list-item-title>
            Configuração
        </v-list-item-title>
    </v-list-item>
    <v-list-item prepend-icon="mdi-logout" to="/logout" >
        <v-list-item-title>
            Sair
        </v-list-item-title>
    </v-list-item>
</v-list>

</template>

