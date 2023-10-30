const apiUrl = "/api/carlift";

export const getCarLifts = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getCarLiftById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
};
