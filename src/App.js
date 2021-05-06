import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Header } from "./components/Header";
import { Home } from "./components/Accueil";
import { Film } from "./components/Film";
import { Serie } from "./components/Series";
import { Error404 } from "./components/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Movies/film.html" component={Film} />
          <Route exact path="/Movies/serie.html" component={Serie} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
