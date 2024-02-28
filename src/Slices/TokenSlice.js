import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connection: null,
  wallet: null,
  paySolFunc: null,
  claimToken: false,
  isClaimModal: false,
  isPresale: false,
  isPresaleModal: false,
  solPrice: "",
};

const TokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateConnection(state, action) {
      state.connection = action.payload;
    },
    updateWallet(state, action) {
      state.connection = action.payload.adapter;
    },
    payFee(state, action) {
      state.paySolFunc = action.payload;
    },
    updataClaimFunction(state, action) {
      state.claimToken = action.payload;
    },
    updateIsClaimModal(state, action) {
      state.isClaimModal = action.payload;
    },
    updateIsPresale(state, action) {
      state.isPresale = action.payload;
    },
    updateIsPresaleModal(state, action) {
      state.isPresaleModal = action.payload;
    },
    updateSolPrice(state, action) {
      state.solPrice = action.payload;
    },
  },
});

export default TokenSlice.reducer;
export const {
  updateConnection,
  updateWallet,
  payFee,
  updataClaimFunction,
  updateIsClaimModal,
  updateIsPresale,
  updateIsPresaleModal,
  updateSolPrice,
} = TokenSlice.actions;
