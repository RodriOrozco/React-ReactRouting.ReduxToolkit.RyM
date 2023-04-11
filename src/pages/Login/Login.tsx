import React, { useEffect } from "react";
import { getMorty } from "../../services";
import { useDispatch } from "react-redux";
import { createUser, resetUser, userKey } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { clearPersistUserInfo } from "../../utilities/localStorage.utility";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearPersistUserInfo(userKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const loginUser = async () => {
    try {
      const response = await getMorty();
      dispatch(createUser(response));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Logeate bro</h1>
      <button onClick={loginUser}>Log In</button>
    </div>
  );
};

export default Login;
