import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutContainer = styled.div`
  /* background-color: green; */
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .image_container {
    position: relative;
    width: 40%;
    height: 100%;
    /* background-color: maroon; */
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      height: 110%;
      top: -100px;
    }
  }
  .text_container {
    width: 60%;
    height: 100%;

    padding: 10px 50px 10px 10px;
    /* background-color: maroon; */
    ul {
      list-style: none;
      li {
        font-size: 22px;
        padding-top: 10px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    height: 80%;
    .image_container {
      width: 40%;
      height: 100%;

      img {
        height: 100%;
        top: -50px;
      }
    }
    .text_container {
      padding: 10px 50px 10px 10px;
      ul {
        list-style: none;
        li {
          font-size: 18px;
          padding-top: 10px;
        }
      }
    }
  }
  /* media 768 */
  @media screen and (max-width: 768px) {
    .image_container {
      img {
        position: absolute;
        height: 100%;
        top: -40px;
      }
    }
    .text_container {
      width: 60%;
      height: 100%;
      padding: 10px 10px 10px 0px;
      ul {
        list-style: none;
        li {
          font-size: 16px;
          padding-top: 5px;
        }
      }
    }
  }
  /* media 425 */
  @media screen and (max-width: 550px) {
    height: 80%;
    width: 100%;
    .image_container {
      display: none;
    }
    .text_container {
      width: 100%;
      padding: 20px 10px;
      /* background-color: maroon; */
      ul {
        list-style: none;
        li {
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }
  }
`;
