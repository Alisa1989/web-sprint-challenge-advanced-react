// write your custom hook here to control your checkout form
import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useForm = (initialValue) => {
    //const [values, setValues] = useState(initialValue); 
    const [values, setValues] = useLocalStorage("checkoutData", initialValue); 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const handleChanges = (e) => {
        console.log("handleChanges running");
        console.log(e.target.name, e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        console.log()
        e.preventDefault();
        setShowSuccessMessage(true);
      };


    return [values, handleSubmit, handleChanges, showSuccessMessage];
}

export default useForm;