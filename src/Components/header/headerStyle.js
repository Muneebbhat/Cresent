import styled from "styled-components";
import { Constant } from "../../assets/reusable/index";

export const Navigation = styled.nav`
  width: 100%;
  max-width: 1366px;
  height: 70px;
  position: fixed;
  z-index: 9999999;
  top: 20px;

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 540px) {
    height: 50px;
  }

  .container {
    height: 70px;
    width: 100%;
    background-color: ${Constant.Colors.secondary};
    opacity: 0.6;
    display: flex;
    justify-content: center;
    border-radius: 300px;
    backdrop-filter: blur(20px);
    @media (max-width: 768px) {
      height: 60px;
    }
    @media (max-width: 540px) {
      height: 50px;
    }
  }

  .main_container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    /* Logo Style  */
    .logo_container {
      height: 100%;
      display: flex;
      flex: 1;
      align-items: center;
      gap: 20px;
      @media (max-width: 540px) {
        gap: 10px;
      }
      a {
        display: flex;
        img {
          width: 60px;
          @media (max-width: 540px) {
            width: 40px;
          }
        }
      }

      a {
        color: ${Constant.Colors.helping};
        font-size: 22px;
        font-weight: 600;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Constant.Colors.primary};
        }

        @media (max-width: 540px) {
          font-size: 18px;
        }
      }
    }

    /* navigation style */
    .nav_container {
      height: 100%;
      display: flex;
      place-items: center;
      @media (max-width: 768px) {
        display: none;
      }
      ul {
        display: flex;
        /* gap: 30px; */
        list-style: none;

        li {
          height: 70px;
          a {
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 20px;
            color: ${Constant.Colors.helping};
            font-size: 22px;
            text-transform: capitalize;
            transition: ease-in-out 0.3s;
            &:hover {
              background-color: ${Constant.Colors.primary};
              letter-spacing: 2px;
            }
          }
        }
      }
    }

    /* menu Style */
    .side_menu_wrapper {
      display: none;
      @media (max-width: 768px) {
        display: initial;
      }
      svg {
        color: ${Constant.Colors.helping};
        font-size: 26px;
        cursor: pointer;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Constant.Colors.primary};
        }
      }
    }
  }
`;
