const API_URL = process?.env?.REACT_APP_API_ENDPOINT;

const getAllPeople = async (no) => {
  const response = await fetch(`${API_URL}people/?page=${no}`);
  const userData = await response.json();
  return userData;
};

const searchPeople = async (q) => {
  const response = await fetch(`${API_URL}people/?search=${q}`);
  const searchData = await response.json();
  return searchData;
};

const getCharacter = async (q) => {
  const response = await fetch(`${API_URL}people/${q}`);
  const chrData = await response.json();
  return chrData;
};

const DashboardService = {
  getAllPeople,
  searchPeople,
  getCharacter,
};

export default DashboardService;
