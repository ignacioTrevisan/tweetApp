import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";


export const UseForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [checkForm, setCheckForm] = useState([]);


    useEffect(() => {
        createValidator();
    }, [formState])

    const isFormValid = useMemo(() => {
        for (const textField of Object.keys(checkForm)) {
            if (checkForm[textField] !== null) return false;
        }
        return true;
    }, [checkForm])


    const createValidator = () => {
        const checkValuesForm = [];

        for (const texfield of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[texfield];
            checkValuesForm[`${texfield}Valid`] = fn(formState[texfield]) ? null : errorMessage;
        }
        setCheckForm(checkValuesForm);
    }
    const OnInputchange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const reset = () => {
        setFormState(initialForm);
    }
    return {

        ...formState,

        formState,

        OnInputchange,

        reset,
        isFormValid,

        ...checkForm

    }
}
