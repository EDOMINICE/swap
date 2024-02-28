import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionSuccess: false,
  transactionFail: false,
  connect: false,
  ticket: "",
  finished: false,
  warning: false,
  openNetworks: false,
  choose: true,
  typed: false,
  currentToken1: {
    symbol: "ETH",
    logo: "/ethereum].png",
  },
  currentToken2: {
    symbol: "SRS",
    logo: "/soswap.png",
  },
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransactionSuccess(state, action) {
      state.transactionSuccess = action.payload;
    },
    updateTransactionFail(state, action) {
      state.transactionFail = action.payload;
    },
    updateConnect(state, action) {
      state.connect = action.payload;
    },
    updateWarning(state, action) {
      state.warning = action.payload;
    },
    updateOpenNetwork(state, action) {
      state.openNetworks = action.payload;
    },
    updateCurrentToken1(state, action) {
      state.currentToken1 = action.payload;
    },
    updateCurrentToken2(state, action) {
      state.currentToken2 = action.payload;
    },
    updateChoose(state, action) {
      state.choose = action.payload;
    },
    updateTyped(state, action) {
      state.typed = action.payload;
    },
  },
});

export default transactionSlice.reducer;
export const {
  updateTransactionSuccess,
  updateTransactionFail,
  updateConnect,
  updateOpenNetwork,
  updateWarning,
  updateCurrentToken1,
  updateCurrentToken2,
  updateChoose,
  updateTyped,
} = transactionSlice.actions;
