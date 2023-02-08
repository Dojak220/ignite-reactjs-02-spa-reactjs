import igniteLogo from "../../assets/ignite-logo.svg";
import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={igniteLogo}
        alt="Logotipo da aplicação. Dois triângulos equiláteros verdes, posicionados diagonalmente e parcialmente sobrepostos. O de baixo é levemente menor que o de cima"
      />
      <nav>
        <NavLink to="/" title="Cronômetro">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
