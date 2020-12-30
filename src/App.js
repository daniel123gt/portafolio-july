import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import HeaderSide from './components/headerside';
import HomePage from './components/home';
import Error from './components/error';
import ContactPage from './components/contacto';
import Pronto from './components/pronto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
<Router>
  <div className="app">
    <Header></Header>
    <HeaderSide></HeaderSide>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portafolio">
        <Portafolio></Portafolio>
      </Route>
      <Route exact path="/experiencia">
        <Experiencia></Experiencia>
      </Route>
      <Route exact path="/blog">
        <Blog></Blog>
      </Route>
      <Route exact path="/contacto">
        <Contacto></Contacto>
      </Route>
      <Route path="*">
        <NoMatch></NoMatch>
      </Route>
    </Switch>
    <Footer></Footer>
  </div>
</Router>  
);
}

function Home() {
  return(
      <HomePage></HomePage>
  )
}

function Portafolio() {
  return(
    <div>
      <p>PORTAFOLIO</p>
    </div>
  )
}

function Experiencia() {
  return(
    <p>EXPERIENCIA</p>
  )
}

function Contacto() {
  return(
    <ContactPage></ContactPage>
  )
}

function Blog() {
  return(
    <Pronto></Pronto>
  )
}

function NoMatch() {
  return(
   <Error></Error>
  )
}

export default App;
