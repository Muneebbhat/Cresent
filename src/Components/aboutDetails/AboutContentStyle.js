import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutContainer = styled.div`
  /* background-color: green; */
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  .image_container {
    width: 40%;
    height: 100%;
    /* background-color: maroon; */
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .text_container {
    width: 60%;
    height: 100%;
    /* background-color: maroon; */
  }
`;
