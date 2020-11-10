import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useActions } from "../store/useActions";
import { ActionsProvider } from "../context/ActionsContext";
import theme from "./theme";
import routes from "./routing/Routes";
import RenderRoutes from "./routing/RenderRoutes";
import hsp from "heroku-self-ping";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: "center",
    background: "#f7f7f7",
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const actions = useActions();

  hsp("https://grantly-staging.herokuapp.com/api/");
  return (
    <MuiThemeProvider theme={theme}>
      <ActionsProvider value={actions}>
        <CssBaseline />
        <div className={classes.app}>
          <Navbar />
          <RenderRoutes routes={routes} />
          <Footer />
        </div>
      </ActionsProvider>
    </MuiThemeProvider>
  );
}

export default App;
