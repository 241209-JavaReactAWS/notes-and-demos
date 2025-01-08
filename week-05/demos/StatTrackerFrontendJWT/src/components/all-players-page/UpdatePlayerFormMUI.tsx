import { Button, Modal, Box, Typography, TextField, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { BASE_API_URL } from "../../App";
import { Player } from "../../interfaces/Player";
import CloseIcon from '@mui/icons-material/Close';

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

interface UpdatePlayerFormProps {
    toggleUpdate: () => void;
    player: Player
}

function UpdatePlayerFormMUI(props: UpdatePlayerFormProps) {
    const [open, setOpen] = useState(false);
    const [openSnackBar, setOpenSnackbar] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState(props.player.name)
    const [url, setUrl] = useState(props.player.picUrl)
    const [passingYards, setPassingYards] = useState(props.player.passYards)
    const [attempts, setAttempts] = useState(props.player.attempts)
    const [completions, setCompletions] = useState(props.player.completions)
    const [touchdowns, setTouchdowns] = useState(props.player.touchdowns)
    const [interceptions, setInterceptions] = useState(props.player.interceptions)

    let updatePlayer = () => {
        axios.put<Player>(`${BASE_API_URL}/players/${props.player.playerId}`,
            {
                playerId: props.player.playerId,
                name,
                picUrl: url,
                passYards: passingYards,
                attempts,
                completions,
                touchdowns,
                interceptions
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then((res) => {
                console.log(res.data)
                // alert("Successfully updated player")
                handleOpenSnackbar()
                props.toggleUpdate()
                handleClose()
            })
    }

    let handleOpenSnackbar = () => {
        setOpenSnackbar(true)
    }
    
    let handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }
    
    let action = (
      <>
       
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleCloseSnackbar}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    );

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Update Player</Button>
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
                    <TextField
                        label="Player Name"
                        variant="outlined"
                        margin="normal"
                        value={name}
                        onChange={(e: SyntheticEvent) => { setName((e.target as HTMLInputElement).value) }} />
                    <TextField
                        label="Profile Picture URL"
                        variant="outlined"
                        margin="normal"
                        value={url}
                        onChange={(e: SyntheticEvent) => { setUrl((e.target as HTMLInputElement).value) }} />
                    <TextField
                        label="Passing Yards"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={passingYards}
                        onChange={(e: SyntheticEvent) => { setPassingYards((e.target as HTMLInputElement).value as unknown as number) }} />
                    <TextField
                        label="Attempts"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={attempts}
                        onChange={(e: SyntheticEvent) => { setAttempts((e.target as HTMLInputElement).value as unknown as number) }} />
                    <TextField
                        label="Completions"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={completions}
                        onChange={(e: SyntheticEvent) => { setCompletions((e.target as HTMLInputElement).value as unknown as number) }} />
                    <TextField
                        label="Touchdowns"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={touchdowns}
                        onChange={(e: SyntheticEvent) => { setTouchdowns((e.target as HTMLInputElement).value as unknown as number) }} />
                    <TextField
                        label="Interceptions"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={interceptions}
                        onChange={(e: SyntheticEvent) => { setInterceptions((e.target as HTMLInputElement).value as unknown as number) }} />
                    <br></br>
                    <Button color="primary" variant="contained" onClick={updatePlayer}>Update Player</Button>
                </Box>
            </Modal>

            <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Added Player to Favorites"
        action={action}
        anchorOrigin={{vertical: "bottom",  horizontal: "right"}}
        />
        
        </div>
    );
}

export default UpdatePlayerFormMUI
