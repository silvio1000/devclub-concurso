// Importa o React, obrigatório para componentes em JSX
import React from 'react';
// Importa os estilos específicos desta seção
import './Formacoes.css';

// Componente da seção "Nossas Formações"
function Formacoes() {
  return (
    <section id="formacoes" className="formacoes">
      {/* Container principal para limitar a largura do conteúdo */}
      <div className="container">
        
        {/* Título principal da seção */}
        <h2 className="titulo-secao">Nossas Formações</h2>
        
        {/* Texto explicativo abaixo do título */}
        <p className="subtitulo-secao">
          Domine as tecnologias que estão moldando o futuro e construa uma carreira sólida na área de desenvolvimento
        </p>

        {/* Grade que organiza os cartões das formações */}
        <div className="cards-grid">

          {/* ===== CARD 1: Desenvolvimento Web ===== */}
          <div className="card-formacao">
            {/* Camada para o efeito de borda luminosa */}
            <div className="card-borda"></div>
            
            {/* Conteúdo interno do cartão */}
            <div className="card-conteudo">
              <h3>Desenvolvimento Web Full Stack</h3>
              <p>Aprenda a criar sites e aplicações completas, do front-end ao back-end, com as ferramentas mais usadas do mercado.</p>
              
              {/* Lista de tecnologias abordadas */}
              <ul className="tecnologias">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <p className="card-insight">Projeto prático para começar seu portfólio.</p>
              
              {/* Botão que leva para página externa */}
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* ===== CARD 2: Desenvolvimento de Aplicativos ===== */}
          <div className="card-formacao">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>Desenvolvimento de Aplicativos</h3>
              <p>Construa aplicativos móveis nativos e multiplataforma, com desempenho e design de alta qualidade para Android e iOS.</p>
              <ul className="tecnologias">
                <li>React Native</li>
                <li>Flutter</li>
                <li>TypeScript</li>
                <li>APIs REST</li>
                <li>Firebase</li>
              </ul>
              <p className="card-insight">Construa uma ideia e leve-a para o bolso das pessoas.</p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* ===== CARD 3: Inteligência Artificial ===== */}
          <div className="card-formacao">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>Inteligência Artificial & Dados</h3>
              <p>Entenda como funciona a IA, análise de dados e automação — habilidades essenciais para o mercado da próxima década.</p>
              <ul className="tecnologias">
                <li>Python</li>
                <li>Pandas</li>
                <li>Machine Learning</li>
                <li>SQL</li>
                <li>Power BI</li>
              </ul>
              <p className="card-insight">Transforme dados em decisões que geram impacto.</p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Saiba mais
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Exporta o componente para ser usado em outras partes do projeto
export default Formacoes;
