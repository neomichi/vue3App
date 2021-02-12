import { parse } from 'path';
import { ResponseToken } from "./types";
import { User } from "./user";

export class Helper {
 public static stringIsNullOrEmpty = (str: string |undefined | null) =>
    str === null || str === undefined || str.length === 0;

    public static objectIsNullOrEmpty = <T extends Object>(obj: T) => {
    return obj == null || Object.keys(obj).length == 0;
  };
  

  /// return value in obj[key].
  public static objectKeyValue = function<T extends Object>(obj: T, str: string) {
    let result: any;
    for (const [key, value] of Object.entries(obj)) {
      if (key === str) result = value;
    }
    return result;
  };

  public static userRole =function<T extends Object>(obj: T, str: string) {
    const response= Helper.objectKeyValue(obj,str)
    return User.GetRoleFromString(response)
  } 

  // public static ParseResponseToken=(obj:any)IResponseToken=> {
   
  //     const refresh_token=obj.refresh_token
  //     const access_token= obj.access_token

  //    if (!Helper.stringIsNullOrEmpty(refresh_token) && !Helper.stringIsNullOrEmpty(access_token))
      
  //   return  {accessToken:access_token,refreshToken:refresh_token}        
  // }
}
