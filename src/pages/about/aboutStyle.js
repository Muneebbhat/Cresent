import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const AboutWrapper = styled.section`
  width: 100%;
  max-width: 1336px;
  padding: 50px 0;

  /* @media screen and (max-width: 1024px) {
    padding: 50px 0;
  } */
  @media screen and (max-width: 768px) {
    /* background-color: yellow; */
    padding-top: 50px;
  }

  @media screen and (max-width: 550px) {
    /* background-color: yellow; */
    padding-top: 20px;
    padding: 10px;
  }
`;
