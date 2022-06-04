import Image from "next/image";
import Link from "next/link";
import { Main, Text, Title, IconMedias, SocialMedias } from "./style";


const Experiences = () => {
  return (
    <Main>
      <Title>Contact</Title>
      <Text>You can find me in the networks below. And if you want to know more information, feel free to send me a message.</Text>
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
          <Link href='https://github.com/LucasKunz' passHref>
             <a target='_blank'>
              <Image src="/icons/logo-github.svg" alt="Ícone Github" width={25} height={25}/>
             </a>
          </Link>
        </IconMedias>
            <span>LucasKunz</span>
        </div>
      </SocialMedias>
    </Main>
  )
}

export default Experiences;