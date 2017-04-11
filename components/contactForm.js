import React from 'react'
import { Field, reduxForm } from 'redux-form'

export default class ContactForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>Nombre</label>
          <Field name='firstName' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor='lastName'>Apellidos</label>
          <Field name='lastName' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' component='input' type='email'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);
