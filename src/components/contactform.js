import React, { useState, useEffect} from "react";
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('I need to know your name.'),
    email: yup.email(),
    phone: yup.string(),
    message: yup.string().required('I cant help you if you dont tell me what you need.')
})





const ContactForm = () => {
const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})
const [errors, setErrors] = useState({name: '', email: '', phone: '', message: ''})
const [disabled, setDisabled] = useState(true)






const setFormErrors = (name, value)=>{
    
  } 

  const change = event => {
    const {name, value, type} = event.target  
        const valueToUse = type === 'text' ? value : name
        setForm({...form, [name]:valueToUse})
        setFormErrors(name, value)
 }

 const submit = event=> {
    event.preventDefault()
    const item ={name: form.name, email: form.email, phone: form.picture, message: form.message} 
    //write the code that sends it to my email when submitted
    };
    useEffect(()=>{
        schema.isValid(form).then(valid=> setDisabled(!valid)) },[form]) 


};

export default ContactForm;