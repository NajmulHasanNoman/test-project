import { NextResponse } from 'next/server';
import { headers } from 'next/headers';


export async function GET(req,res){
    ////Database check.. /Database Query.. /Business Logic..
    //Find user identity by checking Header
     const head= headers()
    let username= head.get('username');
    
    return NextResponse.json({msg:username})
}