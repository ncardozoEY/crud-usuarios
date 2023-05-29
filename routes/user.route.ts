import { Router, Request, Response, NextFunction } from "express";
import { getUsuario, getUsuarios, saveUsuario, deleteUsuario, updateUsuario } from "../controllers/user.controller";


const userRouter: Router = Router();

userRouter.get("/", async (req: Request, res:Response, next: NextFunction) =>{
    getUsuarios(req,res, next);
});

userRouter.get("/:id", (req: Request, res:Response, next: NextFunction) =>{
    getUsuario(req,res, next);
});

userRouter.post("/", (req: Request, res:Response, next: NextFunction) =>{
    saveUsuario(req,res, next);
});

userRouter.put("/:id", (req: Request, res:Response, next: NextFunction) => {
    updateUsuario(req,res,next);
});

userRouter.delete("/:id", (req: Request, res:Response, next: NextFunction) =>{
    deleteUsuario(req,res, next);
});

export default userRouter;