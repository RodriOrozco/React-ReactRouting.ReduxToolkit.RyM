import React from "react";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/user";

const Login = () => {
  const login = async () => {
    const dispatch = useDispatch();

    try {
      const response = await getMorty();
      dispatch(createUser(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>login</h1>
    </div>
  );
};

export default Login;
