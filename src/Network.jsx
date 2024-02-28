import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  updateCurrentToken1,
  updateCurrentToken2,
  updateOpenNetwork,
  updateTyped,
} from "./Slices/TransactionSlice";

const NetworkStyle = styled.span`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 5rem 1rem 1.5rem;
  font-size: 1.4rem;
  color: #2e2e2e;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  &:hover {
    background-color: ${(prop) =>
      prop.first === "true" ? "none" : "#bebebe5a;"};
  }
`;
const NetworkStyleCon = styled.span`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  /* width: 50vw; */
`;
const Logos = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 5.5rem;
    height: 5.5rem;
  }
`;
const Logoss = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
const Symbol = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.05rem;
  @media (max-width: 500px) {
    font-size: 2.6rem;
  }
`;
const TokenSymbol = styled.div`
  color: #4444447b;
  font-size: 1.3rem;
  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.div`
  font-size: 1.6rem;
  color: #2e2e2ea6;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;
const Texts = styled.div`
  font-size: 1.6rem;
  color: #2e2e2ea6;
  margin-bottom: 2rem;
  padding: 0 2rem;
  font-weight: bold;
`;

const modalWidth = {
  // width: "40vw",
};
function Network({ swap, tokenData }) {
  const dispatch = useDispatch();
  const { choose } = useSelector((state) => state.transactionData);
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
  return (
    <NetworkStyleCon style={swap && modalWidth}>
      {swap && <Text>Popular tokens</Text>}
      {!swap && (
        <NetworkStyle first="true" style={{ color: "#202020" }}>
          <Logoss src="/baseLogo.png" alt="Baselogo" /> Base
        </NetworkStyle>
      )}
      {swap && (
        <>
          {tokenData.map((val) => (
            <NetworkStyle
              key={val.id}
              onClick={() => handleChoseToken(val.tokensym, val.tokenlogo)}
            >
              <Logos src={val.tokenlogo} alt="logo" />{" "}
              <Symbol>
                {val.tokenName} <TokenSymbol>{val.tokensym}</TokenSymbol>
              </Symbol>
            </NetworkStyle>
          ))}
        </>
      )}
      {swap && <>{tokenData.length === 0 && <Texts>No result found</Texts>}</>}
    </NetworkStyleCon>
  );
}
export default Network;
