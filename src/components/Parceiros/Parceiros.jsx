// Importa a biblioteca React necessária para criar componentes
import React from 'react';
// Importa o arquivo de estilos exclusivo desta seção
import './Parceiros.css';

// ==============================================
// COMPONENTE DA SEÇÃO NOSSOS PARCEIROS
// Apenas nomes e descrições, sem uso de imagens
// ==============================================
function Parceiros() {
  return (
    <section id="parceiros" className="parceiros">
      {/* Container principal: centraliza e limita a largura do conteúdo */}
      <div className="container">

        {/* Título principal da seção */}
        <h2 className="titulo-secao">Nossos Parceiros</h2>

        {/* Texto explicativo abaixo do título */}
        <p className="subtitulo-secao">
          Empresas e instituições que confiam no nosso trabalho e ajudam a abrir portas para a sua carreira
        </p>

        {/* Grade que organiza todos os cartões dos parceiros */}
        <div className="parceiros-grid">

          {/* ==============================================
            PARCEIRO 1
          ============================================== */}
          <div className="card-parceiro">
            {/* Camada responsável pelo efeito de borda luminosa animada */}
            <div className="card-borda"></div>

            {/* Área interna do cartão com todo o conteúdo */}
            <div className="card-conteudo">
              <h3>TechSolutions</h3>
              <p className="ramo">Desenvolvimento de Software</p>
              <p className="descricao">
                Empresa especializada em sistemas personalizados e soluções tecnológicas para diversos segmentos do mercado.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* ==============================================
            PARCEIRO 2
          ============================================== */}
          <div className="card-parceiro">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>DataMind</h3>
              <p className="ramo">Análise de Dados & Inteligência Artificial</p>
              <p className="descricao">
                Referência em tratamento de dados e criação de modelos de IA para otimização de processos empresariais.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* ==============================================
            PARCEIRO 3
          ============================================== */}
          <div className="card-parceiro">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>CloudPro</h3>
              <p className="ramo">Infraestrutura em Nuvem</p>
              <p className="descricao">
                Soluções completas para hospedagem, segurança e escalabilidade de sistemas em plataformas de nuvem.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* ==============================================
            PARCEIRO 4
          ============================================== */}
          <div className="card-parceiro">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>DevMobile</h3>
              <p className="ramo">Desenvolvimento de Aplicativos</p>
              <p className="descricao">
                Criação de aplicativos nativos e multiplataforma para Android e iOS, com foco em usabilidade e desempenho.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* ==============================================
            PARCEIRO 5
          ============================================== */}
          <div className="card-parceiro">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>EducaTech</h3>
              <p className="ramo">Educação Profissional em Tecnologia</p>
              <p className="descricao">
                Instituição dedicada à formação prática de profissionais, conectando alunos com oportunidades do mercado de trabalho.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* ==============================================
            PARCEIRO 6
          ============================================== */}
          <div className="card-parceiro">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <h3>SecurityNet</h3>
              <p className="ramo">Segurança da Informação</p>
              <p className="descricao">
                Serviços de proteção de dados, auditoria de sistemas e prevenção contra ameaças digitais para empresas de todos os portes.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-conhecer"
              >
                Conhecer
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Exporta o componente para ser usado em outras páginas do projeto
export default Parceiros;