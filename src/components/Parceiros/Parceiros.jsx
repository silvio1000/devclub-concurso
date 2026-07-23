// Monta a rede visual usando a lista de empresas parceiras.
import './Parceiros.css';

const parceiros = [
  { nome: 'TechSolutions', area: 'Software sob medida' },
  { nome: 'DataMind', area: 'Dados & IA' },
  { nome: 'CloudPro', area: 'Nuvem & escala' },
  { nome: 'DevMobile', area: 'Apps mobile' },
  { nome: 'EducaTech', area: 'Educação tech' },
  { nome: 'SecurityNet', area: 'Cibersegurança' },
];

function Parceiros() {
  return (
    <section id="parceiros" className="parceiros">
      <div className="container">
        <p className="secao-eyebrow">CONEXÕES QUE ABREM CAMINHOS</p>
        <h2 className="titulo-secao">Nossos Parceiros</h2>
        <p className="subtitulo-secao">Uma rede conectada à tecnologia e às oportunidades que movem o mercado.</p>

        <div className="parceiros-rede" aria-label="Rede de parceiros Dev Club">
          <svg className="rede-linhas" viewBox="0 0 1000 540" preserveAspectRatio="none" aria-hidden="true">
            <line x1="500" y1="270" x2="120" y2="100" />
            <line x1="500" y1="270" x2="180" y2="420" />
            <line x1="500" y1="270" x2="485" y2="54" />
            <line x1="500" y1="270" x2="880" y2="100" />
            <line x1="500" y1="270" x2="820" y2="420" />
            <line x1="500" y1="270" x2="520" y2="500" />
          </svg>

          <div className="rede-centro"><span>ECOSSISTEMA</span><strong>DEV<br />CLUB</strong></div>
          {parceiros.map((parceiro, index) => (
            <a className={`rede-no rede-no-${index}`} key={parceiro.nome} href="https://google.com" target="_blank" rel="noreferrer">
              <i aria-hidden="true" />
              <strong>{parceiro.nome}</strong>
              <span>{parceiro.area}</span>
            </a>
          ))}
        </div>
        <p className="rede-instrucao">Passe pelas conexões e descubra quem caminha com a gente <span>↗</span></p>
      </div>
    </section>
  );
}

export default Parceiros;
