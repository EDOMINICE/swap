import { IoCheckmarkCircleSharp } from "react-icons/io5";
import styled from "styled-components";

const StepCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const StepText = styled.div`
  font-size: 1.3rem;
  color: #2e2e2ebe;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Number = styled.span`
  font-size: 1.6rem;
  color: #e2e2e2;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: #4848c2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icon = {
  color: "#4848C2",
  width: "3rem",
  height: "3rem",
};

function Steps({ first, second, third, wallet, success }) {
  return (
    <StepCon>
      {first && wallet && <IoCheckmarkCircleSharp style={icon} />}
      {first && !wallet && <Number>1</Number>}
      {second && wallet && success && <IoCheckmarkCircleSharp style={icon} />}
      {second && wallet && !success && <Number>2</Number>}
      {second && !wallet && !success && <Number>2</Number>}
      {third && <Number>3</Number>}
      {first && <StepText>Connect</StepText>}
      {second && <StepText>Register</StepText>}
      {third && <StepText>Claim 10,000 SRS</StepText>}
    </StepCon>
  );
}
export default Steps;
