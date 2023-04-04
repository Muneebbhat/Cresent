import styled from "styled-components";
import { Constant } from "../../assets/reusable/index";

export const Model = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: #000; */
  /* opacity: .4; */
  position: fixed;
  z-index: 962265656564;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .popup_background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #000;
    top:0;
    left:0;
    z-index: -1;
    opacity: .7;
    pointer-events: none;
  }

  .morel_wrapper {
    width: 95vw;
    max-width: 550px;
    height: auto;
    /* background-color: ${Constant.Colors.helping}; */
    background-color: #fff;
    border-radius: 6px;
    padding: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    /* title Style */

    .title_wrapper {
      display: flex;
      justify-content: space-between;
      div {
        /* background-color: red; */
      }
      .title {
        text-align: center;
        flex: 1;
        font-size: 22px;
        text-transform: uppercase;
        color: ${Constant.Colors.primary};
      }

      .close_wrapper {
        svg {
          color: ${Constant.Colors.primary};
          font-size: 32px;
          cursor: pointer;
          transition: ease-in-out .3s;

          &:hover {
            color: ${Constant.Colors.helping};
          }
        }
      }
    }

    /* form Style */

    .form_wrapper {
      padding: 20px;

      form {
        .franchise_input_wrapper {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 7px;

          label {
            font-size: 18px;
            color: ${Constant.Colors.primary};
          }

          input, select {
            padding: 10px;
            outline: none;
            border: 2px solid ${Constant.Colors.primary};
            border-radius: 4px;

            option{
              padding: 5px;
            }
          }

          button {
            padding: 7px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            color: #fff;
            letter-spacing: 2px;
            margin-top: 10px;
            text-transform: uppercase;
            font-size: 20px;
            background-color: ${Constant.Colors.primary};
            transition: ease-in-out .3s;
            &:hover {
              background-color: ${Constant.Colors.helping};
            }
          }
        }
      }
    }
  }
`;
