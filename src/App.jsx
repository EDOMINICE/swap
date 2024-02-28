import { configureStore } from "@reduxjs/toolkit";
import Presale from "./Presale/Presale";
import tokenReducer from "./Slices/TokenSlice";
import transactionReducer from "./Slices/TransactionSlice";
import GlobalStyle from "./style/GlobalStyle";
import { Provider } from "react-redux";
import Claim from "./Claim";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const store = configureStore({
  reducer: {
    tokenData: tokenReducer,
    transactionData: transactionReducer,
  },
});

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function Home() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Presale />} />
              <Route path="claim" element={<Claim />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
