// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const BucketList = () => {
  const my_lists = useSelector((store) => store.bucket.list);
  console.log(my_lists);

  const navigate = useNavigate();

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            onClick={() => navigate("/detail/" + index)}
          >
            {list}
            {/* <Link to="/detail">{list}</Link> */}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
