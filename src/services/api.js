import axios from 'axios';

const BASE_URL = 'https://api.hyrule-compendium.com/v3/compendium/';

export const fetchAllItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao procurar dados da API:", error);
    return null;
  }
};
