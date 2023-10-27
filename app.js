require("dotenv").config()

const from=process.env.PHONE_NO
const to=process.env.MY_NUM

const twilio=require("twilio")(
    process.env.TOKEN_SID,
    process.env.TOKEN_SECRET,
    {
        accountSid:process.env.ACCOUNT_SID
    }
)

twilio.messages.create({
    from,
    to,
    body:"Hello from twilio"
}).then((msg)=>console.log("Message sent")).catch(error=>console.log(error))

