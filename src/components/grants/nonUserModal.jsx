import React from "react";
import { List } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Brightness1Icon from "@material-ui/icons/Brightness1";

const useStyles = makeStyles((theme) => ({
  btn: {
    // background: "#3CBBB1",
    color: "#FFFFF",
  },
  stxt: {
    color: "#000000",
  },
}));
export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { loginWithRedirect } = useAuth0();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.title}>
          Stay up to date with the latest funding opportunities and offerings.
          {/* Create a free account to be notified of new grants that fit your
          criteria */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="primary">
            Founder Grants is a living project. Please consider registering to:
          </DialogContentText>
          <DialogContentText>
            <Brightness1Icon fontSize="6px" color="inherit" /> new grants.
          </DialogContentText>
          <DialogContentText>
            <Brightness1Icon fontSize="6px" color="inherit" /> Get updated of
            new releases and features.
          </DialogContentText>
          <DialogContentText>
            <Brightness1Icon fontSize="6px" color="inherit" /> Stay in the know
            for new grants that may match your search criteria.
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            If you find any outdated grants, please consider reaching out or
            suggesting an edit and a moderator will review it at the earliest
            convenience.
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            "A real education is a liberation."
          </DialogContentText>
          <DialogContentText>- Nietzsche</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
          <Button
            autoFocus
            onClick={() => loginWithRedirect()}
            color="primary"
            variant="outlined"
            className={classes.abtn}
          >
            Create an Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
