import { doPost } from "./common"

export async function punchIn() {
    return doPost("api/punch", {type: "in" })
}
export async function punchOut(workUpdates: string) {
    return doPost("api/punch", { type: "out", workUpdates})
}