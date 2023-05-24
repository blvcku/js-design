import { useContext } from 'react';
import { ContactFormContext } from './ContactFormContext';

const useContactForm = () => {
    const context = useContext(ContactFormContext);
    if (context === undefined)
        throw new Error(`useContactForm must be within ContactFormProvider`);
    return context;
};

export default useContactForm;
