import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <Box>
        <Title>게이 테스트</Title>
        <Desc>우리가 게이인지 알아봅시다!</Desc>
        <Start to="/test">테스트 시작</Start>
      </Box>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const Desc = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: #aaa;
`;

const Start = styled(Link)`
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  background: #ec53aa82;
  margin-top: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
  color: #000;
  text-decoration: none;
`;
