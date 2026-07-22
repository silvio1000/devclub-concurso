// Importa as ferramentas do React
import { useEffect, useRef } from 'react';
// Importa os estilos
import './ParticleLogo.css';

// Componente que cria o efeito de partículas formando D e C
function ParticleLogo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // ==============================================
    // CONFIGURAÇÕES GERAIS
    // ==============================================
    const alturaEfeito = 450;        // Altura da área do efeito
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = alturaEfeito;

    let particles = [];
    let animationFrame;
    let estado = 'espalhado';
    const totalParticulas = 25000;   // Quantidade suficiente para cobrir bem

    // ==============================================
    // FUNÇÃO: Gera letras com espessura uniforme
    // ==============================================
    function gerarPontosLetras() {
      const pontosD = [];
      const pontosC = [];

      // Posição central ajustada
      const centroX = width / 2;
      const centroY = height / 1.5; // Mais para baixo

      // ⚙️ VALORES QUE VOCÊ AJUSTA
      const tamanho = 120;            // Tamanho total da letra
      const larguraBarriga = 100;      // Largura da parte arredondada
      const espessura = 30;           // 👈 Espessura de TODA a letra
      const espacoEntre = 150;         // Distância entre D e C
      const passo = 1;

      // ==============================================
      // LETRA D - LINHA RETA
      // ==============================================
      const xBaseD = -espacoEntre;

      // Preenche toda a espessura da linha reta
      for (let x = xBaseD - espessura / 2; x <= xBaseD + espessura / 2; x += passo) {
        for (let y = -tamanho; y <= tamanho; y += passo) {
          const z = (Math.random() - 0.5) * 40;
          pontosD.push({ x, y, z });
        }
      }

      // ==============================================
      // LETRA D - CURVA ARREDONDADA (ESPESSURA UNIFORME)
      // ==============================================
      // Agora criamos várias camadas de raio decrescente, preenchendo todo o espaço
      for (let deslocamento = 0; deslocamento < espessura; deslocamento += passo) {
        const raioAtual = larguraBarriga - deslocamento;

        // Percorre todo o ângulo da curva
        for (let angulo = -Math.PI / 2; angulo <= Math.PI / 2; angulo += 0.012) {
          const z = (Math.random() - 0.5) * 40;

          pontosD.push({
            x: xBaseD + Math.cos(angulo) * raioAtual,
            y: Math.sin(angulo) * tamanho,
            z
          });
        }
      }

      // ==============================================
      // LETRA C - TOTALMENTE COM ESPESSURA IGUAL
      // ==============================================
      const xBaseC = espacoEntre;

      // Mesma lógica de camadas para o C ficar completo e grosso
      for (let deslocamento = 0; deslocamento < espessura; deslocamento += passo) {
        const raioAtual = larguraBarriga - deslocamento;

        // Ângulo completo do C
        for (let angulo = Math.PI / 2; angulo <= (3 * Math.PI) / 2; angulo += 0.012) {
          const z = (Math.random() - 0.5) * 40;

          pontosC.push({
            x: xBaseC + Math.cos(angulo) * raioAtual,
            y: Math.sin(angulo) * tamanho,
            z
          });
        }
      }

      // ==============================================
      // POSICIONA NO CENTRO
      // ==============================================
      const todosPontos = [];
      pontosD.forEach(p => todosPontos.push({ x: p.x + centroX, y: p.y + centroY, z: p.z }));
      pontosC.forEach(p => todosPontos.push({ x: p.x + centroX, y: p.y + centroY, z: p.z }));

      return todosPontos;
    }

    let posicoesDestino = gerarPontosLetras();

    // ==============================================
    // PROJEÇÃO E ANIMAÇÃO
    // ==============================================
    function projetar(p3d) {
      const distanciaCamera = 750;
      const escala = distanciaCamera / (distanciaCamera + p3d.z);
      return {
        x: p3d.x,
        y: p3d.y,
        tamanho: 1.1 * escala,
        brilho: Math.min(1, Math.max(0.4, escala))
      };
    }

    function criarParticula() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 - 100,
        vx: 0, vy: 0, vz: 0
      };
    }

    function atualizarParticula(p, indice) {
      const alvo = posicoesDestino[indice % posicoesDestino.length];

      if (estado === 'formando' || estado === 'formado') {
        const dx = alvo.x - p.x;
        const dy = alvo.y - p.y;
        const dz = alvo.z - p.z;

        p.vx = dx * 0.2;
        p.vy = dy * 0.2;
        p.vz = dz * 0.18;

        if (Math.abs(dx) < 0.12 && Math.abs(dy) < 0.12 && Math.abs(dz) < 0.3) {
          p.vx = p.vy = p.vz = 0;
          p.x = alvo.x;
          p.y = alvo.y;
          p.z = alvo.z;
        }
      } else {
        const forca = 0.7;
        p.vx += (Math.random() - 0.5) * forca;
        p.vy += (Math.random() - 0.5) * forca;
        p.vz += (Math.random() - 0.5) * forca * 0.4;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vz *= 0.99;
      }

      const maxVel = 5;
      p.vx = Math.max(-maxVel, Math.min(maxVel, p.vx));
      p.vy = Math.max(-maxVel, Math.min(maxVel, p.vy));
      p.vz = Math.max(-maxVel / 2, Math.min(maxVel / 2, p.vz));

      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
    }

    function desenharParticula(p) {
      const proj = projetar(p);
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, proj.tamanho, 0, Math.PI * 2);
      const cor = Math.random() > 0.5
        ? `rgba(184, 18, 189, ${proj.brilho})`
        : `rgba(80, 240, 120, ${proj.brilho * 0.85})`;
      ctx.fillStyle = cor;
      ctx.fill();
    }

    function iniciar() {
      particles = Array.from({ length: totalParticulas }, criarParticula);
    }

    function animar() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        atualizarParticula(p, i);
        desenharParticula(p);
      });
      animationFrame = requestAnimationFrame(animar);
    }

    function ciclo() {
      estado = 'formando';
      setTimeout(() => estado = 'formado', 700);
      setTimeout(() => estado = 'espalhado', 6000);
      setTimeout(ciclo, 12000);
    }

    function redimensionar() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = alturaEfeito;
      posicoesDestino = gerarPontosLetras();
    }

    iniciar();
    animar();
    ciclo();
    window.addEventListener('resize', redimensionar);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', redimensionar);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-logo" />;
}

export default ParticleLogo;