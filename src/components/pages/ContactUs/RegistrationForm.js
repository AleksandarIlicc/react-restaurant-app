import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Validation from './ValidationForm';

const Form = ({ setIsSubmitted }) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handelChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setIsSubmitted(true);
        }
    })

    return (
        <form action='#' className='form__form' onSubmit={(e) => handleSubmit(e)}>
            <div className='input-box'>
                <input type='text' name='username' placeholder='User Name' onChange={(e) => handelChange(e)} />
            </div>
            <span className='error-message'>{errors.username}</span>
            <div className='input-box'>
                <input type='email' name='email' placeholder='Email' onChange={(e) => handelChange(e)} />
            </div>
            <span className='error-message'>{errors.email}</span>
            <div className='input-box'>
                <input type='password' name='password' placeholder='Password' onChange={(e) => handelChange(e)} />
            </div>
            <span className='error-message'>{errors.password}</span>
            <div className='input-box'>
                <input type='password' name='password2' placeholder='Password' onChange={(e) => handelChange(e)} />
            </div>
            <span className='error-message'>{errors.password2}</span>
            <button className='button__form'>Sign up</button>
            <p className='form-input-login'>
                Already have an account? Login <Link to='/'>here</Link>.
            </p>
        </form>
    )
}

export default Form;