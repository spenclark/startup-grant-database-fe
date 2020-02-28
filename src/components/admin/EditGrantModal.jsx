import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { useForm } from "../../hooks/useForm";
import editFormValues from "./values/EditGrantFormValues";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  applyButton: {
    color: "#fff",
    fontFamily: "Nunito Sans",
    fontWeight: 600,
    marginTop: "20px"
  },
  header: {
    background: "#3CBBB1",
    padding: theme.spacing(2)
  },
  headerText: {
    color: "#ffffff",
    marginTop: "10px",
    textAlign: "center"
  },
  btn: {
    margin: "20px",
    padding: "0 50px"
  },
  formField: {
    width: "100%"
  }
}));

const EditGrantModal = ({ grant, format, columns }) => {
  const actions = useContext(ActionsContext);
  const { token } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const [values, handleChange, handleSubmit, resetForm] = useForm(
    {
      competition_name: "",
      area_focus: "",
      sponsoring_entity: "",
      website: "",
      most_recent_application_due_date: "",
      amount: "",
      amount_notes: "",
      geographic_region: "",
      target_entrepreneur_demographic: "",
      notes: "",
      early_stage_funding: false,
      is_reviewed: false,
      has_requests: false,
      details_last_updated: moment().format("YYYY-MM-DD")
    },
    doSubmit
  );

  console.log("**********************", grant);

  function deleteGrant(id) {
    actions.grants.deleteAdminGrant(token, id);
  }
  function doSubmit(id, data) {
    actions.grants.updateAdminGrant(token, id, data);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.applyButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Open
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          className={classes.header}
        >
          <Grid item>
            <DialogTitle className={classes.headerText}>WOW</DialogTitle>
          </Grid>
          <Grid item>
            <DialogContentText className={classes.headerText}>
              WOW
            </DialogContentText>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <DialogContent></DialogContent>
          <DialogActions>
            <Grid container justify="center">
              {editFormValues.map(data => {
                return (
                  <Grid item>
                    <TextFormField
                      label={data.label}
                      type={data.type}
                      name={data.name}
                      select={data.select}
                      data={data.data}
                      inputLabel={data.inputLabel}
                      multiline={data.multiline}
                      variant={data.variant}
                      rows={data.rows}
                    />
                  </Grid>
                );
              })}
              <Grid item>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleClose}
                  className={classes.btn}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  type="submit"
                  className={classes.btn}
                  onClick={handleClose}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EditGrantModal;
