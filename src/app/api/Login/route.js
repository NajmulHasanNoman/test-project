
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(req,res){
    const JsonBody=await req.json();
    const userName=JsonBody['user'];
    const Password=JsonBody['password'];

    if(userName==="noman" && Password==="1234"){
        
        //Token
        const payload={username:userName}
        const key=new TextEncoder().encode(process.env.JWT_KEY);
        let token=await new SignJWT(payload)
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setIssuer("https://localhost:3000")
        .setExpirationTime('2h')
        .sign(key)

    return NextResponse.json({status:"Login Success",message:"Valid user",token:token},{status:200})
    }
    else{
        return NextResponse.json({status:"fail",message:"Invalid user"},{status:401})
    }
}