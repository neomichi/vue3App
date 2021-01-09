
export class Helper {
    static stringIsNullOrEmpty=(str:string|null)=>str===null || str===undefined || str.length===0
    
}





interface IAnimal {
    name?: string;
  }
  
let animal: Readonly<IAnimal>={}
animal.name

type ValidMember="callback"

let v2: Record<string, any> = {v:"callback",c:"data"}

