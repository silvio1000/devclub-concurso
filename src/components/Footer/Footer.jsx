// Importa a biblioteca React
import React from 'react';
// Importa os estilos do rodapé
import './Footer.css';

// ==============================================
// COMPONENTE RODAPÉ
// Mesmo estilo, cores e animações das outras seções
// ==============================================
function Footer() {
  return (
    <footer id="rodape" className="rodape">
      {/* Camada da borda luminosa animada — igual aos cartões */}
      <div className="card-borda"></div>

      {/* Container principal: mesma estrutura das outras seções */}
      <div className="container">
        <div className="rodape-conteudo">

          {/* Grade com as colunas de informações */}
          <div className="rodape-grid">

            {/* ==============================================
              COLUNA 1: SOBRE NÓS
            ============================================== */}
            <div className="rodape-coluna">
              <h3 className="rodape-titulo">Sobre Nós</h3>
              <p className="rodape-texto">
                Somos uma instituição focada em ensinar tecnologia de forma prática e acessível, preparando você para o mercado e transformando sua carreira.
              </p>
            </div>

            {/* ==============================================
              COLUNA 2: LINKS ÚTEIS
            ============================================== */}
            <div className="rodape-coluna">
              <h3 className="rodape-titulo">Links Úteis</h3>
              <ul className="rodape-lista">
                <li><a href="#formacoes" className="rodape-link">Nossas formações</a></li>
                <li><a href="#tutores" className="rodape-link">Nossos Tutores</a></li>
                <li><a href="#depoimentos" className="rodape-link">Depoimentos</a></li>
                <li><a href="#parceiros" className="rodape-link">Parceiros</a></li>
                <li><a href="#contato" className="rodape-link">Contato</a></li>
              </ul>
            </div>

            {/* ==============================================
              COLUNA 3: CONTATO
            ============================================== */}
            <div className="rodape-coluna">
              <h3 className="rodape-titulo">Contato</h3>
              <ul className="rodape-lista">
                <li>📧 contato@escolatech.com.br</li>
                <li>📞 (47) 99999-0000</li>
                <li>📍 Blumenau - SC, Brasil</li>
              </ul>
            </div>

            {/* ==============================================
              COLUNA 4: REDES SOCIAIS
            ============================================== */}
            <div className="rodape-coluna">
              <h3 className="rodape-titulo">Siga-nos</h3>
              <div className="redes-sociais">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rede-link">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rede-link">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rede-link">LinkedIn</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="rede-link">YouTube</a>
              </div>
            </div>

          </div>

          {/* Linha final com direitos autorais */}
          <div className="rodape-direitos">
            <p>© {new Date().getFullYear()} Escola Tech. Todos os direitos reservados.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;