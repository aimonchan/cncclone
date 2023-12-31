import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tributton from './components/Tributton';
import Rightbutton from './components/Rightbutton';
import Card from './components/Card';
import Tabbar from './components/Tabbar';
import Footer from './components/Footer';
import Showmapbut from './components/Showmapbut';
import Showmore from './components/Showmore';
import Carouselbut from './components/Carouselbut';
import Logo from './components/Logo';
import Socialbut from './components/Socialbut';
import Centerbutsm from './components/Centerbutsm';
import Filterbut from './components/Filterbut';
import Demo from './components/Demo';

const demo = ReactDOM.createRoot(document.getElementById('demo'));
demo.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);

const filterbut = ReactDOM.createRoot(document.getElementById('filterbut'));
filterbut.render(
  <React.StrictMode>
    <Filterbut />
  </React.StrictMode>
);

const centerbutsm = ReactDOM.createRoot(document.getElementById('centerbutsm'));
centerbutsm.render(
  <React.StrictMode>
    <Centerbutsm />
  </React.StrictMode>
);

const socialbut = ReactDOM.createRoot(document.getElementById('socialbut'));
socialbut.render(
  <React.StrictMode>
    <Socialbut />
  </React.StrictMode>
);

const logo = ReactDOM.createRoot(document.getElementById('logo'));
logo.render(
  <React.StrictMode>
    <Logo />
  </React.StrictMode>
);


const tributton = ReactDOM.createRoot(document.getElementById('tributton'));
tributton.render(
  <React.StrictMode>
    <Tributton />
  </React.StrictMode>
);

const rightbutton = ReactDOM.createRoot(document.getElementById('rightbutton'));
rightbutton.render(
  <React.StrictMode>
    <Rightbutton />
  </React.StrictMode>
);

const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

const tabbar = ReactDOM.createRoot(document.getElementById('tabbar'));
tabbar.render(
  <React.StrictMode>
    <Tabbar />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const showmapbut = ReactDOM.createRoot(document.getElementById('showmapbut'));
showmapbut.render(
  <React.StrictMode>
    <Showmapbut />
  </React.StrictMode>
);

const showmore = ReactDOM.createRoot(document.getElementById('showmore'));
showmore.render(
  <React.StrictMode>
    <Showmore />
  </React.StrictMode>
);

const carouselbut = ReactDOM.createRoot(document.getElementById('carouselbut'));
carouselbut.render(
  <React.StrictMode>
    <Carouselbut />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
