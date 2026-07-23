// Alterna automaticamente os depoimentos e também permite seleção manual.
import { useEffect, useState } from 'react';
import './Depoimentos.css';
import depoimento1 from '../../assets/depoimento1.jpg';
import depoimento2 from '../../assets/depoimento2.jpg';
import depoimento3 from '../../assets/depoimento3.jpg';
import depoimento4 from '../../assets/depoimento4.jpg';
import depoimento5 from '../../assets/depoimento5.jpg';
import depoimento6 from '../../assets/depoimento6.jpg';

const historias = [
  { nome: 'Juliana Mendes', curso: 'Formada em Desenvolvimento Web', texto: 'O curso superou todas as minhas expectativas! O conteúdo é muito bem explicado e o suporte dos tutores faz toda a diferença. Consegui meu primeiro emprego na área em menos de 6 meses.', imagem: depoimento1 },
  { nome: 'Mariana Costa', curso: 'Formada em Inteligência Artificial', texto: 'Antes eu tinha muita dificuldade em entender lógica de programação. Com a metodologia da escola, tudo ficou mais claro e prático. Hoje trabalho com o que amo e tenho uma remuneração muito melhor.', imagem: depoimento2 },
  { nome: 'Pedro Henrique', curso: 'Formado em Desenvolvimento Mobile', texto: 'A estrutura dos cursos é completa, do básico ao avançado. Os projetos práticos que desenvolvemos durante as aulas foram essenciais para montar meu portfólio e me destacar nas entrevistas.', imagem: depoimento3 },
  { nome: 'Lucas Almeida', curso: 'Formado em Análise de Dados', texto: 'Melhor investimento que fiz na minha carreira. Os tutores são profissionais experientes e sempre dispostos a ajudar. O ambiente de estudo me deu confiança para seguir na área.', imagem: depoimento4 },
  { nome: 'Camila Rodrigues', curso: 'Formada em Front-end & UX/UI', texto: 'Eu tinha medo de começar do zero, mas a didática é excelente. As aulas são organizadas e sempre com exemplos reais. Hoje já atuo como desenvolvedora júnior e evoluo a cada dia.', imagem: depoimento5 },
  { nome: 'Felipe Rocha', curso: 'Formado em DevOps & Cloud', texto: 'O suporte e a comunidade fazem toda a diferença. Sempre que tinha dúvida, recebia ajuda rapidamente. Os conteúdos são atualizados com o que o mercado realmente pede. Recomendo de olhos fechados!', imagem: depoimento6 },
];

function Depoimentos() {
  const [historiaAtiva, setHistoriaAtiva] = useState(0);
  const [pausado, setPausado] = useState(false);
  const historia = historias[historiaAtiva];

  useEffect(() => {
    if (pausado) return undefined;

    const intervalo = window.setInterval(() => {
      setHistoriaAtiva((atual) => (atual + 1) % historias.length);
    }, 6000);

    return () => window.clearInterval(intervalo);
  }, [pausado]);

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <p className="secao-eyebrow">MUDANÇAS QUE VIRARAM CARREIRA</p>
        <h2 className="titulo-secao">O que nossos alunos dizem</h2>
        <p className="subtitulo-secao">Cada escolha na trilha deixa uma história diferente para contar.</p>

        <div
          className={`depoimento-palco ${pausado ? 'pausado' : ''}`}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <article className="historia-destaque" aria-live="polite">
            <span className="historia-marca">“</span>
            <p className="historia-rotulo">HISTÓRIA EM DESTAQUE</p>
            <p className="historia-texto">{historia.texto}</p>
            <div className="historia-pessoa">
              <img src={historia.imagem} alt={`Foto de ${historia.nome}`} />
              <div>
                <h3>{historia.nome}</h3>
                <p>{historia.curso}</p>
              </div>
            </div>
          </article>

          <div className="historias-seletor" aria-label="Escolha uma história de aluno">
            <p>{pausado ? 'PAUSADO — CONTINUE EXPLORANDO' : 'PRÓXIMA HISTÓRIA AUTOMÁTICA'} <span>0{historiaAtiva + 1}/0{historias.length}</span></p>
            <div className="historias-avatares">
              {historias.map((item, index) => (
                <button
                  type="button"
                  key={item.nome}
                  className={index === historiaAtiva ? 'ativo' : ''}
                  onClick={() => setHistoriaAtiva(index)}
                  aria-pressed={index === historiaAtiva}
                  aria-label={`Ver história de ${item.nome}`}
                >
                  <img src={item.imagem} alt="" />
                  <span>{item.nome.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <p className="historias-nota">Não é só sobre aprender uma habilidade. É sobre conquistar espaço para construir o seu futuro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
