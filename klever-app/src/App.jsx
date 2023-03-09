import { Switch, Route } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import Home from "./pages/Home";
import AddToken from "./pages/AddToken";
import EditToken from "./pages/EditToken";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <TokenProvider>
      <Switch>
        <Route exact path="/edit-token" component={ EditToken } />
        <Route exact path="/add-token" component={ AddToken } />
        <Route exact path="/" component={ Home } />
        <Route exact path='*' component={ NotFound } />
      </Switch>
    </TokenProvider>
  );
}

export default App;
