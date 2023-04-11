import React from "react";
import { clearPersistUserInfo } from "../../utilities/localStorage.utility";
import { resetUser, userKey } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PublicRoutes } from "../../models/routes";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    clearPersistUserInfo(userKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return (
    <div>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
};

export default LogOut;
