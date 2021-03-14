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
    if (Helper.objectIsNullOrEmpty(obj)) return undefined;
    for (const [key, value] of Object.entries(obj)) {
      if (key === str) result = value;
    }
    return result;
  };

  // public static userRole = User.GetRole()
  
}
