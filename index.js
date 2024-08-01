// creating server
const express=require("express")
const app=express()



// use middleware
app.use(requestTimeLogger)
app.use(warningMessage)

// middleware fun.
function warningMessage(req,res,next){
return res.status(200).send({
    message:"requested endpoint is in progress"

})
}
//middleware function
function requestTimeLogger(req,res,next){
console.log('request came at'+Date.now())
next()
}



// starting server
app.listen(7000,()=>{
    console.log("server is connected")
})