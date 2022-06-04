import styled from "styled-components";

export const Main = styled.main`
  font-family: 'DM Sans';
  justify-content: center ;
  margin: 80px auto 0;
  max-width: 750px;
  padding: 0 20px;
  text-align: center;
  width: 100%;

  img {
    cursor: pointer;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  display: block;
  font-size: 18px;
  line-height: 1.4;
  margin: 20px 0 25px;

  a {
    color: ${props => props.theme.colors.primary} ;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.text} ;
`

export const SocialMedias = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
      color: ${props => props.theme.colors.grayText};
    }
  }

  @media (min-width: 768px) {
   display: flex;
  }
`

export const IconMedias = styled.div`
  align-items: center;
  background-color: #212121;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  margin: 15px 60px;
  transition: .2s;
  width: 60px;

  &:hover {
    filter: brightness(0.8);
  }
`