import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const params = useParams();
  const bucket_list = useSelector((store) => store.bucket.list);
  const bucket_index = params.index;

  const onClickDeleteHandler = () => {
    console.log("ss");
  };

  // console.log(params);
  // console.log(bucket_list);
  // console.log(bucket_list[bucket_index]);

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <h1>{bucket_list[bucket_index]}</h1>
        <button onClick={onClickDeleteHandler}>삭제하기</button>
      </Container>
      <Input>
        <input type="text" />
        <button>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default Detail;
