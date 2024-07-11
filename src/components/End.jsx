import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function End(props) {
  const location = useLocation();
  const queryString = location.search;
  const [type, setType] = useState("");

  useEffect(() => {
    if (Number(queryString.split("=")[1]) > 20) {
      setType("게이");
    } else if (
      Number(queryString.split("=")[1]) > 10 &&
      Number(queryString.split("=")[1]) < 20
    ) {
      setType("약간 게이");
    } else if (
      Number(queryString.split("=")[1]) >= 0 &&
      Number(queryString.split("=")[1]) < 10
    ) {
      setType("정상인");
    }
  }, []);
  return (
    <Container>
      <Box>당신은 {type}입니다.</Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  border-radius: 10px;
  border: 1px solid #aaa;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
