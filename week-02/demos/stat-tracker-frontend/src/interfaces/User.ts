import { Player } from "./Player";

export interface User{
    userId: number,
    username: string,
    password: string,
    role: "USER" | "ADMIN",
    favorites: Player[]
}