const express =require("express")
const  router=express.Router()

const {addUser, getUser}=require("../Controller/samplecontroller")

router.post("/user",addUser)
router.post("/login",getUser)

module.exports=router