import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Private() {

const [impress, setImpress] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const taketoken = localStorage.getItem("token");
    if (taketoken) {
      const user = jwt_decode(taketoken);

      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setImpress(user)
      }
    }
  }, []);

  return <h1>Bem Vindo: {impress.name}</h1>;
}
