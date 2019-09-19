import React from "react"

import styled from "styled-components"

import Container from "../components/common/container"
import Button from "../components/common/button"
import Title from "../components/common/title"

import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

class Contact extends React.Component {
  _scrolltTo(section) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: section,
    })
  }

  render() {
    return (
      <>
        <ContactContainer>
          <Container>
            <ContactInfo animateIn="fadeInUp" animateOnce={true}>
              <Title light width={800}>
                Heb je een vraag of wil je meer informatie?
              </Title>
              <Title light nomargin width={800}>
                Neem hier contact op.
              </Title>
            </ContactInfo>
            <ContactFormWrapper animateIn="fadeInUp" animateOnce={true}>
              <ContactForm
                data-netlify-recaptcha="true"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <InputFieldWrapper>
                  <Input name="name" placeholder="Naam" />
                  <Input name="email" placeholder="E-mail" />
                </InputFieldWrapper>
                <TextArea name="message" placeholder="Bericht" />
                <SendButton type="submit">Verzenden </SendButton>
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
`

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Input = styled.input`
  width: 49%;
  height: 50px;
  padding: 0 10px;
  background-color: #adadad;
  border: none;
  border-radius: 10px;
  color: #2c2d31;
  font-family: "Poppins";
  font-size: 15px;
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
`

const SendButton = styled(Button)`
  background-color: white;
  color: black;
  width: 175px;
  align-self: flex-end;
  right: 50px;
  bottom: 20px;
  position: relative;
`

export default Contact
