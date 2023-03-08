export interface ContactFormButtonsProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    numberOfPages: number;
    loading: boolean;
    formRef: React.RefObject<HTMLFormElement>;
    setShowErrors: React.Dispatch<React.SetStateAction<boolean>>;
}
