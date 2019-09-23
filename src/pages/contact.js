import React from "react"
import styled, { css } from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"

import Container from "../components/common/container"
import Button from "../components/common/button"
import Title from "../components/common/title"

import "animate.css/animate.min.css"
import { runInThisContext } from "vm"
import { throws } from "assert"

class Contact extends React.Component {
  state = {
    name: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
    value: "",
    disabled: true,

    nameError: "",
    emailError: "",
    organisationError: "",
    phoneError: "",
    messageError: "",
  }

  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName()
    })
  }

  handleOrganisationChange = event => {
    this.setState({ organisation: event.target.value }, () => {
      this.validateOrganisation()
    })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail()
    })
  }

  handlePhoneChange = event => {
    this.setState({ phone: event.target.value }, () => {
      this.validatePhone()
    })
  }

  handleMessageChange = event => {
    this.setState({ message: event.target.value }, () => {
      this.validateMessage()
    })
  }

  validateName = () => {
    const { name } = this.state
    this.setState({
      nameError:
        name.length > 3 ? null : "Naam moet langer zijn dan 3 karakters",
    })
  }

  validateOrganisation = () => {
    const { organisation } = this.state
    this.setState({
      organisationError:
        organisation.length > 3
          ? null
          : "Organisatienaam moet langer zijn dan 3 karakters",
    })
  }

  validateEmail = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const { email } = this.state

    if (re.test(email)) {
      this.setState({
        emailError: null,
      })
    } else {
      this.setState({
        emailError: "Dit is geen valide e-mail adres",
      })
    }
  }

  validatePhone = () => {
    const { phone } = this.state
    this.setState({
      phoneError:
        phone.length > 10 ? null : "Dit is geen valide telefoonnummer",
    })
  }

  validateMessage = () => {
    const { message } = this.state
    this.setState({
      messageError: message.length > 0 ? null : "Bericht kan niet leeg zijn",
    })
  }

  render() {
    return (
      <>
        <ContactContainer>
          <Container>
            <ContactInfo animateIn="fadeInUp" animateOnce={true}>
              <Title light width={800}>
                Vraag een vrijblijvend adviesgesprek aan.
              </Title>
              <Title light nomargin width={800}>
                Neem hier contact op.
              </Title>
            </ContactInfo>
            <ContactFormWrapper animateIn="fadeInUp" animateOnce={true}>
              <ContactForm
                action="/thanks/"
                name="contact"
                method="post"
                data-netlify="true"
              >
                <InputFieldWrapper>
                  <Input type="hidden" value="contact" name="form-name" />
                  <InputContainer>
                    <Input
                      name="name"
                      placeholder="Naam"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                      onBlur={this.validateName}
                      error={this.state.nameError}
                    />
                    <ValidationError>{this.state.nameError}</ValidationError>
                  </InputContainer>
                  <InputContainer>
                    <Input
                      name="organisation"
                      placeholder="Organisatie"
                      type="text"
                      value={this.state.organisation}
                      onChange={this.handleOrganisationChange}
                      onBlur={this.validateOrganisation}
                      error={this.state.organisationError}
                    />
                    <ValidationError>
                      {this.state.organisationError}
                    </ValidationError>
                  </InputContainer>
                </InputFieldWrapper>
                <InputFieldWrapper>
                  <InputContainer>
                    <Input
                      name="email"
                      placeholder="E-mail"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      onBlur={this.validateEmail}
                      error={this.state.emailError}
                    />
                    <ValidationError>{this.state.emailError}</ValidationError>
                  </InputContainer>
                  <InputContainer>
                    <Input
                      name="phone"
                      placeholder="Telefoonnummer"
                      type="number"
                      value={this.state.phone}
                      onChange={this.handlePhoneChange}
                      onBlur={this.validatePhone}
                      error={this.state.phoneError}
                    />
                    <ValidationError>{this.state.phoneError}</ValidationError>
                  </InputContainer>
                </InputFieldWrapper>
                <TextArea
                  name="message"
                  placeholder="Vraag / Opmerking"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                  onBlur={this.validateMessage}
                  error={this.state.messageError}
                />
                <ValidationError>{this.state.messageError}</ValidationError>
                <SendButton
                  type="submit"
                  disabled={
                    !this.state.name ||
                    !this.state.email ||
                    !this.state.message ||
                    this.state.messageError ||
                    this.state.nameError ||
                    this.state.emailError
                  }
                >
                  Verzenden{" "}
                </SendButton>
              </ContactForm>
            </ContactFormWrapper>
          </Container>
        </ContactContainer>
      </>
    )
  }
}

const ContactContainer = styled.div`
  display: flex;
  min-height: 600px;
  padding-bottom: 50px;
  width: 100%;
  background-color: #2c2d31;
  flex-direction: column;
`

const ContactInfo = styled(ScrollAnimation)`
  text-align: center;
  color: white;
  margin: 100px 0 50px 0;
`
const ContactFormWrapper = styled(ScrollAnimation)``

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 25px;
  }
`

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Input = styled.input`
  height: 50px;
  padding: 0 10px;
  background-color: #adadad;
  border: none;
  border-radius: 10px;
  color: #2c2d31;
  font-family: "Poppins";
  font-size: 15px;
  margin: 8px 0px;

  :focus {
    outline: none;
  }

  ${props =>
    props.error &&
    css`
      border: 1px solid red;
    `}
`
const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px;
  background-color: #adadad;
  border-radius: 10px;
  border: none;
  margin: 10px 0 0;
  color: #2c2d31;
  font-family: "Poppins";
  font-size: 15px;

  ${props =>
    props.error &&
    css`
      border: 1px solid red;
    `}

  :focus {
    outline: none;
  }
`

const SendButton = styled(Button)`
  background-color: white;
  color: black;
  width: 175px;
  align-self: flex-end;
  right: 50px;

  @media (min-width: 320px) and (max-width: 480px) {
    right: 0px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`

const ValidationError = styled.div`
  color: red;
  font-family: "Poppins";
  font-size: 15px;
`

const RecaptchaContainer = styled.div``

export default Contact
