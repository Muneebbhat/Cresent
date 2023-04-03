import styled from "styled-components";
import { Constant } from "../../assets/reusable";

export const Section = styled.section`
  width: 100%;
  max-width: 1366px;
  margin: auto;

  /* contact info */
  .contact_info_wrapper {
    background-color: #e3ddd7;
    position: relative;
    height: 550px;

    @media only screen and (max-width: 728px) {
      height: auto;
      /* display: flex;
      flex-direction: column;
      align-items: center; */
    }

    /* map */
    .map_wrapper {
      width: 95%;
      height: 90%;
      background-color: black;
      transform: translate(2.5%, 5%);

      @media only screen and (max-width: 768px) {
        display: none;
        height: 450px;
      }

      @media only screen and (max-width: 540px) {
        height: 300px;
      }
    }

    /* input  */

    .input_wrapper {
      width: 100%;
      max-width: 550px;
      height: 90%;
      background-color: ${Constant.Colors.helping};
      opacity: 0.9;
      position: absolute;
      top: 4.5%;
      right: 2.5%;
      padding: 10px;

      @media only screen and (max-width: 768px) {
        max-width: 95%;
        position: static;
        margin-left: 17px;
        margin-top: 50px;
      }

      .inputs {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;

        label {
          font-size: 18px;
          color: #fff;
          letter-spacing: 2px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: none;
          outline: none;
          background-color: #000;
          color: #fff;
          font-size: 18px;
          border-radius: 4px;
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin: 0;
        }
      }
      /* submit */

      button {
        padding: 15px 50px;
        cursor: pointer;
        background-color: #000;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: ease-in-out 0.3s;
        margin-top: 8px;

        &:hover {
          opacity: 0.6;
        }

        @media only screen and (max-width: 540px) {
          width: 100%;
        }
      }
    }
  }
`;
