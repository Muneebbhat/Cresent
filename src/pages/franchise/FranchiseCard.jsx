import React from "react";
import styled from "styled-components";
import { Constant } from "../../assets/reusable";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const FranchiseCard = ({modelHandler}) => {
  return (
    <Card onClick={modelHandler}>
      <div className="icon_wrapper">
        <SiHomeassistantcommunitystore />
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum non
          sint, ullam recusandae expedita.
        </p>
      </div>
    </Card>
  );
};

export default FranchiseCard;

const Card = styled.div`
  /* width: 250px; */
  margin-right: 6px;
  margin-left: 6px;
  height: 300px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: ease-in-out 0.3s;
  &:hover {
    transform: scale(1.04);
  }
  .icon_wrapper {
    text-align: center;
    padding: 30px 0 20px 0;
    svg {
      font-size: 62px;
      color: ${Constant.Colors.primary};
    }
  }

  .content {
    padding: 15px;
  }
`;
