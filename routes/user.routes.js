import {Router} from 'express' ;
const userRouter = Router() ;
   
userRouter.post('/login', (req, res) => {
    
    res.send('Login route');
}) ;

userRouter.post('/register', (req, res) => {
    res.send({title:'Register route'});
}) ;
export default userRouter ;