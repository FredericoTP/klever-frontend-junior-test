import { Switch, Route } from "react-router-dom";
import TokenProvider from "./context/TokenProvider";
import Home from "./pages/Home";

function App() {
  return (
    <TokenProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </TokenProvider>
  );
}

export default App;
