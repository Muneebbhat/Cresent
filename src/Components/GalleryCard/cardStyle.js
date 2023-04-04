import styled from 'styled-components';
import { Constant } from '../../assets/reusable';

export const CardList = styled.div`
  /* width: 260px; */
  height: 310px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 5px;
  cursor: pointer;
  transition: 0.4s;
  .card_image {
    /* width: 250px; */
    height: 85%;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
  }
  .card_title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 4px 4px;
    font-weight: bold;
    font-size: 25px;
    height: 15%;
    text-transform: capitalize;
    color:${Constant.Colors.helping}
  }
  &:hover {
    transform: translateY(-10px);
  }
`;
