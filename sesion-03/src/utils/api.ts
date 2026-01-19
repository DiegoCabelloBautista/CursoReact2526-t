import { API_CONFIG, type Plato } from "../types";

export const fetchPlatos = async (): Promise<Plato[]> => {

    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINT.PLATOS}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
    throw new Error("Error al obtener los platos");
};