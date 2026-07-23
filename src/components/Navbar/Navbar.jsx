import { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/dev.png";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="navbar">
    <img src={logo} alt="Logo DevClub" />
      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menu de navegação"
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto((aberto) => !aberto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="menu-principal" className={`menu ${menuAberto ? 'menu-aberto' : ''}`}>
        <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
        <li><a href="#formacoes" onClick={fecharMenu}>Formações</a></li>
        <li><a href="#tutores" onClick={fecharMenu}>Tutores</a></li>
        <li><a href="#depoimentos" onClick={fecharMenu}>Depoimentos</a></li>
        <li><a href="#parceiros" onClick={fecharMenu}>Parceiros</a></li>
        <li>
          <a
            href="#matricula"
            className="botao-matricula"
            onClick={fecharMenu}
          >
            Matricule-se
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
