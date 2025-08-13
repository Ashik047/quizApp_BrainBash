export const apiCallFunction = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log("Error");
        console.log(err);
    }
}
