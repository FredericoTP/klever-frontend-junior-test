import { Switch, Route } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import Home from "./pages/Home";
import AddToken from "./pages/AddToken";

function App() {
  return (
    <TokenProvider>
      <Switch>
        <Route exact path="/add-token" component={ AddToken } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </TokenProvider>
  );
}

export default App;
