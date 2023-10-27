require("dotenv").config()
const express=require("express")

const app=express()
const from=process.env.PHONE_NO
const to=process.env.MY_NUM

const twilio=require("twilio")(
    process.env.TOKEN_SID,
    process.env.TOKEN_SECRET,
    {
        accountSid:process.env.ACCOUNT_SID
    }
)

const sendSMS=()=>{

    twilio.messages.create({
        from,
        to,
        body:"Hello from twilio"
    }).then((msg)=>console.log("Message sent")).catch(error=>console.log(error))
}

app.listen(3000,()=>{console.log("Server is up and running")})