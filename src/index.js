import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Footer from "./Components/Footer/Footer";
import Chatbot from "./Components/ChatBot/Chatbot";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./Components/Home/Home";
import Symptoms from "./Components/Symptoms/Symptoms";
import DataFetch from "./Components/Search State Data/DataFetch";
import Precautions from "./Components/Precautions/Precautions";
import Mail_DataFetch from "./Components/Mail_Data/Mail_DataFetch";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import NewsApi from "./Components/Live News/NewsApi";
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/Home" component={home} />
        <Route exact path="/Precautions" component={Precautions} />
        <Route exact path="/Symptoms" component={Symptoms} />
        <Route exact path="/News_api" component={NewsApi} />
        <Route exact path="/DataFetch" component={DataFetch} />
        <Route exact path="/Mail_DataFetch" component={Mail_DataFetch} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Registration" component={Registration} />
      </Switch>

      <Chatbot />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
