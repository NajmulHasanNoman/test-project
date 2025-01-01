import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req,res,next){
if(req.nextUrl.pathname.startsWith('/api/Profile')){

  //  Token Verify
    try{
       //Token pick from header
       const reqHeaders=new Headers(req.headers) 
       const token=reqHeaders.get('Token')

      //Token Verify
       const key=new TextEncoder().encode(process.env.JWT_KEY);
       const decodedString= await jwtVerify(token,key)

       //Add with next Request Header
       const username=decodedString['payload']['username'];
       reqHeaders.set('username',username);

       //Next step with manipulated header
       return NextResponse.next({
         request:{headers:reqHeaders}
       })


    }
    catch (e) {
        return NextResponse.json({status:"fail",message:"Unauthorized"},{status:401})
    }
} 

} 