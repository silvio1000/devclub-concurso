// Monta a faixa animada com os principais números de impacto.
import './Impacto.css';

const dados = [['01', '1.200+', 'alunos impactados'], ['02', '4.800h', 'de conteúdo prático'], ['03', '92%', 'recomendam a formação']];

function BlocoResultados() {
  return dados.map(([codigo, numero, texto]) => (
    <span className="impacto-item" key={codigo}>
      <i>{codigo}</i>
      <span><strong>{numero}</strong><em>{texto}</em></span>
    </span>
  ));
}

function Impacto() {
  return (
    <div className="impacto" aria-label="Resultados que inspiram">
      <div className="impacto-grade"></div>
      <div className="impacto-faixa">
        <div className="impacto-trilha">
          <div className="impacto-grupo"><div className="impacto-status"><b></b><small>RESULTADOS AO VIVO</small></div><BlocoResultados /></div>
          <div className="impacto-grupo" aria-hidden="true"><div className="impacto-status"><b></b><small>RESULTADOS AO VIVO</small></div><BlocoResultados /></div>
        </div>
      </div>
    </div>
  );
}

export default Impacto;
