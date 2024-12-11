export const fetchClient = async <T>(url: string, cb: (t: T) => void, body?: string) => {
    try {
        const req = await fetch(url, { method: (body && 'POST'), body });
        const res = await req.json();
        console.log('res = ', res);
        cb(res);

    } catch (e) {
        throw e;
    }
}