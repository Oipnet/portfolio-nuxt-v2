interface Contact {
    name: string;
    title: string;
    email: string;
    phone: string;
    message: string;
}

export const useCreateContact = async (contact: Contact) => {
    await $fetch('/api/contact', {
        method: 'POST',
        body: {
            name: contact.name,
            title: contact.title,
            email: contact.email,
            phone: contact.phone.length ? contact.phone : null,
            message: contact.message
        }
    })
}
