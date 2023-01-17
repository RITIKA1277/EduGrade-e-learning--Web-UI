const express=require("express");
const app=express();
const port=2000;
app.listen(port,()=>{
    console.log("Host at 2000");
});
const data=[
    {
        name:"ritika",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"
    },
    {
        name:"shreya",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"

    },
    {
        name:"rishabh",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"
    },
    {
        name:"ritika",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"
    },
    {
        name:"ritika",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"
    },
    {
        name:"ritika",
        email:"bhatiar@gmail.com",
        message:"ghc hcmhvmhckcugm  vbh"
    },
]
app.get("/data",(req,res)=>{
res.json(data);
})