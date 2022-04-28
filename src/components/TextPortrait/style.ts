import styled from "styled-components";

export const ImageText = styled.div`
  animation: lineHeight 8.5s;
  background: url('/perfil.png') no-repeat center;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
  color: transparent;
  font-size: 13px;
  height: 700px;
  line-height: 1;
  width: 700px;
  overflow: hidden;
  
  transition: line-height 1.5s ;

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
  
`