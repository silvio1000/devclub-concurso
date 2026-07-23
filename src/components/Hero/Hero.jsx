// Banner inicial: alterna entre o programador em pé e sentado ao passar o mouse.
import heroProgramador from '../../assets/hero-programador-formacoes.png';
import heroProgramadorEmPe from '../../assets/hero-programador-em-pe-depoimento.png';
import Impacto from '../Impacto/Impacto.jsx';
import './Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-codigo" aria-hidden="true">
        <span>const futuro = tecnologia;</span>
        <span>while (vontade) &#123; aprender(); &#125;</span>
        <span>projeto.portfolio = criar();</span>
        <span>carreira.proximoNivel();</span>
        <span>export default seuFuturo;</span>
      </div>
      <div className="hero-visual" role="img" aria-label="Pessoa programando em um computador cercada por código">
        <img className="hero-ilustracao hero-ilustracao--sentado" src={heroProgramador} alt="" />
        <img className="hero-ilustracao hero-ilustracao--em-pe" src={heroProgramadorEmPe} alt="" />
      </div>
      <div className="hero-conteudo">
        <p className="hero-selo">DEVCLUB // FORMAÇÕES <span></span></p>
        <h1 className="hero-titulo">Seu próximo nível<br />começa aqui.</h1>
        <p className="hero-subtitulo">Do primeiro código à sua próxima oportunidade em tecnologia.</p>
        <div className="hero-tags" aria-label="Áreas de formação"><span>Web</span><span>Mobile</span><span>IA & Dados</span></div>
        <a className="hero-cta" href="#matricula">Começar minha jornada</a>
      </div>
      <Impacto />
    </section>
  );
}

export default Hero;
