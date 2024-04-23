export async function GetVans(id) {
    const url = id ? `/api/vans/${id}` : `/api/vans`
    const res = await fetch(url)
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


export async function GetHostVans(id) {
    const url = id ? `/api/vans/${id}` : `/api/vans`
    const res = await fetch(url)
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