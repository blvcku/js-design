import { ContactSendMessage } from './Contact.types';
import objectToFormData from '../../../helpers/object-to-form-data/objectToFormData';

export const sendMessage: ContactSendMessage = async (data) => {
    const url = process.env.GATSBY_CONTACT_ENDPOINT;
    if (!url) throw new Error('Contact endpoint link is undefined');
    const formData = objectToFormData(data);
    const response = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
    });
    if (!response.ok) throw new Error('Failed to send message');
};
