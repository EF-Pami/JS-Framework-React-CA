import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/layout";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Styles/GeneralStyles";
import Product from "./pages/product";
import CheckoutMessage from "./components/CheckoutSuccess";
import NotFound from "./pages/not-found";


const theme = {
  colors: {
    white: '#fff',
    blue: '#5c00ff',
    bg: '#189AB4',
    green: 'rgb(96, 234, 96)',
    limegreen: '#81B622',
    tan: 'rgb(200, 180, 140)',
    black: 'rgb(0, 0, 0)',
    red: "#ff0000",
    darkgreen: "#008000"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='checkoutSuccess' element={<CheckoutMessage />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;