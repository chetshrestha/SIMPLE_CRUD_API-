
const product=require('../models/product.model.js');


const getProducts=async(req,res)=>{
    try{
        const products=await product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const getProduct=async(req,res)=>{
    try{
       
        const Product1=await product.findById(req.params.id);
        res.status(200).json(Product1);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const createProduct=async(req,res)=>{
    try{
        const newProduct=await product.create(req.body);
        res.status(200).json(newProduct);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};
const updateProduct=async(req,res)=>{
    try{
        const product1=await product.findByIdAndUpdate(req.params.id,req.body);
        //if not in the database
        if(!product1){
            return res.status(404).json({message:'product not found_404'});
        }
        const updatedProduct=await product.findById(req.params.id);
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};


const deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product1=await product.findByIdAndDelete(id);
        if(!product1){
            return res.status(404).json({message:'product not found_404'});
        }
        res.status(200).json({message:"product deleted :"+product1.name});
    }catch(error){

        res.status(500).json({message:error.message});
    }
};


module.exports={

    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

};