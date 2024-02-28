import { ConnectWallet } from "@thirdweb-dev/react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";

const PresaleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;
const ProjectName = styled.div`
  font-size: 2.5rem;
  font-family: "Inter", sans-serif;
  color: #2e2e2e;
  @media (max-width: 450px) {
    display: none;
  }
`;
const ProjectBox = styled.div`
  display: flex;
  align-items: center;
`;
const Logos = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const HeadTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const HeadText = styled.p`
  color: #2c2c2c;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6rem;
  transition: all 0.3s;
  &:hover {
    background-color: #9cadce62;
    color: #595959;
  }
`;
const HeadTexts = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  color: #2e2e2e;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  gap: 0.5rem;
  border: 1px solid #222222;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  &:hover {
    border: 1px solid #3869cdd5;
  }
`;

const Connect = styled.span`
  font-size: 1.8rem;
  color: #3869cdd5;
  background: #2c2c2c;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1rem 0.01rem #ccca;
  }
`;

const Logo = styled.img`
  width: 5rem;
  border-radius: 50%;
`;

const iconStyle = {
  color: "#555",
  fontSize: "1.8rem",
  cursor: "pointer",
};
const Connects = {
  color: "#3869cdd5",
  fontSize: "1.8rem",
  background: "#2c2c2c",
  padding: "0.7rem 0.5rem",
  borderRadius: " 1rem",
  cursor: "pointer",
  width: "2vw",
};
const LastNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Hide = styled.div`
  display: inline-block;
  @media (max-width: 580px) {
    display: none;
  }
`;
function Nav() {
  return (
    <>
      <PresaleHeader>
        <ProjectBox>
          <Logo src="/soswap.png" alt="PROJECTLOGO" />
          <ProjectName>SonarSwap</ProjectName>
        </ProjectBox>
        <HeadTextBox>
          <HeadText>Swap</HeadText>
          <HeadText>Token</HeadText>
          <HeadText>NFTs</HeadText>
          <HeadText>Pools</HeadText>
        </HeadTextBox>
        <LastNav>
          <HeadTexts onClick={() => setOpenNetwork((el) => !el)}>
            <Logos src="/base.jpg" alt="Baselogo" />
            <MdKeyboardArrowDown style={iconStyle} />
          </HeadTexts>
          <Hide>
            <ConnectWallet style={Connects} />
          </Hide>
        </LastNav>
      </PresaleHeader>
    </>
  );
}

export default Nav;
