import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";
import { ApiError } from "../errors/api.error";

export function getUsuarios(req: Request, res: Response, next:NextFunction): void{
    User.find({})
        .then(data => res.status(200).json({data}))
        .catch(err => next(new ApiError(err.message, 500)));
}

export function getUsuario(req: Request, res: Response, next: NextFunction): void{
    const id = req.params.id;
    User.findById(id)
        .then(data => !data? next(new ApiError(`No existe un usuario con id ${id}`, 404)) 
                            : res.status(200).json({data}))
        .catch(err => next(new ApiError(err.message, 500)));
}

export function saveUsuario(req: Request, res: Response, next: NextFunction): void{

    let hashedPassword;
    const usuario = new User({
        username: req.body.username,
        password: req.body.password
    }); 

    usuario.save()
        .then(doc => res.status(200).json({data: doc}))
        .catch(err => next(new ApiError(err.message, 500)));
}

function mergearDocumento(origen: any, destino: any){
    origen.username = destino.username;
    origen.password = destino.password;

    return origen;
}

export function updateUsuario(req: Request, res: Response, next: NextFunction){
    const id = req.params.id;
    let data:IUser = req.body;

    User.findById(id)
        .then(document => {
            let documentoMergeado = mergearDocumento(document, data);
            return User.updateOne({_id: id}, documentoMergeado);
        })
        .then(document => res.status(200).send())
        .catch(err => next(new ApiError(err.message, 500)));

}

export function deleteUsuario(req: Request, res: Response, next: NextFunction) {
    const id : string = req.params.id;
    User.findOneAndDelete({_id: id})
        .then(doc => !doc ? 
            next(new ApiError(`No existe un usuario con ID ${id}`, 404)) :
            res.status(200).send())
        .catch(err => next(new ApiError(err.message, 500)));

}