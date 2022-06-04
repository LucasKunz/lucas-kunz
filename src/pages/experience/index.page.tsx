import Image from "next/image";
import Link from "next/link";
import { Main, Text, Title, Brand } from "./style";


const Experiences = () => {
  return (
    <Main>
      <Title>Experience</Title>
      <Text>In June 2021, I had the opportunity to migrate to the IT area. Through a partnership between Growdev and Arezzo&Co, I was hired as a trainee to integrate Arezzo&Co&apos;s web development team. In January 2022, I was hired and became part of Arezzo&Co&apos;s corporate staff, where I currently work. </Text>
      <Text>I work daily with HTML structures, CSS and its pre-processors (SASS, SCSS), styled components, javascript and react (using typescript). I also perform maintenance on JSP files and Tag Libraries. In addition, we often use Google platforms for some implementations, such as Tag Manager and Optimize. All features and patches are done using GIT as version control.</Text>
      <Brand>
        <Link href='https://ri.arezzoco.com.br/en/' passHref>
          <Image src='/icons/icon-arezzo.svg' alt="Icone Arezzo&Co" height={120} width={120}/>
        </Link>
      </Brand>
    </Main>
  )
}

export default Experiences;