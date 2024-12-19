import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function NewPlayerFormMUI() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add New Player</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Player
          </Typography>
          {/* We need to add in some inputs for the values */}
          <TextField label="Player Name" variant="outlined"  margin="normal"/>
          <TextField label="Profile Picture URL" variant="outlined" margin="normal"/>
          <TextField label="Passing Yards" variant="outlined" margin="normal" type="number"/>
          <TextField label="Touchdowns" variant="outlined" margin="normal" type="number"/>
        </Box>
      </Modal>
    </div>
  );
}

export default NewPlayerFormMUI
