export type ContactMessage = {
    name: string;
    email: string;
    message: string;
};

export type ContactSendMessage = (data: ContactMessage) => Promise<void>;
