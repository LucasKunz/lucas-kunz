import React, { useContext } from "react";
import { Container, Menu, Switch, Information, Hamburguer } from "./style";
import { ThemeContext } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

let MOBILE_SCREEN = false;
if (typeof window !== "undefined") {
  MOBILE_SCREEN = window.innerWidth < 768;
}

const listLinksMenu = [
  { href: '/about', name: 'About'},
  { href: '/experience', name: 'Experience'},
  { href: '/projects', name: 'Projects'},
  { href: '/contact', name: 'Contact'},
]
interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const { pathname } = useRouter();

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
      <Link href='/' passHref>
        <span>Portfolio </span>
      </Link>
      <Information>
        {!MOBILE_SCREEN && (
          <Menu>
            {listLinksMenu.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  <a className={`${pathname == item.href ? 'active' : ''}`}>{item.name}</a>
                </Link>
              )
            })}
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
