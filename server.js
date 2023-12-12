const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Configuração do Multer para lidar com uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint para lidar com uploads
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Estão tentando fazer upload');
  const file = req.file;
  const fileName = file.originalname;

  // Simulação da movimentação para a pasta 'public'
  const destPath = path.join(__dirname, 'public/upload/', fileName);

  // Mova o arquivo para a pasta 'public'
  fs.writeFileSync(destPath, file.buffer);

  // Envie uma resposta de sucesso
  res.json({ success: true, filePath: `/public/upload/${fileName}` });
});

// Inicie o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log('server runing');
});