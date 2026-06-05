import {Router} from 'express'
import {Request, Response} from 'express'
import {userRepository} from '../../infrastructure/persistence/prisma/repository/userRepository'
import {userAssembler} from '../assembler/userAssembler'
const router = Router();

router.get("/",(req : Request, res : Response)=>{
    return res.status(200).json(userRepository.getAll());
})
router.get("/:id",(req : Request, res : Response)=> {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id ;
    return res.status(200).json(userRepository.getById(id));
});
router.post("/",(req : Request, res : Response) =>{
    const userSchema = userAssembler.rawToInterface(req.body);
    
    return res.status(200).json();
})