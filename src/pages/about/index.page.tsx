import Image from "next/image";
import Link from "next/link";
import { IconMedias, Main, SocialMedias, Text, Title } from "./style";


const About = () => {
  return (
    <Main>
      <Title>About me</Title>
      <Text>Hello, my name is <b>Lucas Kunz</b>. I&apos;m 22 years old and live in Rio Grande do Sul, Brazil. I have been working in the IT area for a little over 1 year. Since I started, I have always worked with front-end web application development.</Text>
      <Text> I started my journey in 2020, through <a href="https://www.growdev.com.br/">Growdev&apos;s</a> Starter program, 3rd edition, which trains full stack web developers. There, we learned from scrach, starting with HTML, CSS and Javascript, and moving on to React on the frontend Node on the backend. During the program, I started a degree in Systems Analysis and Development at the Cruzeiro do Sul University, where I finished in 2021. And currently, I am constantly studying and deepening my knowledge on <a href="https://www.rocketseat.com.br/">Rocketseat&apos;s</a> study platform</Text>

      <SocialMedias>
        <div>
          <IconMedias>
            <Link href='https://www.linkedin.com/in/lucas-kunz-4098601b3/' passHref>
               <a target='_blank'>
                <Image src="/icons/logo-linkedin.svg" alt="Ícone do linkedin" width={25} height={25}/>
               </a>
            </Link>
          </IconMedias>
              <span>lucas-kunz</span>
        </div>
        <div>
          
        <IconMedias>
          <Link href='https://www.instagram.com/lucaskunz_/?hl=en' passHref>
             <a target='_blank'>
              <Image src="/icons/logo-instagram.svg" alt="Ícone do instagram" width={25} height={25}/>
             </a>
          </Link>
        </IconMedias>
            <span>@lucaskunz_</span>
        </div>
        <div>

        <IconMedias>
          <Link href='mailto:lucaskunz1@gmail.com' passHref>
            <a target='_blank'>
            <Image src="/icons/logo-email.svg" alt="Ícone Carta" width={25} height={25}/>
            </a>
          </Link>
        </IconMedias>
           <span>lucaskunz1@gmail.com</span>
        </div>
        <div>

        <IconMedias>
          <Link href='tel:+555198206021' passHref>
             <a target='_blank'>
              <Image src="/icons/logo-phone.svg" alt="Ícone Celular" width={25} height={25}/>
             </a>
          </Link>
        </IconMedias>
            <span>(51) 99820-6021</span>
        </div>
      </SocialMedias>
    </Main>
  )
}

export default About;