import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutWrapper = styled.section`
  height: 100vh;
  /* padding: 50px 0 0 0; */
  max-height: 800px;
  /* background-color: yellow; */
  padding-top: 100px;
  width: 100vw;
  max-width: 1336px;

  @media screen and (max-width: 1024px) {
    height: 70vh;
    /* overflow-y: scroll; */
    /* background-color: yellow; */
    padding: 50px 0 0 0;
    width: 100vw;
    max-width: 1336px;
  }
  @media screen and (max-width: 768px) {
    height: 70vh;
    /* background-color: yellow; */
    padding-top: 50px;
    width: 100vw;
    max-width: 1336px;
  }

  @media screen and (max-width: 550px) {
    height:auto;
    /* background-color: yellow; */
    padding-top: 50px;
    width: 100vw;
    max-width: 1336px;
  }
`;
