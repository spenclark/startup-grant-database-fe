import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {mobileFilterStyles} from "../styles/mobileFilterStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SortIcon from "@material-ui/icons/Sort"
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";


const MobileFilters = ({toggleDrawer}) => {
  const classes = mobileFilterStyles();

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar} onClick={() => toggleDrawer(true)}>
        <Toolbar className={classes.filter} >
        {/* <IconButton color="inherit">
            <SortIcon/>
          </IconButton>
        <p>Amount</p>
        <p>Region</p>
        <p>Focus Areas</p> */}
        <p>Swipe Up To See Filters</p>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileFilters;
