import styled from "styled-components";
import { Constant } from "../../assets/reusable";

export const FooterSection = styled.footer`
  height: auto;
  padding: 20px 33px;
  background-color: ${Constant.Colors.secondary};
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media only screen and (max-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: repeat(1,1fr);
  }

  & > div {
    /* background-color: green; */
    padding-left: 10px;
  }

  .address_wrapper {
    h4 {
      color: ${Constant.Colors.helping};
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    .address_details {
      display: flex;
      /* background-color: maroon; */

      svg {
        font-size: 20px;
        background-color: ${Constant.Colors.primary};
        width: 50px;
        height: 30px;
        border-radius: 100px;
        padding: 4px;
        color: ${Constant.Colors.helping};
        margin-right: 9px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  /* contact style */
  .contact_wrapper {
    display: flex;
    flex-direction: column;
    gap: 9px;
    h4 {
      color: ${Constant.Colors.helping};
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .contact_details {
      display: flex;
      align-items: center;
      gap: 9px;

      svg {
        font-size: 20px;
        background-color: ${Constant.Colors.primary};
        width: 30px;
        height: 30px;
        border-radius: 100px;
        padding: 5px;
        color: ${Constant.Colors.helping};
      }
    }
  }

  /* Links style */
  .links_wrapper {
    h4 {
      color: ${Constant.Colors.helping};
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    ul {
      list-style: none;

      li a {
        color: #000;
        transition: ease-in-out 0.3s.;

        &:hover {
          color: ${Constant.Colors.helping};
        }
      }
    }
  }

  /* follow us style */

  .follow_us_wrapper {
    h4 {
      color: ${Constant.Colors.helping};
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .social_icons {
      svg {
        font-size: 20px;
        background-color: ${Constant.Colors.primary};
        width: 40px;
        height: 40px;
        border-radius: 100px;
        padding: 5px;
        color: ${Constant.Colors.helping};
        margin-right: 10px;
        cursor: pointer;
        transition: ease-in-out 0.3s;

        &:hover {
          color: ${Constant.Colors.secondary};
        }
      }
    }

    .copyright {
      margin-top: 10px;
    }
  }
`;
