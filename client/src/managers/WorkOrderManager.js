const _apiUrl = "/api/workorder";

export const getWorkOrders = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const getWorkOrderById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const createWorkOrder = (workOrder) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workOrder),
  }).then((res) => res.json);
};

export const editWorkOrder = (updatedWorkOrder) => {
  return fetch(`${_apiUrl}/${updatedWorkOrder.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWorkOrder),
  });
};

export const deleteWorkOrder = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "DELETE",
  });
};