import styled from "styled-components";
import Steps from "./Steps";

const StepConBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 60vw;
  justify-content: space-between;
  @media (max-width: 575px) {
    width: 65vw;
  }
  @media (max-width: 490px) {
    width: 75vw;
  }
`;
const Line = styled.div`
  height: 2px;
  width: 15%;
  background: #66e;
  margin-top: -4rem;
  /* align-self: flex-start; */
`;
function StepsCon({ wallet, success }) {
  return (
    <StepConBox>
      <Steps success={success} wallet={wallet} first="true" />
      <Line></Line>
      <Steps success={success} wallet={wallet} second="true" />
      <Line></Line>
      <Steps success={success} wallet={wallet} third="true" />
    </StepConBox>
  );
}
export default StepsCon;
