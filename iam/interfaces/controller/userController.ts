import {Router} from 'express'
import {Request, Response} from 'express'
import {userRepository} from '../../infrastructure/persistence/prisma/repository/userRepository'
const router = Router();

router.get("/user",(req : Request, res : Response)=>{
    return res.status(200).json(userRepository.getAll());
})
router.get("/user/:id",(req : Request, res : Response)=> {
    const {id} = req.params;
    return res.status(200).json(userRepository.getById(id));

});