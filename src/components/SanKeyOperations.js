import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TabModal from "./TabModal";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

function SanKeyOperations() {
  const [Modal, setModal] = useState(false);
  const PerformOperations = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button color="primary" variant="contained" onClick={PerformOperations}>
          Edit Sankey
        </Button>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={Modal}
      >
        <DialogTitle id="simple-dialog-title">Edit Sankey</DialogTitle>
        <TabModal />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SanKeyOperations;
