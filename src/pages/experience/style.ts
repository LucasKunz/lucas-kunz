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