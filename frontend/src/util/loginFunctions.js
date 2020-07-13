import React, { useState } from "react";
import { login } from "../util/firebaseFunctions";

export const demoLogin = async () => {
  try {
    await login("user1@gmail.com", "testtest");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (e, email, password) => async (dispatch, getState) => {
  e.preventDefault();
  try {
    await login(email, password);
  } catch (error) {
    alert(error.message);
  }
};
