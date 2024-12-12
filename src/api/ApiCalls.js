const URL = process.env.REACT_APP_Backend_Url;

export const fetchProducts = async () => {
    try {
        const res = await fetch(`${URL}/product/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await res.json();
    } catch (e) {
        console.log("error", e);
    }

}

export const fetchFilterOptions = async () => {
    try {
        const res = await fetch(`${URL}/product/filter-options`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await res.json();
    } catch (e) {
        console.log("error", e);
    }

}

export const searchByKeyword = async (query) => {
    try {
        const res = await fetch(`${URL}/product/search?query=${query}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await res.json();
    } catch (e) {
        console.log("error", e);
    }

}