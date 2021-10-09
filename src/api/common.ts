export function doPost(route: string, body: any){
    return fetch(route, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
}