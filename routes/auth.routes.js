import {Router} from 'express' ;
const authRouter = Router() ;
   
authRouter.post('/login', (req, res) => {
    
    res.send('Login route');
}) ;

authRouter.post('/register', (req, res) => {
    res.send({title:'Register route'});
}) ;
export default authRouter ;