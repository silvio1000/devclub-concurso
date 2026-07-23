// Apresenta a jornada de aprendizado em etapas interativas.
import { useState } from 'react';
import './Jornada.css';

const etapas = [
  { numero: '01', icone: '⌁', titulo: 'Aprender', descricao: 'Encontre uma trilha, domine fundamentos e ganhe confiança.', impacto: 'BASE DESBLOQUEADA', resultado: '> conhecimento desbloqueado...' },
  { numero: '02', icone: '</>', titulo: 'Criar projetos', descricao: 'Transforme ideias em experiências reais para o seu portfólio.', impacto: 'PORTFÓLIO ATIVO', resultado: '> projeto publicado no portfólio.' },
  { numero: '03', icone: '↗', titulo: 'Entrar no mercado', descricao: 'Apresente suas habilidades e conquiste novas oportunidades.', impacto: 'OPORTUNIDADES REAIS', resultado: '> oportunidade de carreira detectada.' },
];

function Jornada() {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const [resposta, setResposta] = useState(null);
  const opcoes = ['3', '4', '5'];

  return (
    <section className="jornada" aria-labelledby="jornada-titulo">
      <div className="container">
        <p>ROTA DE TRANSFORMAÇÃO</p>
        <h2 id="jornada-titulo">Seu futuro não espera.<br />Você constrói o próximo passo.</h2>
        <div className={`jornada-etapas etapa-${etapaAtiva}`}>
          <span className="jornada-luz" aria-hidden="true"></span>
          {etapas.map((etapa, indice) => (
            <button
              type="button"
              className={`jornada-etapa ${indice === etapaAtiva ? 'ativa' : ''}`}
              key={etapa.numero}
              onMouseEnter={() => setEtapaAtiva(indice)}
              onFocus={() => setEtapaAtiva(indice)}
              onClick={() => setEtapaAtiva(indice)}
              aria-pressed={indice === etapaAtiva}
            >
              <span className="jornada-numero"><b>{etapa.numero}</b><i>{etapa.icone}</i></span>
              <span className="jornada-texto"><strong>{etapa.titulo}</strong><em>{etapa.descricao}</em><small>{etapa.impacto}</small></span>
            </button>
          ))}
        </div>
        <aside className="modo-desafio" aria-label="Desafio da trilha de transformação">
          <div className="desafio-cabecalho"><span>⌘ DESAFIO DA TRILHA</span><small>ETAPA PRÁTICA</small></div>
          <div className="desafio-corpo">
            <div><p className="desafio-pergunta">Qual será o resultado exibido?</p><pre><code><span>const</span> dev = <i>'club'</i>;<br /><span>console</span>.log(dev.length);</code></pre></div>
            <div className="desafio-acoes">
              <div className="desafio-opcoes">{opcoes.map((opcao) => <button type="button" key={opcao} disabled={resposta !== null} onClick={() => resposta === null && setResposta(opcao)} className={resposta === opcao ? (opcao === '4' ? 'correta' : 'incorreta') : ''}>{opcao}</button>)}</div>
              {resposta && <p className={`desafio-retorno ${resposta === '4' ? 'sucesso' : 'erro'}`}>{resposta === '4' ? '✓ Acertou! “club” possui 4 letras.' : '↻ Quase! Conte os caracteres de “club”.'}<button type="button" onClick={() => setResposta(null)}>Tentar de novo</button></p>}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Jornada;
