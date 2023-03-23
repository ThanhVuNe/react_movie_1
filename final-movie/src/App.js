import "swiper/swiper.min.css";
// import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Routes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={() => {
          return localStorage.getItem("token") ? (
            <Redirect to="/" />
          ) : (
            <Login/>
          );
        }}
      />
     
      <Route
        //login route

        render={(props) => {
          return localStorage.getItem("token") ?
            <>
              <Header {...props} />

              <Switch>
                <Route exact path="/" component={Home} />

              </Switch>

              <Footer />
            </>
            :
               <Redirect to="/login" />
        }}
      />

    </BrowserRouter>
  );
}

export default App;
