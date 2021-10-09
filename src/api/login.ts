import { doPost } from "./common"

export async function login({ username, password }: { username: string; password: string; }) {
    return doPost("api/login", { username, password })
}