import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: space-around;
  height: 100px;
  overflow-x: clip;
  position: relative;
  padding: 0 15px;

  span {
    cursor: pointer;
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
  }
`;

export const Information = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Menu = styled.ul`
  align-items: center;
  background-color: #4A4A48;
  display: flex;
  height: 100vh;
  flex-direction: column;
  list-style: none;
  padding-top: 45px;
  position: absolute;
  right: 0px;
  transform: translateX(100%);
  transition: transform .3s;
  top: 0px;
  z-index: 2;
  width: 320px;

  &.active {
    transform: translateX(0);
  }

  a {
    color: ${(props) => props.theme.colors.text};
    margin: 15px 0;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
    
    &.active {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (min-width: 1024px) {
    background-color: transparent;
    flex-direction: row;
    height: auto;
    justify-content: space-around;
    list-style: none;
    margin-right: 50px;
    padding-top: 0;
    position: relative;
    transform: translate(0);
    width: 350px;

    a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`;

export const Switch = styled.div`
  .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }

  label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  & .switch--shadow + label {
    padding: 2px;
    width: 40px;
    height: 10px;
    border-radius: 60px;
  }

  & .switch--shadow + label:before,
  & .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }
  & .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: all 0.4s;
  }
  & .switch--shadow + label:after {
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    transform: translate(-1px, -4px);
  }

  & .switch--shadow:checked + label:before {
    background-color: ${(props) => props.theme.colors.buttonActived};
  }
  & .switch--shadow:checked + label:after {
    transform: translate(25px, -4px);
  }
`;


export const Hamburguer = styled.div`
  right: -45px;
  position: absolute;
  z-index: 3;

  .line {
    background: #fff;
    border-radius: 5px;
    display: block;
    height: 3px;
    margin: 5px 0;
    width: 30px;

    &--one {
      &.open {
        animation: openLineOne .3s forwards;
      }

      &.closed {
        animation: closeLineOne .3s forwards;
      }
    }
    
    &--two {
      &.open {
        animation: openLineTwo .15s forwards;
      }

      &.closed {
        animation: closeLineTwo .3s forwards;
      }
    }
    &--three {
      &.open {
        animation: openLineThree .3s forwards;
      }

      &.closed {
        animation: closeLineThree .3s forwards;
      }
    }
  }

  @keyframes openLineOne {
    from {
      transform: translateY(0);
    }

    50% {
      transform: translateY(8px);
    }

    to {
      transform: translateY(8px) rotate(45deg);
    }
  }

  @keyframes openLineTwo {
    to {
      opacity: 0;
    }
  }

  @keyframes openLineThree {
    from {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-8px);
    }

    to {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  @keyframes closeLineOne {
    from {
      transform: translateY(8px) rotate(45deg);
      
    }

    50% {
      transform: translateY(8px);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes closeLineTwo {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes closeLineThree {
    from {
      transform: translateY(-8px) rotate(-45deg);
    }

    50% {
      transform: translateY(-8px);
    }

    to {
      transform: translateY(0);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
