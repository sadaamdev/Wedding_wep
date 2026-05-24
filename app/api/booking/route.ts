import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendBookingEmail } from '@/lib/email'

export const runtime = 'edge'

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  eventType: z.string().min(1, 'Please select an event type'),
  weddingDate: z.string().min(1, 'Event date is required'),
  guestCount: z.string().min(1, 'Guest count is required'),
  package: z.string().min(1, 'Please select a package'),
  additionalRequests: z.string().optional(),
  whatsapp: z.boolean().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = bookingSchema.parse(body)

    await sendBookingEmail(data)

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to submit booking. Please try again.' },
      { status: 500 }
    )
  }
}
