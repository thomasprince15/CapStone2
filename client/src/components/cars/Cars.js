import { useState } from "react";
import CarList from "./CarList";
import CarDetails from "./CarDetails";

export default function Cars() {
  const [detailsCarId, setDetailsCarId] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <CarList setDetailsCarId={setDetailsCarId} />
        </div>
        <div className="col-sm-4">
          <CarDetails detailsCarId={detailsCarId} />
        </div>
      </div>
    </div>
  );
}
