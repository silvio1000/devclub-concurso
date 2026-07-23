// Exibe os mentores e controla a navegação automática e manual entre seus perfis.
import { useEffect, useState } from 'react';
import './Tutores.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import avatar5 from '../../assets/avatar5.jpg';
import avatar6 from '../../assets/avatar6.jpg';

const tutores = [
  { nome: 'Carlos Mendes', cargo: 'Desenvolvedor Sênior & Arquiteto de Software', descricao: 'Mais de 12 anos de experiência em desenvolvimento web e sistemas escaláveis. Já treinou centenas de alunos para o mercado de trabalho.', imagem: avatar1 },
  { nome: 'Ana Carolina', cargo: 'Especialista em Front-end & UX/UI', descricao: 'Atua há 8 anos criando interfaces modernas e responsivas. Apaixonada por ensinar e transformar conceitos complexos em conteúdo simples.', imagem: avatar2 },
  { nome: 'Roberto Silva', cargo: 'Especialista em Back-end & Banco de Dados', descricao: 'Com 10 anos de experiência em servidores e infraestrutura, ajuda alunos a dominar a lógica de programação e a segurança de sistemas.', imagem: avatar3 },
  { nome: 'Lucas Almeida', cargo: 'Desenvolvedor Mobile', descricao: 'Especialista em criar aplicativos para Android e iOS. Traz experiência prática de projetos lançados nas lojas oficiais.', imagem: avatar4 },
  { nome: 'Mariana Costa', cargo: 'Analista de Dados & Inteligência Artificial', descricao: 'Trabalha com IA e análise de dados há 7 anos. Ensina a transformar números em informações úteis para o mercado.', imagem: avatar5 },
  { nome: 'Felipe Rocha', cargo: 'Especialista em DevOps & Nuvem', descricao: 'Cuida da infraestrutura e automação de projetos. Ensina a colocar sistemas no ar com segurança e bom desempenho.', imagem: avatar6 },
];

function Tutores() {
  const [tutorAtivo, setTutorAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const tutor = tutores[tutorAtivo];

  useEffect(() => {
    if (pausado) return undefined;

    const intervalo = window.setInterval(() => {
      setTutorAtivo((atual) => (atual + 1) % tutores.length);
    }, 4800);

    return () => window.clearInterval(intervalo);
  }, [pausado]);

  return (
    <section id="tutores" className="tutores">
      <div className="container">
        <p className="secao-eyebrow">APRENDA COM QUEM VIVE O MERCADO</p>
        <h2 className="titulo-secao">Nossos Tutores</h2>
        <p className="subtitulo-secao">Profissionais que transformam experiência real em orientação para a sua carreira.</p>

        <div
          className={`tutor-experiencia ${pausado ? 'pausado' : ''}`}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div className="tutor-retrato" aria-live="polite">
            <div className="tutor-retrato-brilho" />
            <img src={tutor.imagem} alt={`Retrato de ${tutor.nome}`} />
            <span className="tutor-retrato-legenda">MENTOR EM FOCO</span>
          </div>

          <article className="tutor-destaque">
            <p className="tutor-indice">0{tutorAtivo + 1} <span>/ 0{tutores.length}</span></p>
            <span className="tutor-auto-status">{pausado ? 'PAUSADO' : 'PRÓXIMO PERFIL EM BREVE'}</span>
            <h3>{tutor.nome}</h3>
            <p className="tutor-cargo">{tutor.cargo}</p>
            <p className="tutor-descricao">{tutor.descricao}</p>
            <a href="https://google.com" target="_blank" rel="noreferrer" className="tutor-perfil">Conhecer trajetória <span>↗</span></a>
          </article>

          <div className="tutor-navegacao" aria-label="Escolha um tutor">
            {tutores.map((item, index) => (
              <button
                type="button"
                key={item.nome}
                className={`tutor-mini ${index === tutorAtivo ? 'ativo' : ''}`}
                onClick={() => setTutorAtivo(index)}
                aria-pressed={index === tutorAtivo}
              >
                <img src={item.imagem} alt="" />
                <span>{item.nome}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tutores;
