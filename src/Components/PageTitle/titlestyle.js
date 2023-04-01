import styled from 'styled-components';
import { Constant } from '../../assets/reusable/index';

export const PageTitle = styled.section`
  height: 100px;
  padding: 20px 0;

  .title_container {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 20px 0; */
    h1 {
      /* background-color: red; */
      font-size: 40px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      text-transform: capitalize;
      color: ${Constant.Colors.primary};
    }
  }

  .line_div {
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 2px;
    /* background-color: green; */
    span {
      width: 3px;
      height: 3px;
      background-color: green;
      border-radius: 50%;
      background-color: ${Constant.Colors.primary};
    }
    .dot1 {
      width: ${props => props.width};
      border-radius: 50rem;
    }
  }
`;
