import React, { useState } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TabModal from "./TabModal";
import Button from "@material-ui/core/Button";

function SanKeyOperations() {
  const [Modal, setModal] = useState(false);
  const PerformOperations = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const actions = [
    <FlatButton label="close" primary={true} onClick={handleClose} />,
  ];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button color="primary" variant="contained" onClick={PerformOperations}>
          Edit Sankey
        </Button>
      </div>
      <Dialog
        actions={actions}
        modal={false}
        open={Modal}
        onRequestClose={handleClose}
      >
        <TabModal />
      </Dialog>
    </>
  );
}

export default SanKeyOperations;
