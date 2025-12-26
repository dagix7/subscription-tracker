import {Router} from 'express' ;
import { signin, signup, signout } from '../controllers/auth.controller.js' ;
const authRouter = Router() ;
   
authRouter.post('/login', (req, res) => {
    
    res.send('Login route');
}) ;

authRouter.post('/register', (req, res) => {
    res.send({title:'Register route'});
}) ;
export default authRouter ;