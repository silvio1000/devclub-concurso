// Importa a biblioteca React, necessária para criar componentes
import React from 'react';
// Importa o arquivo de estilos exclusivo desta seção
import './Tutores.css';

// ==============================================
// IMPORTAÇÃO DAS IMAGENS DOS AVATARES
// Caminho relativo: sai da pasta atual, entra em "assets"
// ==============================================
import avatar1 from '../../assets/avatar1.jpg'; // volta 2 pastas
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import avatar5 from '../../assets/avatar5.jpg';
import avatar6 from '../../assets/avatar6.jpg';

// Componente principal da seção "Nossos Tutores"
function Tutores() {
  return (
    <section id="tutores" className="tutores">
      {/* Container principal: centraliza e limita a largura do conteúdo */}
      <div className="container">

        {/* Título principal da seção */}
        <h2 className="titulo-secao">Nossos Tutores</h2>

        {/* Texto explicativo abaixo do título */}
        <p className="subtitulo-secao">
          Profissionais experientes do mercado, prontos para guiar você do zero até o nível profissional
        </p>

        {/* Grade que organiza todos os cartões dos tutores */}
        <div className="tutores-grid">

          {/* ==============================================
            CARD 1 - Tutor Homem
          ============================================== */}
          <div className="card-tutor">
            {/* Camada responsável pelo efeito de borda luminosa animada */}
            <div className="card-borda"></div>

            {/* Área interna do cartão com todo o conteúdo */}
            <div className="card-conteudo">
              {/* Círculo com a foto/avatar do tutor */}
              <div className="foto-tutor">
                <img src={avatar1} alt="Foto do tutor Carlos Mendes" />
              </div>

              <h3>Carlos Mendes</h3>
              <p className="cargo">Desenvolvedor Sênior & Arquiteto de Software</p>
              <p className="descricao">
                Mais de 12 anos de experiência em desenvolvimento web e sistemas escaláveis. Já treinou centenas de alunos para o mercado de trabalho.
              </p>

              {/* Botão que abre o link em nova aba */}
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

          {/* ==============================================
            CARD 2 - Tutor Mulher
          ============================================== */}
          <div className="card-tutor">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <div className="foto-tutor">
                <img src={avatar2} alt="Foto da tutora Ana Carolina" />
              </div>

              <h3>Ana Carolina</h3>
              <p className="cargo">Especialista em Front-end & UX/UI</p>
              <p className="descricao">
                Atua há 8 anos criando interfaces modernas e responsivas. Apaixonada por ensinar e transformar conceitos complexos em conteúdo simples.
              </p>

              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

          {/* ==============================================
            CARD 3 - Tutor Homem
          ============================================== */}
          <div className="card-tutor">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <div className="foto-tutor">
                <img src={avatar3} alt="Foto do tutor Roberto Silva" />
              </div>

              <h3>Roberto Silva</h3>
              <p className="cargo">Especialista em Back-end & Banco de Dados</p>
              <p className="descricao">
                Com 10 anos de experiência em servidores e infraestrutura, ajuda alunos a dominar a lógica de programação e a segurança de sistemas.
              </p>

              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

          {/* ==============================================
            CARD 4 - Tutor Homem
          ============================================== */}
          <div className="card-tutor">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <div className="foto-tutor">
                <img src={avatar4} alt="Foto do tutor Lucas Almeida" />
              </div>

              <h3>Lucas Almeida</h3>
              <p className="cargo">Desenvolvedor Mobile</p>
              <p className="descricao">
                Especialista em criar aplicativos para Android e iOS. Traz experiência prática de projetos lançados nas lojas oficiais.
              </p>

              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

          {/* ==============================================
            CARD 5 - Tutor Mulher
          ============================================== */}
          <div className="card-tutor">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <div className="foto-tutor">
                <img src={avatar5} alt="Foto da tutora Mariana Costa" />
              </div>

              <h3>Mariana Costa</h3>
              <p className="cargo">Analista de Dados & Inteligência Artificial</p>
              <p className="descricao">
                Trabalha com IA e análise de dados há 7 anos. Ensina a transformar números em informações úteis para o mercado.
              </p>

              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

          {/* ==============================================
            CARD 6 - Tutor Homem
          ============================================== */}
          <div className="card-tutor">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <div className="foto-tutor">
                <img src={avatar6} alt="Foto do tutor Felipe Rocha" />
              </div>

              <h3>Felipe Rocha</h3>
              <p className="cargo">Especialista em DevOps & Nuvem</p>
              <p className="descricao">
                Cuida da infraestrutura e automação de projetos. Ensina a colocar sistemas no ar com segurança e bom desempenho.
              </p>

              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="botao-saiba-mais"
              >
                Ver Perfil
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Exporta o componente para ser usado em outras páginas do projeto
export default Tutores;