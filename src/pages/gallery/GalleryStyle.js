import styled from "styled-components";
import { Constant } from "../../assets/reusable";

export const GalleryWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1336px;
  .products {
    padding: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    /* background-color: green; */
  }
  @media screen and (max-width: 1100px) {
    .products {
      padding: 20px;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    .products {
      padding: 30px 10px 10px 10px;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .products {
      padding: 30px 10px 10px 10px;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
`;
