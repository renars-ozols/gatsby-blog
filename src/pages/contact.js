import React from "react"
import Seo from "../components/seo"
import Container from "../components/container/container"
import Heading from "../components/heading/heading"
import ContactForm from "../components/contact-form/contact-form"

const Contact = () => (
  <>
    <Seo title="Contact" />
    <Container as="section">
      <Heading h3 uppercase center marginTop noMargin>
        Contact
      </Heading>
      <ContactForm />
    </Container>
  </>
)

export default Contact
