
export enum UserRole {
    admin=30,
    manager=20,
    user=10,
    default=0
}


export class User {

static GetRoleFromString=(str:string)=>{
        const result=UserRole[str as keyof typeof UserRole] as number
        return result===undefined?UserRole.default:result
    }
}