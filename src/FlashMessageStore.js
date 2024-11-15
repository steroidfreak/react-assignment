import { atom, useAtom } from 'jotai';

// Define the atoms to hold the message states
export const flashMessageAtom = atom({
    message: '',
    type: 'info',
});

// Hook to manage general flash messages
export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    // Function to show a flash message
    const showMessage = (message, type = 'info') => {
        setFlashMessage({ message, type });
    };

    // Function to clear the flash message
    const clearMessage = () => {
        setFlashMessage({ message: '', type: 'info' });
    };

    // Function to get the current flash message
    const getMessage = () => {
        return flashMessage;
    };

    return {
        getMessage,
        showMessage,
        clearMessage
    };
};
