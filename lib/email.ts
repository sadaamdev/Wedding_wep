import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'xulashowedding@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendContactEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'xulashowedding@gmail.com',
    to: 'xulashowedding@gmail.com',
    subject: `New Contact: ${data.subject} - from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the XULASHO Wedding & Event Management website contact form.
        </p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

export async function sendBookingEmail(data: {
  name: string
  email: string
  phone: string
  eventType: string
  weddingDate: string
  guestCount: string
  package: string
  additionalRequests?: string
  whatsapp?: boolean
}) {
  const packageNames: Record<string, string> = {
    wedding: 'Wedding',
    opening: 'Opening Ceremony',
    graduation: 'Graduation',
    birthday: 'Birthday',
  }

  const eventMailOptions = {
    from: process.env.EMAIL_USER || 'xulashowedding@gmail.com',
    to: 'xulashowedding@gmail.com',
    subject: `New Booking Request: ${packageNames[data.eventType]} - from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">New Booking Request</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Event Type:</strong> ${packageNames[data.eventType]}</p>
          <p><strong>Event Date:</strong> ${data.weddingDate}</p>
          <p><strong>Guest Count:</strong> ${data.guestCount}</p>
          <p><strong>Package:</strong> ${data.package}</p>
          ${data.whatsapp ? '<p><strong>Contact via WhatsApp:</strong> Yes</p>' : ''}
          ${data.additionalRequests ? `<p><strong>Additional Requests:</strong></p><p style="white-space: pre-wrap;">${data.additionalRequests}</p>` : ''}
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the XULASHO Wedding & Event Management website booking form.
        </p>
      </div>
    `,
  }

  // Also send confirmation email to the customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER || 'xulashowedding@gmail.com',
    to: data.email,
    subject: 'Booking Request Received - XULASHO Wedding & Event Management',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Thank You for Your Booking Request!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your booking request for a ${packageNames[data.eventType]}. Our team will contact you within 24 hours to discuss your event details.</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Event Type:</strong> ${packageNames[data.eventType]}</p>
          <p><strong>Event Date:</strong> ${data.weddingDate}</p>
          <p><strong>Guest Count:</strong> ${data.guestCount}</p>
          <p><strong>Selected Package:</strong> ${data.package}</p>
        </div>
        <p>If you have any urgent questions, feel free to contact us:</p>
        <ul>
          <li>Phone: +252 61 234 5678</li>
          <li>WhatsApp: +252 61 234 5678</li>
          <li>Email: hello@xulasho.com</li>
        </ul>
        <p>Best regards,<br/>XULASHO Wedding & Event Management</p>
      </div>
    `,
  }

  await transporter.sendMail(eventMailOptions)
  await transporter.sendMail(customerMailOptions)
}