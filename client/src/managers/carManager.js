const apiUrl = "/api/car";

export const getCars = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getCarById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
};
