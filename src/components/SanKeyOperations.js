import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TabModal from "./TabModal";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormattedMessage } from "react-intl";

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
          {<FormattedMessage id="Edit.Sankey" defaultMessage="Edit Sankey" />}
        </Button>
      </div>
      <Dialog onClose={handleClose} open={Modal}>
        <DialogTitle id="simple-dialog-title"><FormattedMessage id="Dialog.Sankey" defaultMessage="Edit Sankey" /></DialogTitle>
        <TabModal />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {<FormattedMessage id="Close.Sankey" defaultMessage="Close" />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SanKeyOperations;
