const apiUrl = "/api/car";

export const getCars = () => {
  return fetch(apiUrl).then((res) => res.json());
};

export const getCarById = (id) => {
  return fetch(`${apiUrl}/${id}`).then((res) => res.json());
};

export const createcar = (car) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  }).then((res) => res.json);
};

export const deleteThisCar = (id) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};