import { authStore } from "./../../store/authStore";
import { AxiosError, AxiosResponse } from "axios";
import { AxiosRepository } from "./axiosHelper";
import { helper } from "./helper";
import { toast } from "./toast";
import store from "../../store/index";
import { IResponseToken, IUserForm } from "./types";
import router from "@/router";
import { ILoginForm, IRegisterForm } from "./types";

export enum UserRole {
  admin = 30,
  manager = 20,
  user = 10,
  default = 0,
}

class User {
  public "email": string;
  public "roles": string;

  public  GetRoleEnum = () => UserRole;

  public  GetRole = (userState: {}): number => {
    const userRole = helper.objectKeyValue(userState, "roles");
    const result = UserRole[userRole as keyof typeof UserRole] as number;
    return result === undefined ? UserRole.default : result;
  };

  public  GetRoleRaw = (userObj: any) => {
    const rawRole = helper.objectKeyValue(userObj, "roles");
    const result = UserRole[rawRole as keyof typeof UserRole] as number;
    return result === undefined ? UserRole.default : result;
  };

  public  RedirectToMainOrReturnUrl = function(returnUrl: string) {
    if (helper.stringIsNullOrEmpty(returnUrl)) {
      router.push("{name:'main'}");
    } else {
      console.log(returnUrl);
    }
  };

  public GetUserFromToken = (
    accessToken: string,
    IsShow: boolean = false
  ) => {
    if (!helper.stringIsNullOrEmpty(accessToken)) {
      AxiosRepository.Get("/account", accessToken)
        .then((response) => {
          const state = response as AxiosResponse;
          if (!helper.stringIsNullOrEmpty(state.data)) {
            authStore.setUser(state.data);
            //store.commit("setUser", state.data);
            if (IsShow) toast.success("Успешно");
          }
        }).finally(() => console.log('finally GetUserFromToken'))
        .catch((error: AxiosError) => {
          console.log(error);
          if (IsShow) toast.error("Ошибка");
        });
    }
  };

  public LoginForm = (userForm: ILoginForm) => {
    AxiosRepository.Put("/account", userForm, "")
      .then((response) => {
        const axiosResponse = response as AxiosResponse;
        const responseToken: IResponseToken = axiosResponse.data;
        try {
          if (
            !helper.stringIsNullOrEmpty(responseToken.accessToken) &&
            !helper.stringIsNullOrEmpty(responseToken.refreshToken)
          ) {
            // store.commit("updateToken", responseToken);
            authStore.updateToken(responseToken);
            user.GetUserFromToken(responseToken.accessToken, true);
          } else throw new Error("Something went wrong :(");
        } catch {
          toast.warning("Вы yказали неверный данные");
        }
      })
      .finally(() => console.log('finally LoginForm'))
      .catch(() => toast.error("Ошибка"));
  };

  public RegisterForm = (userForm: IRegisterForm) => {
    AxiosRepository.Post("/account", userForm, "")
      .then((response) => {
        const state = response as AxiosResponse;
        try {
          const accessToken: string = state.data.accessToken;
          const refreshToken: string = state.data.refreshToken;
          const responseToken = state.data as IResponseToken;
          if (
            !helper.stringIsNullOrEmpty(accessToken) &&
            !helper.stringIsNullOrEmpty(refreshToken)
          ) {
            store.commit("updateToken", { accessToken, refreshToken });

            user.GetUserFromToken(accessToken, true);
          } else throw new Error("Something bad create");
        } catch {
          toast.warning("Вы yказали неверный данные");
        }
      })
      .finally(() => console.log('finally RegisterForm'))
      .catch(() => toast.error("Ошибка"));
  };
}


export const user=new User()