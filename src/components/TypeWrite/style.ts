import styled from "styled-components";

export const Typing = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  min-height: 100px;
  overflow: hidden;
  width: auto;

  .typewriter {
    &__name {
      color: ${props => props.theme.colors.primary};
    }

    &__message {
      animation: fadeInUp 1.8s ease forwards;
      animation-delay: 8s;
      color: ${props => props.theme.colors.primary};
      height: 29px;
      font-weight: 100;
      display: inline-block;
      font-size: 20px;
      opacity: 0;
      transform: translate(-5px, 5.1rem);
    } 
  }

  h1 {
    animation: typingText 4s steps(70) forwards;
    color: ${(props) => props.theme.colors.text};
    font-size: 35px;
    font-weight: 100;
    max-width: 500px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    width: 0px;

    &::after {
      animation: text 0.6s infinite reverse;
      animation-iteration-count: 9;
      background-color: white;
      bottom: 9px;
      content: "";
      height: 50px;
      opacity: 0;
      position: absolute;
      right: -1px;
      width: 2px;
    }
  }

  p {
    animation: typingText 5s steps(70) forwards;
    animation-delay: 6s;
    color: ${(props) => props.theme.colors.text};
    font-size: 22px;
    font-weight: 100;
    max-width: 200px;
    text-align: center;
    overflow: hidden;
    position: relative;
    width: 0px;
    white-space: nowrap;


    &::after {
      animation: text 0.6s infinite reverse ease-in-out;
      animation-delay: 4.2s;
      background-color: white;
      bottom: 5px;
      content: "";
      height: 33px;
      opacity: 0;
      position: absolute;
      right: -1px;
      width: 2px;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translate(-5px, 5px);
    }
  }

  @keyframes typingText {
    to {
      width: 100%;
    }
  }

  @keyframes text {
    to {
      opacity: 0.8;
    }
  }

  @media (min-width: 1024px) {  
    margin-bottom: 150px;

    h1 {
      font-size: 55px;

      &::after {
        bottom: 14px;
      }
    }

    p {
      animation: typingText 5s steps(70) forwards;
      animation-delay: 5s;
      color: ${(props) => props.theme.colors.text};
      font-size: 36px;
      font-weight: 100;
      max-width: 320px;
      overflow: hidden;
      position: relative;
      width: 0px;
      white-space: nowrap;


      &::after {
        animation: text 0.6s infinite reverse ease-in-out;
        animation-delay: 4.2s;
        background-color: white;
        bottom: 5px;
        content: "";
        height: 33px;
        opacity: 0;
        position: absolute;
        right: -1px;
        width: 2px;
      }
    }
  }
`;
