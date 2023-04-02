import styled from "styled-components";
import { Constant } from "../../assets/reusable/index";

export const SideMenuSection = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #ccc; */
  /* pointer-events: none; */
  z-index: 9622656565;
  position: fixed;
  top: 0;
  left: ${(props) => props.left};
  /* transform: translateX(${(props) => props.translate}); */
  transition: ease-in-out 0.5s;
  overflow: hidden;

  .menu_wrapper {
    height: 100vh;
    width: 90%;
    max-width: 350px;
    background-color: ${Constant.Colors.primary};
    opacity: 0.9;
    backdrop-filter: blur(10px);
    padding: 20px 15px;
    position: relative;

    /* menu header */
    .side_menu_header {
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${Constant.Colors.helping};
      padding-bottom: 8px;
      a:first-child {
        color: ${Constant.Colors.helping};
        font-size: 22px;
      }
      svg {
        color: ${Constant.Colors.helping};
        font-size: 26px;
        cursor: pointer;
        &:hover {
          color: ${Constant.Colors.primary};
        }
      }
    }

    /* navigation */
    .navigaton_wrapper {
      padding-top: 20px;

      ul {
        list-style: none;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 22px;

        a {
          color: ${Constant.Colors.helping};
          transition: ease-in-out 0.3s;
          &:hover {
            letter-spacing: 2px;
          }
        }
      }
    }

    /* logo  */
    .logo_wrapper {
      height: 50px;
      width: 100%;
      /* background-color: red; */
      position: absolute;
      bottom: 80px;
      z-index: 9666666666666666;
      display: flex;
      justify-content: center;

      img {
        width: 120px;
        margin-right: 50px;
        height: 120px;
      }
    }
  }
`;
