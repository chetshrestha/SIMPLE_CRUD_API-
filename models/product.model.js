const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,"product name,please"]
        },
        quantity:{
            type: Number,
            required:true,
            default: 0
        },
        price:{
            type:Number,
            required: true,
            default: 0
        },
        image:{
            type: String,
            required:false
        }
    },
    {
        timestamps:true /*add two properties of type Date 
         
    createdAt: a date representing when this document was created
    updatedAt: a date representing when this document was last updated
*/
    }
);

//allow mongodb to use it 

const product=mongoose.model("product",ProductSchema);
module.exports=product;