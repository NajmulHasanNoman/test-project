import { jwtVerify, SignJWT } from "jose";
import { NextResponse } from 'next/server';

export async function GET(req,res){

    const secret= new  TextEncoder().encode(process.env.JWT_KEY);
    const payload={email:"noman@gmailcom",user_id:"13e424"}

    let Token= await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setIssuer('https://loacalhost:3000')
    .setExpirationTime('2h')
    .sign(secret)

    return NextResponse.json({token:Token})
}

export async function POST(req,res){
    const JsonBody=await req.json();
    const Token=JsonBody['token']

    const secret= new  TextEncoder().encode(process.env.JWT_KEY);

    const decoded=await jwtVerify(Token,secret);

    return NextResponse.json(decoded);
    
}