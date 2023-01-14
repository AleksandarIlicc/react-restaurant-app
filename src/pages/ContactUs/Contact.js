import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SuccessMessage from './SuccessMessage';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main>
      <section className='form'>
        <div className='form__background'></div>
        <div className='form__container'>
          <h2 className='heading__secondary text-center mt--large'>Contact Us</h2>
          {!isSubmitted && <RegistrationForm setIsSubmitted={setIsSubmitted} />}
          {isSubmitted && <SuccessMessage />}
        </div>
      </section>
    </main>
  )
}

export default Contact;