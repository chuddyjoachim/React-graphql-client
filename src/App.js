import logo from "./logo.svg";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";
import Apollo from "./pages/Apollo";

function App() {
  return (
    <Router>
      <Header />
      <section className="body_">
        <aside className="aside_">
          <Aside />
        </aside>
        <main className="main_">
          <Route path="/" exact={true} component={Fetch}></Route>
          <Route path="/fetch" component={Fetch}></Route>
          <Route path="/axios" component={Axios}></Route>
          <Route path="/apollo" component={Apollo}></Route>
        </main>
      </section>
    </Router>
  );
}

export default App;
