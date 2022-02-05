import {  Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import  Router  from "./Router";

import Header from "./components/Header";
import Home from "./pages/Home";




function App() {
  return (
  <BrowserRouter>
    <Header />
    <Container className="mt-5">
      <Router/>
    </Container>
  </BrowserRouter>

 );
}

export default App;
