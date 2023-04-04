import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutContainer = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0 20px 0;
  min-height: 400px;
  .image_container {
    position: relative;
    width: 40%;
    /* background-color: maroon; */
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      height: 400px;
      width: 300px;
      top: -250px;
    }
  }
  .text_container {
    width: 60%;
    height: 100%;
    padding-right: 10px;
    /* background-color: maroon; */
    ul {
      list-style: none;
      li {
        font-size: 16px;
        padding-top: 5px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    /* background-color: red; */

    .image_container {
      img {
        position: absolute;
        height: 400px;
        width: 300px;
        top: -220px;
      }
    }
  }
  /* media 768 */
  @media screen and (max-width: 768px) {
    /* background-color: red; */

    .image_container {
      img {
        position: absolute;
        height: 370px;
        width: 250px;
        top: -220px;
      }
    }
  }
  /* media 425 */
  @media screen and (max-width: 550px) {
    min-height: 250px;
    padding: 10px 0;
    .image_container {
      display: none;
    }
    .text_container {
      width: 100%;
      ul {
        list-style: none;
        li {
          font-size: 12px;
          padding-top: 5px;
        }
      }
    }
  }
`;
