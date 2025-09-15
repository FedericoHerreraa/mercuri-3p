import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
    const { name, email, company, service, message } = await request.json();

    const sendEmail = await resend.emails.send({
        from: "Mercuri3P <contacto@mercuri3p.com>",
        to: "mercuri3p@outlook.com",
        subject: "Nuevo mensaje de contacto",
        html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Empresa: ${company}</p><p>Servicio: ${service}</p><p>Mensaje: ${message}</p>`,
    });
    
    const sendEmailToClient = await resend.emails.send({
        from: "Mercuri3P <contacto@mercuri3p.com>",
        to: email,
        subject: "Enviado nuevo mensaje de contacto",
        html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
    });

    return NextResponse.json({ sendEmail, sendEmailToClient });
}