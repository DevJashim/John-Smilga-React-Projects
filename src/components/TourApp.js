import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// ATTENTION!!!!!!!!!!data from an 'Api'
const URL = "https://course-api.com/react-tours-project";

const TourApp = () => {
  // ************* state values *******************
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // ************* functionality *******************
  // Fetch data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const getData = await response.json();
      setLoading(false);
      setTours(getData);
      //   console.log(getData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    fetchTours();
  }, []);
  // Remove Tour
  const removeTour = (id) => {
    const filteredTour = tours.filter((tour) => tour.id !== id);
    setTours(filteredTour);
    // setTours(tours.filter((tour) => tour.id !== id));
  };
  // Condition-1
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // Condition-2
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left in the list</h2>
          <button className="btn" onClick={fetchTours}> refresh  </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default TourApp;
