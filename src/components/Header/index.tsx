import React, { useContext } from "react";
import { Container, Menu, Switch, Information } from "./style";
// import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import Link from "next/link";

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <span>Portfolio </span>
      <Information>
        <Menu>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </Menu>
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
      </Information>
    </Container>
  );
};

export default Header;
