import { AxiosError, AxiosResponse } from "axios";
import { AxiosRepository } from "./axiosHelper";
import { Helper } from "./helper";
import { Toast } from "./toast";
import store from "../../store/index";
import {  IResponseToken, IUserForm } from "./types";


export enum UserRole {
  admin = 30,
  manager = 20,
  user = 10,
  default = 0,
}




export class User {
  public static GetRole = (userState:{}): number => {
  //    if (Helper.objectIsNullOrEmpty(userState.value.value)) return 0;

    const userRole = Helper.objectKeyValue(userState, "roles");
    const result = UserRole[userRole as keyof typeof UserRole] as number;
    return  result === undefined ? UserRole.default : result  
  };

  public static GetUserFromToken = (
    accessToken: string,
    IsShow: boolean = false
  ) => {
    if (!Helper.stringIsNullOrEmpty(accessToken)) {
      AxiosRepository.Get("/account", accessToken)
        .then((response) => {
          const state = response as AxiosResponse;
          if (!Helper.stringIsNullOrEmpty(state.data)) {
            console.log()
            store.commit("setUser", state.data);
            if (IsShow) Toast.success("Успешно");
          }
        })
        .catch((error: AxiosError) => {
          console.log(error);
          if (IsShow) Toast.error("Ошибка");
        });
    }
  };

  public static LoginResult = (userForm: IUserForm) => {
    AxiosRepository.Post("/token", userForm, "")
      .then((response) => {
        const axiosResponse = response as AxiosResponse;
        const responseToken: IResponseToken = axiosResponse.data;
        try {
          if (
            !Helper.stringIsNullOrEmpty(responseToken.accessToken) &&
            !Helper.stringIsNullOrEmpty(responseToken.refreshToken)
          ) {
            store.commit("updateToken", responseToken);

            User.GetUserFromToken(responseToken.accessToken, true);
          } else throw new Error("Something went wrong :(");
        } catch {
          Toast.warning("Вы yказали неверный данные");
        }
      })
      .catch(() => Toast.error("Ошибка"));
  };

  public static RegisterResult = (userForm: IUserForm) => {
    AxiosRepository.Post("/account", userForm, "")
      .then((response) => {
        const state = response as AxiosResponse;
        try {
          const accessToken: string = state.data.accessToken;
          const refreshToken: string = state.data.refreshToken;
          const responseToken = state.data as IResponseToken;
          if (
            !Helper.stringIsNullOrEmpty(accessToken) &&
            !Helper.stringIsNullOrEmpty(refreshToken)
          ) {
            store.commit("updateToken", { accessToken, refreshToken });
            User.GetUserFromToken(accessToken, true);
          } else throw new Error("Something bad create");
        } catch {
          Toast.warning("Вы yказали неверный данные");
        }
      })
      .catch(() => Toast.error("Ошибка"));
  };
}
