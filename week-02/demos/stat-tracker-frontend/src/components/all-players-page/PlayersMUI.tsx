import { useEffect, useState } from "react"
import { Player } from "../../interfaces/Player"
import axios from "axios"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import NewPlayerFormMUI from "./NewPlayerFormMUI"
import { BASE_API_URL } from "../../App"

function PlayersMUI() {
    const [allPlayers, setAllPlayers] = useState<Player[]>([])
    useEffect(() => {
      
        axios.get<Player[]>(`${BASE_API_URL}/players`)
        .then((res) => {
            setAllPlayers(res.data)
        })
    }, [])



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
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      

        <NewPlayerFormMUI />
    </div>
  )
}

export default PlayersMUI
