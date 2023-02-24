import "./NewConsultation.styles.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NewConsultation = () => {
  const [Specialty, setSpecialty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/specialty", {
      method: "GET",
      headers: {
        "Content-type": "Aplication/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => setSpecialty(data))

      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="new-consultation-container">
      {Specialty.map((specialty) => {
        return (
          <div key={specialty.id}>
            <Link to="/doctors">{specialty.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewConsultation;
