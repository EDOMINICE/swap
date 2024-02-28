import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Network from "./Network";
import {
  updateCurrentToken1,
  updateCurrentToken2,
  updateOpenNetwork,
  updateTyped,
} from "./Slices/TransactionSlice";
import { useEffect, useState } from "react";

const Logos = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const HeadTexts = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  color: #2e2e2e;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  gap: 0.5rem;
  border: 1px solid #222222;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  &:hover {
    border: 1px solid #3869cdd5;
    background-color: ${(prop) =>
      prop.first === "true" ? "none" : "#87878712"};
  }
  @media (max-width: 500px) {
    font-size: 2.6rem;
  }
`;

const Searchs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #444;
  width: 70%;
  padding: 0.5rem 2rem;
  border-radius: 6rem;
  transition: all 0.3s;
  &:hover {
    border: 1px solid #3869cdd5;
  }
`;
const SecondBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  margin: 1rem 0;
`;
const Input = styled.input`
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 1.8rem;
  width: 85%;
  background: none;
  color: #121212;
  &::placeholder {
    color: #999;
    font-size: 1.8rem;
  }
`;

const iconStyle = {
  color: "#999",
  fontSize: "1.8rem",
  cursor: "pointer",
};
const iconMStyle = {
  color: "#2e2e2e",
  fontSize: "2.5rem",
  cursor: "pointer",
};

const Tokens = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 0 2rem;
  margin-bottom: 2rem;
  @media (max-width: 450px) {
  }
`;
const Cancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  box-sizing: border-box;
  color: #2e2e2e;
`;
const Line = styled.div`
  background: #3333332c;
  width: 100%;
  height: 0.1px;
  margin: 2rem 0;
`;
const NetworkBox = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 50vh;
`;
const tokenData = [
  {
    tokenName: "AAVE",
    tokensym: "AAVE",
    tokenlogo: "/Aave.jpg",
    id: 1,
  },
  {
    tokenName: "WBTC",
    tokensym: "WBTC",
    tokenlogo: "/btc.png",
    id: 2,
  },
  {
    tokenName: "ChainLink",
    tokensym: "LINK",
    tokenlogo: "/chain.png",
    id: 3,
  },
  {
    tokenName: "DAI",
    tokensym: "DAI",
    tokenlogo: "/dai.jpg",
    id: 4,
  },
  {
    tokenName: "1INCH",
    tokensym: "IINCH",
    tokenlogo: "/inch.jpg",
    id: 5,
  },
  {
    tokenName: "Ethereuum",
    tokensym: "ETH",
    tokenlogo: "/ethereum].png",
    id: 6,
  },
  {
    tokenName: "Uniswap",
    tokensym: "UNI",
    tokenlogo: "/uniswap.png",
    id: 7,
  },
  {
    tokenName: "SonarSwap",
    tokensym: "SRS",
    tokenlogo: "/soswap.png",
    id: 8,
  },
  {
    tokenName: "USDT",
    tokensym: "USDT",
    tokenlogo: "/usdt.png",
    id: 9,
  },
  {
    tokenName: "USDC",
    tokensym: "USDC",
    tokenlogo: "/usdc.png",
    id: 10,
  },
  {
    tokenName: "Yearn.Finance",
    tokensym: "YFI",
    tokenlogo: "/yearn.finance.png",
    id: 11,
  },
];
function SelectToken() {
  const [searchedToken, setSearchedToken] = useState();
  const [filteredToken, setFilteredToken] = useState();
  const dispatch = useDispatch();
  const { choose, typed } = useSelector((state) => state.transactionData);
  function handleChoseToken(symbol, logo) {
    dispatch(updateTyped(false));
    choose &&
      dispatch(
        updateCurrentToken1({
          symbol,
          logo,
        })
      );
    !choose &&
      dispatch(
        updateCurrentToken2({
          symbol,
          logo,
        })
      );
    dispatch(updateOpenNetwork(false));
  }
  useEffect(() => {
    let newTokens = tokenData.filter((val) => {
      if (
        val.tokenName.toLowerCase().slice(0, [searchedToken?.length]) ===
        searchedToken?.toLowerCase()
      ) {
        return val;
      }
    });
    newTokens.length >= 1 ? setFilteredToken(newTokens) : setFilteredToken("");
  }, [searchedToken, dispatch]);
  function handleSearch(e) {
    setSearchedToken(e.target.value);
    dispatch(updateTyped(true));
  }
  function handleCancel() {
    dispatch(updateTyped(false));
    dispatch(updateOpenNetwork(false));
  }
  return (
    <>
      <Cancel>
        Select token{" "}
        <RxCross2 onClick={() => handleCancel()} style={iconMStyle} />
      </Cancel>
      <SecondBar>
        <Searchs>
          <Input
            value={searchedToken}
            onChange={(e) => handleSearch(e)}
            style={{ color: "#2e2e2e" }}
            type="text"
            placeholder="Search tokens"
          />
          <IoSearch style={iconStyle} />
        </Searchs>
        <HeadTexts first="true">
          <Logos src="/base.jpg" alt="Baselogo" />
          <MdKeyboardArrowDown style={iconStyle} />
        </HeadTexts>
      </SecondBar>
      <Tokens>
        <HeadTexts
          onClick={() => handleChoseToken("SRS", "/soswap.png")}
          colors="true"
        >
          <Logos src="/soswap.png" alt="logo" />
          SRS
        </HeadTexts>
        <HeadTexts
          onClick={() => handleChoseToken("ETH", "/ethereum].png")}
          colors="true"
        >
          <Logos src="/ethereum].png" alt="logo" />
          ETH
        </HeadTexts>
        <HeadTexts
          onClick={() => handleChoseToken("WETH", "/ethereum].png")}
          colors="true"
        >
          <Logos src="/ethereum].png" alt="logo" />
          WETH
        </HeadTexts>
        <HeadTexts
          onClick={() => handleChoseToken("UNI", "/uniswap.png")}
          colors="true"
        >
          <Logos src="/uniswap.png" alt="logo" />
          UNI
        </HeadTexts>
      </Tokens>
      <Line></Line>
      <NetworkBox>
        <Network
          swap={true}
          tokenData={
            filteredToken
              ? filteredToken
              : !filteredToken && typed
              ? []
              : tokenData
          }
        />
      </NetworkBox>
    </>
  );
}
export default SelectToken;
