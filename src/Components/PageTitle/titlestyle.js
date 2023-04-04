import styled from "styled-components";
import { Constant } from "../../assets/reusable/index";

export const PageTitle = styled.section`
  height: 100px;
  padding: 20px 0;

  .title_container {
    /* width: 100vw; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 20px 0; */
    h1 {
      /* background-color: red; */
      font-size: 40px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      text-transform: capitalize;
      color: ${Constant.Colors.primary};
    }
  }

  .line_div {
    /* width: 100vw; */
    display: flex;
    justify-content: center;
    gap: 2px;
    /* background-color: green; */
    span {
      width: 3px;
      height: 3px;
      background-color: green;
      border-radius: 50%;
      background-color: ${Constant.Colors.primary};
    }
    .dot1 {
      width: ${(props) => props.width}px;
      border-radius: 50rem;
    }
  }

  /* media 1024 */
  @media screen and (max-width: 1024px) {
    height: 80px;
    /* padding: 0 0 20px 0; */
    .title_container {
      h1 {
        /* font-size: 25px; */
      }
    }

    .line_div {
      gap: 2px;
      span {
        width: 3px;
        height: 3px;
      }
      .dot1 {
        width: ${(props) => props.width - 60}px;
        border-radius: 50rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 60px;
    /* padding: 20px 0; */

    .title_container {
      h1 {
        /* background-color: red; */
        font-size: 28px;
      }
    }

    .line_div {
      gap: 2px;
      span {
        width: 2px;
        height: 2px;
      }
      .dot1 {
        width: ${(props) => props.width - 80}px;
        border-radius: 50rem;
      }
    }
  }

  /* meaia 550 */
  @media screen and (max-width: 550px) {
    height: 0px;
    padding: 40px 0;

    .title_container {
      /* width: 100vw; */
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 25px;
        font-weight: 400;
      }
    }

    .line_div {
      gap: 2px;
      span {
        width: 2px;
        height: 2px;
      }
      .dot1 {
        width: ${(props) => props.width - 80}px;
        border-radius: 50rem;
      }
    }
  }
`;
