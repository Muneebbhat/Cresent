import styled from "styled-components";
import { Constant } from "../../assets/reusable/index";

export const Navigation = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: ${Constant.Colors.secondary};
  opacity: .6;
  display: flex;
  justify-content: center;
  border-radius: 300px;
  position: fixed;
  z-index: 9999;
  backdrop-filter: blur(20px);
  top: 20px;

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
      display: flex;
      flex: 1;
      place-items: center;
      gap: 20px;

      img {
        width: 60px;
      }
      a {
        color: ${Constant.Colors.helping};
        font-size: 22px;
        font-weight: 600;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Constant.Colors.primary};
        }
      }
    }

    /* navigation style */
    .nav_container {
      height: 100%;
      display: flex;
      place-items: center;
      ul {
        display: flex;
        /* gap: 30px; */
        list-style: none;

        li {
          height: 80px;
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
  }
`;
