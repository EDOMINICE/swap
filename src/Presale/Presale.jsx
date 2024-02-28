import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import TransactionError from "../TransactionError";
import SwappingModal from "./SwappingModal";
import { useEffect, useState } from "react";
import Network from "../Network";
import { updateOpenNetwork, updateTyped } from "../Slices/TransactionSlice";
import SelectToken from "../SelectToken";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const Container = styled.div`
  width: auto;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(30deg, #809fe2e1, #e8e8e8, #809fe2e1);
`;
const PresaleBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 3.5rem;
  gap: 2.5rem;
  @media (max-width: 500px) {
    margin: 12vh auto 0 auto;
  }
  @media (max-width: 400px) {
    margin: 5vh auto 0 auto;
  }
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const Base = styled.p`
  display: flex;
  font-size: 2rem;
  color: #545454;
  align-self: center;
  align-items: center;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  backdrop-filter: brightness(50%);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #e8e8e8d9;
  border: 1px solid #425988;
  top: 11%;
  left: 82%;
  padding: 0.5rem 0;
  border-radius: 1rem;
`;
const Boxs = styled.div`
  border-radius: 2rem;
  background-color: #e8e8e8;
  position: absolute;
  width: 35vw;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 2rem 0;
  @media (max-width: 850px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 45vw;
  }
  @media (max-width: 650px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 55vw;
  }
  @media (max-width: 450px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
const ClaimTokens = {
  alignSelf: "center",
  color: "#e8e8e8ee",
  fontSize: "2.4rem",
  padding: "0.5rem 1rem",
  background: "#2c2c2ced",
  borderRadius: "1rem",
  textDecoration: "none",
};
const ClaimTokens1 = {
  alignSelf: "center",
  color: "#e8e8e8ef",
  fontSize: "2.4rem",
  padding: "0.5rem 1rem",
  background: "#262626f6",
  borderRadius: "1rem",
  textDecoration: "none",
};
const Tokens = styled.h2`
  align-self: center;
  display: flex;
  align-items: center;
  color: #2e2e2e;
  font-size: 3rem;
  gap: 1rem;
  @media (max-width: 650px) {
    font-size: 4rem;
  }
  /* @media (max-width: 500px) {
    font-size: 4rem;
  } */
`;
const Header = styled.p`
  display: none;
  @media (max-width: 400px) {
    align-self: center;
    display: flex;
    align-items: center;
    color: #2e2e2e;
    gap: 1rem;
    font-size: 6rem;
  }
`;
const iconStyle = {
  color: "#e8e8e8",
  width: "2rem",
  height: "2rem",
  marginBottom: "-3px",
};

function Presale() {
  const [openNetwork, setOpenNetwork] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const { openNetworks } = useSelector((state) => state.transactionData);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.split(" ").includes("overlay")) {
        setOpenNetwork(false);
      }
      if (e.target.className.split(" ").includes("overlays")) {
        dispatch(updateOpenNetwork(false));
        dispatch(updateTyped(false));
      }
    });
  }, [dispatch]);
  return (
    <Container>
      <Nav />
      <PresaleBox>
        <Header>
          Trade Anytime, <br />
          Anyday
        </Header>
        <Tokens>
          Airdrop is live{" "}
          <Link
            to="/claim"
            style={hover ? ClaimTokens1 : ClaimTokens}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Register
            <HiArrowNarrowRight style={iconStyle} />
          </Link>
        </Tokens>
        <SwappingModal isOpen={true} />
        <Base>
          Powered by &nbsp; <Logo src="/uniswap.png" alt="uniswaplogo" />
          &nbsp; Uniswap
        </Base>
      </PresaleBox>
      {openNetwork && (
        <Overlay className="overlay">
          <Box>
            <Network />
          </Box>
        </Overlay>
      )}
      {openNetworks && (
        <Overlay className="overlays">
          <Boxs>
            <SelectToken />
          </Boxs>
        </Overlay>
      )}
    </Container>
  );
}

export default Presale;
