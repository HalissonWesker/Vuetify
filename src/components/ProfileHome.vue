<template>
  <v-container>
    <v-card elevation="0" color="transparent" :loading="onLoad">
      <v-row>
        <v-col
        style="position: relative; background: url('https://cdn.vuetifyjs.com/images/cards/server-room.jpg') no-repeat center center / cover; height: 350px; "
          class="py-12 pl-20 my-auto"
          cols="12"
          @mouseover="showCoverIcon(true)"
          @mouseout="showCoverIcon(false)"
        >
          <!-- Adicione o ícone de upload flutuante -->
          <v-btn
            icon
            color="primary"
            class="upload-icon"
            @click="openUploadDialog"
            v-show="isCoverMouseOver"
          >
            <v-icon>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-card color="transparent" class="d-flex mt-n16" >
        <v-avatar
          class="profile ml-5"
          color="grey"
          size="164"
          cover
          style="border: 4px solid white; box-sizing: border-box;"
          @mouseover="showCameraIcon(true)"
          @mouseout="showCameraIcon(false)"
        >
          <v-img
            :src="imagemSelecionada"
          ></v-img>
          <v-btn class="camera-icon" color="transparent" elevation="0"><v-icon class="camera-icon" v-show="isMouseOver" @click="triggerFileInput">mdi-camera</v-icon></v-btn>
          <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
        </v-avatar>
        <v-list-item style="align-self: end" class="mb-4">
          <v-list-item-content class="ml-10">
            <v-list-item-title class="text-h5">Leon S. Kennedy</v-list-item-title>
            <v-list-item-subtitle class="">Government Special Agent</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
const fs = require('fs-extra');

export default {
  data() {
    return {
      isMouseOver: false,
      isCoverMouseOver: false,
      onload: false,
      imagemSelecionada: 'leon.jpg'
    };
  },
  methods: {
    openUploadDialog() {
      // Lógica para abrir o diálogo de upload
      console.log('Abrir diálogo de upload');
    },
    showCameraIcon(value) {
      this.isMouseOver = value;
    },
    showCoverIcon(value) {
      this.isCoverMouseOver = value;
    },
    triggerFileInput() {
      // Aciona o input de arquivo quando o botão é clicado
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        // Caminho temporário onde o arquivo é inicialmente armazenado pelo navegador
        const tempPath = file.path;

        // Caminho de destino na pasta 'public' (ou sua pasta de destino)
        const destPath = `public/${file.name}`;

        // Mova o arquivo para a pasta 'public'
        fs.move(tempPath, destPath, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Arquivo movido com sucesso para a pasta public');
          }
        });

        // Atualize o estado com o caminho da imagem
        this.imagemSelecionada = destPath;
      }
    },
  },
};
</script>

<style scoped>
.upload-icon {
  position: absolute;
  top: 16px;
  right: 16px;
}

.camera-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
