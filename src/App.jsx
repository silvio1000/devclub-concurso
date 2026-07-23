// Importa todos os componentes normais
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Jornada from './components/Jornada/Jornada.jsx';
import Formacoes from './components/Formacoes/Formacoes.jsx';
import Tutores from './components/Tutores/Tutores.jsx';
import Depoimentos from './components/Depoimentos/Depoimentos.jsx';
import Parceiros from './components/Parceiros/Parceiros.jsx';
import Carreira from './components/Carreira/Carreira.jsx';
import ChamadaFinal from './components/ChamadaFinal/ChamadaFinal.jsx';
import Background from './components/Background/Background.jsx';
import Footer from './components/Footer/Footer.jsx';

// Importa estilos gerais
import './App.css';

function App() {
  const [mostrarAbertura, setMostrarAbertura] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMostrarAbertura(false);
      return undefined;
    }

    const temporizador = window.setTimeout(() => setMostrarAbertura(false), 2500);
    return () => window.clearTimeout(temporizador);
  }, []);

  useEffect(() => {
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elementos = document.querySelectorAll(
      '.formacoes .titulo-secao, .formacoes .subtitulo-secao, .formacoes .card-formacao, .tutores .titulo-secao, .tutores .subtitulo-secao, .tutores .card-tutor'
    );

    if (reduzirMovimento) {
      elementos.forEach((elemento) => elemento.classList.add('revelado'));
      return undefined;
    }

    elementos.forEach((elemento) => elemento.classList.add('animar-entrada'));
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.16 });

    elementos.forEach((elemento) => observador.observe(elemento));
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const cartoes = document.querySelectorAll('.card-formacao, .card-tutor');
    const limpar = [];

    cartoes.forEach((cartao) => {
      const mover = (evento) => {
        const area = cartao.getBoundingClientRect();
        const inclinacaoY = ((evento.clientX - area.left) / area.width - 0.5) * 7;
        const inclinacaoX = ((evento.clientY - area.top) / area.height - 0.5) * -7;
        cartao.style.setProperty('--inclinacao-x', `${inclinacaoX}deg`);
        cartao.style.setProperty('--inclinacao-y', `${inclinacaoY}deg`);
      };
      const sair = () => {
        cartao.style.setProperty('--inclinacao-x', '0deg');
        cartao.style.setProperty('--inclinacao-y', '0deg');
      };
      cartao.addEventListener('pointermove', mover);
      cartao.addEventListener('pointerleave', sair);
      limpar.push(() => {
        cartao.removeEventListener('pointermove', mover);
        cartao.removeEventListener('pointerleave', sair);
      });
    });

    return () => limpar.forEach((remover) => remover());
  }, []);

  return (
    <div className="app-container">
      {mostrarAbertura && (
        <div className="terminal-abertura" role="status" aria-label="Inicializando Dev Club">
          <div className="terminal-janela">
            <div className="terminal-topo"><span /><span /><span /><p>devclub://inicializacao</p></div>
            <div className="terminal-conteudo">
              <p className="terminal-linha linha-1"><span>&gt;</span> conectando futuros desenvolvedores</p>
              <p className="terminal-linha linha-2"><span>✓</span> trilhas de aprendizado carregadas</p>
              <p className="terminal-linha linha-3"><span>✓</span> comunidade online</p>
              <p className="terminal-linha linha-4"><span>✓</span> oportunidade detectada</p>
              <div className="terminal-progresso"><i /></div>
              <p className="terminal-pronto">DEV CLUB PRONTO<span>_</span></p>
            </div>
          </div>
        </div>
      )}
      <Background />
      <Navbar />
      <Hero />
      <Jornada />
      <Formacoes />
      <Tutores />
      <Depoimentos />
      <Parceiros />
      <Carreira />
      <ChamadaFinal />
      <Footer />

      {/* 
        BOTÃO DO WHATSAPP 
        Direto no App, sem criar nada extra
        Altere o número abaixo para o seu
      */}
      <a 
        href="https://wa.me/5547999998888" 
        target="_blank" 
        rel="noopener noreferrer"
        className="botao-whatsapp-flutuante"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Ícone do WhatsApp */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12.004 2.002c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm.001 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4.518-5.946c-.247-.124-1.465-.723-1.693-.806-.229-.083-.395-.124-.562.124-.166.248-.642.806-.787.972-.146.166-.292.187-.539.062-.247-.124-1.044-.383-1.987-1.223-.735-.656-1.231-1.467-1.377-1.715-.146-.248-.015-.382.109-.506.112-.113.247-.292.371-.438.124-.146.165-.248.248-.414.083-.166.041-.312-.021-.437-.062-.124-.562-1.354-.772-1.852-.203-.487-.412-.421-.562-.428-.146-.007-.312-.007-.478-.007s-.437.062-.667.312c-.229.248-.879.858-.879 2.091 0 1.234.899 2.426 1.024 2.592.124.166 1.758 3.368 4.248 4.728.593.324 1.056.518 1.416.662.596.238 1.139.204 1.566.124.477-.091 1.465-.598 1.673-1.176.208-.578.208-1.072.146-1.176-.062-.104-.229-.166-.476-.29z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
