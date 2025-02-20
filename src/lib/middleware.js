import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose' // Using jose for JWT verification in Edge Runtime

// protectRoute middleware
export async function protectRoute(req) {
  // Get token from cookies
  const token = req.cookies.token

  // Verify token
  try {
    const { id, role } = await jwtVerify(token, process.env.JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    return new NextResponse(null, {
      status: 401,
      statusText: 'Unauthorized',
    })
  }
}
