// Importa as ferramentas básicas do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal e os estilos globais
import App from './App';
import './index.css';

// Renderiza o conteúdo dentro da div com id "root" no arquivo HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);