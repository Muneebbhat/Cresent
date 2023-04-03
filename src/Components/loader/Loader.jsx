import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Main>
      <span className="loader"></span>
    </Main>
  );
};

export default Loader;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 30px;
  height: 30px; */
  /* background-color: #24262d; */

  .loader {
    --loader-size: 30px;
    --loader-border-size: 4px;
    --loader-border-color: white;
    width: var(--loader-size);
    height: var(--loader-size);
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    position: relative;
    animation: rotateX 1s infinite linear;
  }

  .loader::before {
    content: "";
    border: var(--loader-border-size) solid var(--loader-border-color);
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    animation: rotateX 0.5s infinite linear reverse;
  }

  @keyframes rotateX {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
