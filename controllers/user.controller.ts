import User from "../models/user.model";

export async function getUsuarios(): Promise<any>{
return User.find({});
}

export async function getUsuario(id: String): Promise<any>{
    return User.findById(id);
}

export async function saveUsuario(params: any){
    return new User(params); 
}