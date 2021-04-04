import './App.css';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Questionaire from "./components/questionaire";
import Home from "./components/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/questions" render={() => <Questionaire />} />
        <Route exact path="/home" render={() => <Home />} />
      </Switch>
      
    </ThemeProvider>
  );
}

export default App;
