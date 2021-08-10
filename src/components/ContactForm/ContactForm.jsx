import React, { Component } from "react";
import "./ContactForm.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", number: "" };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-contacts">
        <label className="form-contacts__input">
          Name:
          <input
            className="form-contacts__text"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={name}
            autoComplete="off"
          />
        </label>
        <label className="form-contacts__input">
          Number:
          <input
            className="form-contacts__text"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={number}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="form-contacts__button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
