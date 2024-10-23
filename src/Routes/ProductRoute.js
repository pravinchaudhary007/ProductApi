import express from 'express'
const Router = express.Router();
import Product from '../Controllers/Productfun.js';

Router.route('/products').get(Product)


export default Router;
