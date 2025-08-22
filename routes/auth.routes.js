import { Router } from "express";
const authRouter = Router()

authRouter.get('/', (req, res) => {
    res.send({message: 'GET request'})
})

export default authRouter