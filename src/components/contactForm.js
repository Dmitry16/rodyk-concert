import React from 'react'
import { Field, reduxForm } from 'redux-form'
//styled componentsimport { H1, H3, Icon, P } from './styled/typographies'
import styled from 'styled-components'

//Form validation
const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  return errors
}

// const renderInput = field =>
//     <div>
//       <label>{field.input.placeholder}</label>
//       <div>
//         <input {...field.input} />
//         {field.error && <span>{field.error}</span>}
//       </div>
//     </div>

export default class ContactForm extends React.Component {
  constructor() {
    super()
  }

  render() {
//Style for the form section
    const FormSection = styled.div`

      border: 2px solid #fff;
      margin: 5% 0;
      padding: 5%;
      background: rgba(255, 255, 255, 0.3);
      text-align: center;
    `

    const { handleSubmit } = this.props

    // console.log(fields)

    return (
      <FormSection>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" placeholder="Tu Nombre" component="input" />
          </div>
          <div>
            <Field name="email" placeholder="Tu Email" component="input" type="email"/>
          </div>
          <div>
            <Field name="message" placeholder="Tu Mensaje" component="textarea" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </FormSection>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm);
