import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ConnectWallet,
  useAddress,
  useClaimToken,
  useContract,
  useTokenDrop,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import confirmAddress from "./helpers/ConfirmAddress";
import addressStatus from "./helpers/addressStatus";
import StepsCon from "./Step/StepCon";
import { MdCancel } from "react-icons/md";

const ClaimCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85vw;
  margin: 0 auto;
  @media (max-width: 585px) {
    width: 100vw;
  }
  @media (max-width: 500px) {
    margin: 12vh auto 0 auto;
    width: 100vw;
  }
`;
const MainBox = styled.div`
  background: linear-gradient(30deg, #809fe2e1, #e8e8e8, #809fe2e1);
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Home = styled.div`
  font-size: 1.8rem;
  color: #2e2e2e;
  display: flex;
  align-items: center;
  margin: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6rem;
  transition: all 0.3s;
  &:hover {
    background-color: #9cadce62;
    color: #595959;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeadText = styled.h1`
  font-size: 5.5rem;
  width: 100%;
  color: #2e2e2e;
  align-self: center;
  text-align: center;
  @media (max-width: 485px) {
    font-size: 5rem;
  }
  @media (max-width: 400px) {
    font-size: 4.8rem;
  }
`;
const AirdropBox = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 5%;
`;
const Connect = {
  color: "#3869cdd5",
  fontSize: "1.8rem",
  background: "#2c2c2c",
  padding: "0.5rem 1rem",
  borderRadius: " 1rem",
  cursor: "pointer",
  margin: "2rem",
};
const Claimtoken = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const NetworkRange = styled.span`
  font-size: 2rem;
  color: #2e2e2e9e;
`;
const Text = styled.button`
  font-size: 1.8rem;
  color: #4848c2;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  background-color: #9cadce62;
  border: 1px solid #4848c2;
`;
const Texts = styled.button`
  font-size: 1.7rem;
  color: #eee;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #4848c2;
  cursor: pointer;
  &:hover {
    background-color: #5555c7;
  }
`;
const Form = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 2rem;
  gap: 1rem;
  width: 50vw;
  @media (max-width: 600px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 70vw;
  }
`;

const Submit = styled.button`
  font-size: 1.8rem;
  color: #eee;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #4848c2;
  cursor: pointer;
  &:hover {
    background-color: #5555c7;
  }
`;
const Address = styled.span`
  font-size: 1.8rem;
  color: #4848c2;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #4848c2;
  background-color: #9cadce62;
  width: 10vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Error = styled.div`
  font-size: 1.8rem;
  color: #2e2e2e;
  background-color: #9cadce62;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #4848c2;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const StepCon = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem;
`;
const icon = {
  color: "#4848C2",
  width: "2rem",
  height: "2rem",
};
function Claim() {
  const tokenAddress = "0x3554217203F24E824444D7a599B76EeE825577c9";
  const { contract } = useContract(tokenAddress, "token-drop");
  const address = useAddress();
  const { mutate: claims } = useClaimToken(contract);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  async function handleSubmit() {
    if (address) {
      const response = await confirmAddress(address);
      response?.status === "saved successfully" && setSuccess(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }
  async function checkUserStatus() {
    if (address) {
      const result = await addressStatus(address);
      result?.status === "saved" && setSuccess(true);
    }
  }
  useEffect(() => {
    checkUserStatus();
    !address && setSuccess(false);
  }, [address]);
  console.log(success);
  return (
    <>
      <MainBox>
        {error && (
          <Error>
            <MdCancel style={icon} /> Connect wallet first
          </Error>
        )}
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home>&larr; Back to Home</Home>
          </Link>
          <ConnectWallet style={Connect} />
        </Box>
        <ClaimCon>
          <AirdropBox>
            <HeadText>Sonarswap Official Airdrop</HeadText>
            <StepCon>
              <StepsCon success={success} wallet={address} />
            </StepCon>
            <Form>
              {address && <Address>{address}</Address>}
              {!success ? (
                <Submit onClick={() => handleSubmit()}>Register</Submit>
              ) : (
                <Submit>Registered</Submit>
              )}
            </Form>
            <Claimtoken>
              {/* {success && <Text>10,000 $SRS</Text>} */}
              {success && (
                <Texts onClick={() => claims({ amount: 10000, to: address })}>
                  Claim Airdrop
                </Texts>
              )}
            </Claimtoken>
            {success && (
              <NetworkRange>Network fee: [0.0002ETH - 0.0005ETH]</NetworkRange>
            )}
          </AirdropBox>
        </ClaimCon>
      </MainBox>
    </>
  );
}
export default Claim;
