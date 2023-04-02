import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutWrapper = styled.section`
  height: 100vh;
  /* background-color: yellow; */
  padding-top: 100px;
  width: 100vw;
  max-width: 1336px;
  @media screen and (max-width: 550px) {
    height: 80vh;
    /* background-color: yellow; */
    padding-top: 50px;
    width: 100vw;
    max-width: 1336px;
  }
`;
