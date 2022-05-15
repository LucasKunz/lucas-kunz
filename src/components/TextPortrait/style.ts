import styled from "styled-components";

export const ImageText = styled.div`
  animation: lineHeightMobile 12.5s forwards;
  background: url('/perfil.png') no-repeat center;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
  color: transparent;
  font-size: 13px;
  height: 380px;
  line-height: 1;
  width: 445px;
  overflow: hidden;
  
  transition: line-height 1.5s ;

  @keyframes lineHeightMobile {
    0% {
      line-height: 1;
      letter-spacing: unset;
    }
    90% {
      line-height: 1;
      letter-spacing: unset;
    }
    100% {
      line-height: 0.09;
      letter-spacing: -4px;
    }
  }

  @media (min-width: 1024px) {
    animation: lineHeight 12.5s;
    height: 700px;
    line-height: 1;
    letter-spacing: unset;
    width: 700px;

    &:hover {
      line-height: 0.09;
      letter-spacing: -4px;
    }

    @keyframes lineHeight {
      0% {
        line-height: 0.09;
        letter-spacing: -4px;
      }
      90% {
        line-height: 0.09;
        letter-spacing: -4px;
      }
      100% {
        line-height: 1;
        letter-spacing: unset;
      }
    }
  }
  
`