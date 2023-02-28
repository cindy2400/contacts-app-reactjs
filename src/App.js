import { Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/new-contact" exact>
        <NewContact />
      </Route>
    </>
  );
}

export default App;
