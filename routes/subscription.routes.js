import {Router} from 'express' ;
const subscriptionRouter = Router() ;
   
subscriptionRouter.post('/login', (req, res) => {
    
    res.send('Login route');
}) ;

subscriptionRouter.post('/register', (req, res) => {
    res.send({title:'Register route'});
}) ;
export default subscriptionRouter ;