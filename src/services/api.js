import axios from 'axios';

//URL Base
const BASE_URL = 'ttps://api.hyrule-compendium.com/v3/compendium/';

//Para puxar os items
export const fetchAllItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}all`);
    return response.data.data;
  } catch (error) {
    console.error("Erro ao procurar dados da API:", error);
    return [];
  }
};

//Para puxar as categorias
export const fetchCategory = async (categoryName) => {
  try {
    const response = await axios.get(`${BASE_URL}category/${categoryName}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao procurar a categoria ${categoryName}:`, error);
    return [];
  }
};