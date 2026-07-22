// Importa a biblioteca React, necessária para criar componentes
import React from 'react';
// Importa o arquivo de estilos exclusivo desta seção
import './Depoimentos.css';

// ==============================================
// IMPORTAÇÃO DAS IMAGENS DOS DEPOIMENTOS
// Caminho correto para a pasta assets no Vite/React
// ==============================================
import depoimento1 from '../../assets/depoimento1.jpg'; // Mulher 1
import depoimento2 from '../../assets/depoimento2.jpg'; // Mulher 2
import depoimento3 from '../../assets/depoimento3.jpg'; // Homem 1
import depoimento4 from '../../assets/depoimento4.jpg'; // Homem 2
import depoimento5 from '../../assets/depoimento5.jpg'; // Mulher 3
import depoimento6 from '../../assets/depoimento6.jpg'; // Homem 3

// Componente principal da seção "Depoimentos"
function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      {/* Container principal: centraliza e limita a largura do conteúdo */}
      <div className="container">

        {/* Título principal da seção */}
        <h2 className="titulo-secao">O Que Nossos Alunos Dizem</h2>

        {/* Texto explicativo abaixo do título */}
        <p className="subtitulo-secao">
          Histórias reais de quem estudou com a gente e transformou sua carreira na área de tecnologia
        </p>

        {/* Grade que organiza todos os cartões de depoimento */}
        <div className="depoimentos-grid">

          {/* ==============================================
            DEPOIMENTO 1 - Mulher
          ============================================== */}
          <div className="card-depoimento">
            {/* Camada responsável pelo efeito de borda luminosa animada */}
            <div className="card-borda"></div>

            {/* Área interna do cartão com todo o conteúdo */}
            <div className="card-conteudo">
              {/* Ícone de aspas no início do texto */}
              <span className="aspas">“</span>

              {/* Texto do depoimento */}
              <p className="texto-depoimento">
                O curso superou todas as minhas expectativas! O conteúdo é muito bem explicado e o suporte dos tutores faz toda a diferença. Consegui meu primeiro emprego na área em menos de 6 meses.
              </p>

              {/* Informações do aluno: foto, nome e curso */}
              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento1} alt="Foto da aluna Juliana Mendes" />
                </div>
                <div>
                  <h4>Juliana Mendes</h4>
                  <p className="curso">Formada em Desenvolvimento Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================
            DEPOIMENTO 2 - Mulher
          ============================================== */}
          <div className="card-depoimento">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <span className="aspas">“</span>

              <p className="texto-depoimento">
                Antes eu tinha muita dificuldade em entender lógica de programação. Com a metodologia da escola, tudo ficou mais claro e prático. Hoje trabalho com o que amo e tenho uma remuneração muito melhor.
              </p>

              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento2} alt="Foto da aluna Mariana Costa" />
                </div>
                <div>
                  <h4>Mariana Costa</h4>
                  <p className="curso">Formada em Inteligência Artificial</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================
            DEPOIMENTO 3 - Homem
          ============================================== */}
          <div className="card-depoimento">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <span className="aspas">“</span>

              <p className="texto-depoimento">
                A estrutura dos cursos é completa, do básico ao avançado. Os projetos práticos que desenvolvemos durante as aulas foram essenciais para montar meu portfólio e me destacar nas entrevistas.
              </p>

              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento3} alt="Foto do aluno Pedro Henrique" />
                </div>
                <div>
                  <h4>Pedro Henrique</h4>
                  <p className="curso">Formado em Desenvolvimento Mobile</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================
            DEPOIMENTO 4 - Homem
          ============================================== */}
          <div className="card-depoimento">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <span className="aspas">“</span>

              <p className="texto-depoimento">
                Melhor investimento que fiz na minha carreira. Os tutores são profissionais experientes e sempre dispostos a ajudar. O ambiente de estudo me deu confiança para seguir na área.
              </p>

              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento4} alt="Foto do aluno Lucas Almeida" />
                </div>
                <div>
                  <h4>Lucas Almeida</h4>
                  <p className="curso">Formado em Análise de Dados</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================
            DEPOIMENTO 5 - Mulher
          ============================================== */}
          <div className="card-depoimento">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <span className="aspas">“</span>

              <p className="texto-depoimento">
                Eu tinha medo de começar do zero, mas a didática é excelente. As aulas são organizadas e sempre com exemplos reais. Hoje já atuo como desenvolvedora júnior e evoluo a cada dia.
              </p>

              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento5} alt="Foto da aluna Camila Rodrigues" />
                </div>
                <div>
                  <h4>Camila Rodrigues</h4>
                  <p className="curso">Formada em Front-end & UX/UI</p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================
            DEPOIMENTO 6 - Homem
          ============================================== */}
          <div className="card-depoimento">
            <div className="card-borda"></div>
            <div className="card-conteudo">
              <span className="aspas">“</span>

              <p className="texto-depoimento">
                O suporte e a comunidade fazem toda a diferença. Sempre que tinha dúvida, recebia ajuda rapidamente. Os conteúdos são atualizados com o que o mercado realmente pede. Recomendo de olhos fechados!
              </p>

              <div className="aluno-info">
                <div className="foto-aluno">
                  <img src={depoimento6} alt="Foto do aluno Felipe Rocha" />
                </div>
                <div>
                  <h4>Felipe Rocha</h4>
                  <p className="curso">Formado em DevOps & Cloud</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Exporta o componente para ser usado em outras páginas do projeto
export default Depoimentos;