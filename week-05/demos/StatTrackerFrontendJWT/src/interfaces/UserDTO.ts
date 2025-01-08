export interface UserDTO {
    userId: number;
    username: string;
    role: "USER" | "ADMIN";
    token: string
}