import React, { useContext } from "react";
import { Container, Menu, Switch, Information, Hamburguer } from "./style";
// import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import Link from "next/link";

let MOBILE_SCREEN = false;
if (typeof window !== "undefined") {
  MOBILE_SCREEN = window.innerWidth < 768;
}


interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  const handleMenu = () => {
    const elMenu = document.querySelector('.menu');
    const elHamburguer = document.querySelectorAll('.line');

    if (!elMenu || !elHamburguer) return;

    elMenu.classList.toggle('active');

    if (Array.from(elHamburguer).find(item => item.classList.contains('open'))) {
      elHamburguer.forEach(item => {
        item.classList.remove('open');
        item.classList.add('closed');
      });

      return;
    };
    
    elHamburguer.forEach(item => {
      item.classList.remove('closed');
      item.classList.add('open');
    });
  }

  return (
    <Container>
      <span>Portfolio </span>
      <Information>
        {!MOBILE_SCREEN && (
          <Menu>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </Menu>
        )}
        <Switch>
          <input
            id="switch-shadow"
            className="switch switch--shadow"
            type="checkbox"
            checked={title === "dark" ? true : false}
            onChange={toggleTheme}
          />
          <label htmlFor="switch-shadow" />
        </Switch>
        <Hamburguer className="hamburguer" onClick={handleMenu}>
          <span className="line line--one"></span>
          <span className="line line--two"></span>
          <span className="line line--three"></span>
        </Hamburguer>
      </Information>
      {MOBILE_SCREEN && (
          <Menu className="menu">
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </Menu>
        )}
    </Container>
  );
};

export default Header;
