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

export default {
  data() {
    return {
      isMouseOver: false,
      isCoverMouseOver: false,
      onLoad: false,
      imagemSelecionada: 'leon.jpg',
    };
  },
  methods: {
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
        // Use FileReader para ler o conteúdo do arquivo como uma URL de dados
        const reader = new FileReader();

        reader.onload = (e) => {
          
          // Mova o arquivo para a pasta 'public' no servidor
          this.moveFileToPublic(file);

          // Atualize o estado com a URL da imagem
          this.imagemSelecionada = e.target.result;
        };

        // Leia o conteúdo do arquivo como uma URL de dados
        reader.readAsDataURL(file);
      }
    },
    moveFileToPublic(file) {
      const reader = new FileReader();

      reader.onload = () => {
        // Crie um objeto FormData para enviar o arquivo como parte de uma solicitação POST
        const formData = new FormData();
        formData.append('file', new Blob([reader.result]), file.name);

        // Use fetch para enviar o arquivo para o servidor
        fetch('http://192.168.18.18:3000/upload', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Arquivo enviado com sucesso para a pasta public:', data);
            // Atualize o estado com o caminho da imagem (se necessário)
            this.imagemSelecionada = data.filePath;
          })
          .catch((error) => {
            console.error('Erro ao enviar arquivo para a pasta public:', error);
          });
      };

      // Leia o conteúdo do arquivo como ArrayBuffer
      reader.readAsArrayBuffer(file);
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
