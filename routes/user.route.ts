import { Router, Request, Response } from "express";
import { getUsuario, getUsuarios, saveUsuario } from "../controllers/user.controller";


const userRouter: Router = Router();

userRouter.get("/", async (req: Request, res:Response) =>{
    let usuarios: any[] = [];

    await getUsuarios().then(data => usuarios = data);

    res.status(200).json({data: usuarios});
    
});

userRouter.get("/:id", async (req: Request, res:Response) =>{
    await getUsuario(req.params.id).then(data =>{
        if(!data){
            console.log("No se encontró el usuario");
            res.status(404).send();
        } else {
            res.status(200).json({data});
        }
    }).catch(err => {
        console.error(err);
        res.status(500).json({message: err});
    });
});

userRouter.post("/", async (req: Request, res:Response) =>{
    await saveUsuario({
        username: req.body.username,
        password: req.body.password
    }).then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json({message: err}));
});

export default userRouter;