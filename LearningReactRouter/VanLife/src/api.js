export async function GetVans() {
    const res = await fetch("./api/vans");
    if (!res.ok) {
        throw {
            message: "failed to fetch data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}