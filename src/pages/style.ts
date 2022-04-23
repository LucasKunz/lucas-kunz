import styled from "styled-components";


export const Test = styled.div`
  background: url('/einstein.png') no-repeat center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
  font-size: 13px;
  
`

export const Typing = styled.div`


h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid white; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  color: white;
}

  .one{
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  }
  
  .two {
    animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    animation-delay: 3.5s;
    color: orange;
}

.three{
  animation: 
    typing 7.5s steps(40, end),
    blink-caret .75s step-end infinite;
    animation-delay: 7s;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 700px }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}
`