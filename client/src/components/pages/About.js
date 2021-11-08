import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

const About = () => {
  const { loadUser } = useContext(AuthContext);

  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
      <p className="my-1 text-center">
        Written by: <strong>B.Proczkowski</strong>
      </p>
    </div>
  );
};

export default About;
