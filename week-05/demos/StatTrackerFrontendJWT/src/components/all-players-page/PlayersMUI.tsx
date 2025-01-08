import { useContext, useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { Alert, Button, IconButton, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import NewPlayerFormMUI from "./NewPlayerFormMUI"
import { authContext, BASE_API_URL } from "../../App"
import { User } from "../../interfaces/User"
import CloseIcon from '@mui/icons-material/Close';

function PlayersMUI() {
    const [allPlayers, setAllPlayers] = useState<Player[]>([])
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [openSnackBar, setOpenSnackbar] = useState(false)
    const auth = useContext(authContext)

    useEffect(() => {
        axios.get<Player[]>(`${BASE_API_URL}/players`)
            .then((res) => {
                setAllPlayers(res.data)
            })
        },[shouldUpdate])

    let addToFavorites = (playerId: number) => {
        axios.post<User>(`${BASE_API_URL}/users/favorites/${playerId}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        ).then((res) => {
            console.log(res.data)
            // alert("Player successfully added!")
            handleOpenSnackbar()
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong!")
        })
    }

    let toggleUpdate = () => {
        setShouldUpdate(!shouldUpdate);
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
            <h1>All Players</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Passing Yards</TableCell>
                        <TableCell>Attempts</TableCell>
                        <TableCell>Completions</TableCell>
                        <TableCell>Touchdowns</TableCell>
                        <TableCell>Interceptions</TableCell>
                        {
                            auth?.role == "USER" ?
                                <TableCell>Options</TableCell>
                                :
                                <></>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>

                    {allPlayers.map((player) => {
                        return (
                            <TableRow key={player.playerId}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.passYards}</TableCell>
                                <TableCell>{player.attempts}</TableCell>
                                <TableCell>{player.completions}</TableCell>
                                <TableCell>{player.touchdowns}</TableCell>
                                <TableCell>{player.interceptions}</TableCell>
                                {
                                    auth?.role == "USER" ?
                                        <TableCell>
                                            <Button
                                                color="success"
                                                variant="contained"
                                                onClick={() => addToFavorites(player.playerId)}>
                                                Add to Favorites
                                            </Button>
                                        </TableCell>
                                        :
                                        <></>
                                }
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

            {
                auth?.role == "ADMIN" ?
                    <NewPlayerFormMUI toggleUpdate={toggleUpdate}/>
                    :
                    <></>
            }
        <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Player Successfully added"
        action={action}
        anchorOrigin={{vertical: "bottom",  horizontal: "right"}}
        />
        </div>
    )
}

export default PlayersMUI
