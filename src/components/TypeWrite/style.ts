import styled from "styled-components";

export const Typing = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 700px;

  h1 {
    animation: typingText 5s steps(70) forwards;
    color: #fff;
    font-size: 55px;
    font-weight: 100;
    max-width: 500px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    width: 0px;

    .name {
      color: ${props => props.theme.colors.primary};
    }

    &::after {
      animation: text 0.6s infinite reverse;
      animation-iteration-count: 7;
      background-color: white;
      bottom: 14px;
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
    animation-delay: 5s;
    color: #fff;
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

  
  .three {
    animation: fadeInUp 1.8s ease forwards;
    animation-delay: 7s;
    color: ${props => props.theme.colors.primary};
    font-weight: 100;
    display: inline-block;
    font-size: 26px;
    opacity: 0;
    transform: translate(-5px, 5rem);
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
`;
