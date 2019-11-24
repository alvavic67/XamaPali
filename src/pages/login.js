import React from "react";

import Button from "../components/RoundedButton";
import InputText from "../components/InputText";
import Card from "../components/LoginCard";

const Login = () => {
  return (
    <div>
      <InputText placeholder="Usuario" />
      <br />
      <InputText placeholder="Contraseña" />
      <br />
      <Button value="Entrar" />
    </div>
  );
};

export default Login;
