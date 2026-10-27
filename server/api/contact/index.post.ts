import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (value: unknown, max: number) =>
    typeof value === 'string' ? value.trim().slice(0, max) : ''

export default defineEventHandler(async (event) => {
    const { smtp, contact } = useRuntimeConfig(event)
    const body = await readBody(event)

    // Champ piège invisible : un humain ne le remplit jamais, on fait mine d'avoir envoyé
    if (clean(body?.website, 200)) {
        return { ok: true }
    }

    const name = clean(body?.name, 200)
    const title = clean(body?.title, 200).replace(/[\r\n]+/g, ' ')
    const email = clean(body?.email, 200)
    const phone = clean(body?.phone, 50)
    const message = clean(body?.message, 10000)

    if (name.length < 2 || !title || !EMAIL_REGEX.test(email) || message.length < 10) {
        throw createError({ statusCode: 400, statusMessage: 'Formulaire incomplet' })
    }

    if (!smtp.host || !smtp.user || !smtp.pass || !contact.to) {
        console.error('Formulaire de contact : configuration SMTP ou destinataire manquant')
        throw createError({ statusCode: 500, statusMessage: 'Envoi du message non configuré' })
    }

    const port = Number(smtp.port)
    const transporter = nodemailer.createTransport({
        host: smtp.host,
        port,
        secure: port === 465,
        auth: { user: smtp.user, pass: smtp.pass },
    })

    try {
        await transporter.sendMail({
            from: { name: 'Forelse.fr', address: contact.from || smtp.user },
            to: contact.to,
            replyTo: { name, address: email },
            subject: `[Contact forelse.fr] ${title}`,
            text: [
                `Nom : ${name}`,
                `E-mail : ${email}`,
                `Téléphone : ${phone || 'non renseigné'}`,
                '',
                message,
            ].join('\n'),
        })
    } catch (error) {
        // On remonte l'échec au formulaire au lieu de laisser croire que le message est parti
        console.error('Envoi du formulaire de contact impossible', error)
        throw createError({ statusCode: 502, statusMessage: 'Le message n\'a pas pu être transmis' })
    }

    return { ok: true }
})
