import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Header } from "./components/Header";
import { Home } from "./components/Accueil";
import { Film } from "./components/Film";
import { Serie } from "./components/Series";
import { ActorPage } from "./components/actorpage";
import { Error404 } from "./components/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Movies/film.html" component={Film} />
          <Route exact path="/Movies/serie.html" component={Serie} />
          <Route exact path="/Actors/actors.html" component={ActorPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
