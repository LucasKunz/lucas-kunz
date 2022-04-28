import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: space-around;
  height: 100px;
  padding: 0 80px;

  span {
    font-size: 24px;
  }
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  
`

export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-right: 50px;
  width: 350px;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: .2s;

    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`

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
    content: '';
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
    background-color: ${props => props.theme.colors.buttonActived};
  }
  & .switch--shadow:checked + label:after {
    transform: translate(25px, -4px);
  }
`