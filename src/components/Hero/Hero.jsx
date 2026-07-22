// Importa o React obrigatório para componentes JSX
import React from 'react';
// Importa o componente das partículas (caminho correto)
import ParticleLogo from '../ParticleLogo/ParticleLogo.jsx';
// Importa os estilos da seção
import './Hero.css';

// Componente da seção inicial
function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Efeito de partículas no fundo */}
      <ParticleLogo />

      {/* Conteúdo principal acima das partículas */}
      <div className="hero-conteudo">
        <h1 className="hero-titulo">DevClub Formações</h1>
        <p className="hero-subtitulo">Sua porta de entrada para o futuro na tecnologia</p>
      </div>
    </section>
  );
}

// Exporta o componente para usar em outras páginas
export default Hero;