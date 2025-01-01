
import { nodemailer } from 'nodemailer';
import { NextResponse } from 'next/server';
export async function GET(req,res){

    const {searchParams}=new URL(req.url)
    const ToEmail=searchParams.get('email')

    //transporter
    let tranasporter=nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{
            user:"info@teamrabbil.com",
            pass:"GSAF23124"
        },
        tls:{rejectUnauthorized:false}
    })

    //prepare mail
    let myEmail={
        form:"Test mail from next js application<info@teamrabbil.com>",
        to:ToEmail,
        subject:"Test mail from next js application",
        Text:"Test mail from next js application"
    }

    try{
       await  tranasporter.sendMail(myEmail)
       return NextResponse.json({msg:success})
    }
    catch(e){
        return NextResponse.json({msg:fail})
    }

}