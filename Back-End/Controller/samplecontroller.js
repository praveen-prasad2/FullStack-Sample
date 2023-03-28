const SampleModel =require("../Models/samplemodel")

const addUser=async (req,res)=>{
    try {
let data=await SampleModel.create(req.body)

res.json({
    success:true,
    message:"User Registration successful"
})
    } catch (error) {
        res.json({
            success:false,
            message:"Try again"
        })
        
    }
}


const getUser=async(req,res)=>{
    try {
        let user =await SampleModel.findOne({email:req.body.email})
        if(user.password == req.body.password){
            res.json({
                success:true,
                message:"success"
            })
        }
        else{
            res.json({
                success:false,
                message:"wrong password"})
        }
    } catch (error) {
        res.json({
            success:false,
            message:"unsuccessful"
        })
    }
}

module.exports={addUser,getUser}