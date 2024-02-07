import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('email')
export class EmailController {
    constructor(private mailService: MailerService) {}

    @Post('')
    async plainTextEmail(@Body() body: { name: string, phoneNumber: string, email: string, message: string }) {
        const { name, phoneNumber, email, message } = body;

        // Define the two email addresses you want to send the mail to
        const toEmails = ['mustkeem1310hussain@gmail.com', email];

        // Format the message content
        const formattedMessage = `
            New Contact Form Submission:

            Name: ${name}
            Phone Number: ${phoneNumber}
            Email: ${email}
            Message: ${message}
        `;

        // Use the two email addresses in the to field
        await this.mailService.sendMail({
            to: toEmails,
            from: email,  // Use the sender's email as the "from" address
            subject: 'New Contact Form Submission',
            text: formattedMessage,
        });

        return 'success';
    }
}
