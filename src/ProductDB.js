import database from "./DB/database.js";
import productjson from '../Product.json' assert { type: 'json' }; 
import ProductModel from './Models/ProductModels.js'; 


const Product = async () => {
  try {
    await database();
    await ProductModel.deleteMany();
    console.log(`Data delete successfully.`);
    await ProductModel.create(productjson);
    console.log("Product New JSON file inserted successfully.");
  } catch (error) {
    console.log("Error:", error.message); 
  }
};

Product();
