const express =require("express")
const  router=express.Router()

const {addUser, getUser}=require("../Controller/samplecontroller")

router.post("/user",addUser)
router.get("/login",getUser)

module.exports=router