import ContactForm from './contactForm'

export default class ContactPage extends React.Component {
  constructor() {
    super()
  }

  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}
