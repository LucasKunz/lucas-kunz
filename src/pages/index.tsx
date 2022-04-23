import type { NextPage } from "next";
import Header from "../components/Header";
import usePersistedState from "../utils/usePersistedState";
import { Test, Typing } from "./style";

import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import themeLight from "../styles/themes/light";
import themeDark from "../styles/themes/dark";

const Home: NextPage = () => {
  const [theme, setTheme] = usePersistedState("theme", themeDark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? themeLight : themeDark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />

      <Typing className="typewriter">
        <h1 className="one">Hey, I&apos;m</h1>
        <h1 className="two">Lucas Kunz!</h1>
        <h1 className="three">Frontend Developer</h1>
      </Typing>

      {/* <Test>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione enim
        corporis voluptatum, facilis in nihil! Provident nihil veritatis nobis
        dolore, quos reprehenderit et porro, eum voluptate excepturi obcaecati
        distinctio cum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Neque, dolores. Ipsam dolore corrupti totam est excepturi, amet
        doloribus molestiae inventore quasi sed unde libero dignissimos! Ex
        deserunt qui facere officia! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio quas quod beatae, excepturi, debitis
        incidunt modi praesentium veritatis sapiente corrupti est! Voluptates,
        voluptas! Eaque illo quo error earum nesciunt autem. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veritatis odio unde corrupti
        magni, fugiat id reiciendis deserunt consequatur. Maxime necessitatibus
        et ipsam distinctio sed dolore dolorem nulla numquam repellat itaque.
      </Test> */}
    </ThemeProvider>
  );
};

export default Home;
