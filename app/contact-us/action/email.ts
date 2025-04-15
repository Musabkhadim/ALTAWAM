"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
  subject: z.string().min(3, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    subject?: string[]
    message?: string[]
  }
  message?: string
  success?: boolean
}

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors above.",
      success: false,
    }
  }

  const { name, email, phone, subject, message } = validatedFields.data

  try {
    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For example with Nodemailer:
    // const transporter = nodemailer.createTransport({...})
    // await transporter.sendMail({
    //   from: email,
    //   to: "Altawamelectronics@gmail.com",
    //   subject: `Contact Form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone}</p>
    //          <p><strong>Message:</strong> ${message}</p>`
    // })

    // For demo purposes, we'll just simulate a successful email send
    // In production, replace this with actual email sending code
    console.log("Email would be sent to Altawamelectronics@gmail.com with:", {
      name,
      email,
      phone,
      subject,
      message,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      success: true,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      message: "Failed to send your message. Please try again later.",
      success: false,
    }
  }
}
