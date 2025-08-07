import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify the webhook is from Sanity (you can add more security later)
    if (body._type) {
      // Revalidate the blog pages
      revalidatePath('/article');
      revalidatePath('/article/[slug]');
      
      console.log('Revalidated blog pages due to Sanity update');
      
      return NextResponse.json({ 
        message: 'Revalidation triggered',
        revalidated: true,
        now: Date.now()
      });
    }
    
    return NextResponse.json({ message: 'Invalid webhook payload' }, { status: 400 });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}
