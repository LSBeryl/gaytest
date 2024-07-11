import { useState } from "react";
import styled from "styled-components";

import quizs from "../data/questions.json";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [curProblemIdx, setCurProblemIdx] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        {/* 문제 수 표시 */}
        <BoxHeader>
          <div>문제 {curProblemIdx + 1}.</div>
          <div>
            {curProblemIdx + 1} / {quizs.length}
          </div>
        </BoxHeader>

        {/* 문제 표시 */}
        <BoxMain>
          <div>{quizs[curProblemIdx]}</div>
        </BoxMain>

        {/* 선택지 표시 */}
        <BoxFooter>
          <div>
            <div
              onClick={() => {
                setScore((prev) => prev + 1);
                setCurProblemIdx((prev) => {
                  if (prev == 24) {
                    navigate(`/end?score=${score + 1}`);
                  } else {
                    return prev + 1;
                  }
                });
              }}
            >
              O
            </div>
            <div
              onClick={() => {
                setCurProblemIdx((prev) => {
                  if (prev == 24) {
                    navigate(`/end?score=${score}`);
                  } else {
                    return prev + 1;
                  }
                });
              }}
            >
              X
            </div>
          </div>
        </BoxFooter>
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
  padding: 2rem 1.5rem;
  border-radius: 10px;
  border: 1px solid #aaa;
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxMain = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

const BoxFooter = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    gap: 1rem;
    width: 100%;
    & > div {
      padding: 1rem 2rem;
      border-radius: 10px;
      border: 1px solid #bbb;
      flex-grow: 1;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }
  }
`;
