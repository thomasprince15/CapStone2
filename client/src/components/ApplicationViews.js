import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cars from "./cars/Cars";
import CreateCar from "./cars/CreateCar";
import WorkOrderList from "./Workorders/WorkOrderList";
import CreateWorkOrder from "./Workorders/CreateWorkOrder";
import CarLifts from "./CarLifts/CarLifts";
import EditWorkOrder from "./Workorders/EditWorkOrder";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <CarLifts />
            </AuthorizedRoute>
          }
        />
         <Route
          path="cars"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Cars />
            </AuthorizedRoute>
          }
        />
        <Route
            path="createcar"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <CreateCar />
              </AuthorizedRoute>
            }
          />
          <Route path="workorders"
            index
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <WorkOrderList />
              </AuthorizedRoute>
            }
          />
          <Route
            path="workorders/create"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <CreateWorkOrder />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/workorders/:id"
            element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <EditWorkOrder />
              </AuthorizedRoute>
            }
          />
            <Route
          path="carlifts"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <CarLifts />
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
