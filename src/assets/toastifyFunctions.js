import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function advice(message) {
    toast.error(message, {
        theme: "colored"
    })
}

export function success(message) {
    toast.success(message, {
        theme: "colored"
    })
}