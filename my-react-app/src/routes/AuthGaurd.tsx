import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropsWithChildren } from "../@types/DynamicData";

const AuthGaurd = ({ children }: PropsWithChildren) => {
  // localStorage.setItem("token", "logged in user token here");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/register");
    }
  }, [token, navigate]);

  return children;
};

export default AuthGaurd;
