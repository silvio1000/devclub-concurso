// Importa os estilos da barra de navegação
import './Navbar.css';

// Componente principal da barra de navegação
function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo da marca - lado esquerdo */}
      <img 
        src="/src/assets/dev.png" 
        className="logo" 
        alt="Logo DevClub" 
      />

      {/* Menu de navegação */}
      <ul className="menu">
        {/* Links internos que rolam a página */}
        <li><a href="#inicio">Início</a></li>
        <li><a href="#formacoes">Formações</a></li>
        <li><a href="#tutores">Tutores</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#parceiros">Parceiros</a></li>

 {/* ✅ Botão com link funcional para outra página */}
        <li>
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="botao-matricula"
          >
            Matricule-se
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;