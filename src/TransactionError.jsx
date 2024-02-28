import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";

const TransactionErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  background: linear-gradient(#eeeeee, #b4b4b4);
  border-left: 0.5rem solid #4848c2;
`;
const TransactionErrorText = styled.div`
  font-size: 1.8rem;
  color: #222;
  text-align: center;
`;
const iconStyle = {
  fontSize: "2rem",
  color: " #4848c2",
};
function TransactionError({
  success,
  fail,
  connect,
  activate,
  connected,
  warning,
  isLoggedOut,
}) {
  const { ticket } = useSelector((state) => state.transactionData);
  return (
    <>
      {success && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Transaction successful</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {fail && (
        <TransactionErrorBox>
          <MdCancel style={iconStyle} />
          <TransactionErrorText>Transaction failed</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {warning && (
        <TransactionErrorBox>
          <MdCancel style={iconStyle} />
          <TransactionErrorText>
            Insufficient {ticket} ticket
          </TransactionErrorText>
        </TransactionErrorBox>
      )}
      {connect && (
        <TransactionErrorBox>
          <FaWallet style={iconStyle} />
          <TransactionErrorText>Connect wallet first</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {activate && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Activated successfully</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {isLoggedOut && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>Loggedout successfully</TransactionErrorText>
        </TransactionErrorBox>
      )}
      {connected && (
        <TransactionErrorBox>
          <FaCheckCircle style={iconStyle} />
          <TransactionErrorText>
            Twitter registered successfully
          </TransactionErrorText>
        </TransactionErrorBox>
      )}
    </>
  );
}

export default TransactionError;
