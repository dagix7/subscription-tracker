import {Router} from 'express' ;
import { signin, signup, signout } from '../controllers/auth.controller.js' ;
const authRouter = Router() ;
   
authRouter.post('/login', signin) ;

authRouter.post('/register', signup) ;

authRouter.post('/logout', signout) ;
export default authRouter ;