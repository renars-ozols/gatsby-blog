import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import qs from "qs"
import Button from "../button/button"

import { FormGroup, StyledInput } from "./contact-form.styles"

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async values => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(values),
        url: "/",
      }

      try {
        await axios(options)
      } catch (e) {
        console.log(e)
      }
    },
  })
  return (
    <form
      name="Contact Form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <input type="hidden" name="bot-field" />
      <FormGroup>
        <label htmlFor="name">Name</label>
        <StyledInput
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          border={formik.touched.name && formik.errors.name && "1px solid red"}
        />
        {formik.touched.name && formik.errors.name ? (
          <span>{formik.errors.name}</span>
        ) : null}
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email</label>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          border={
            formik.touched.email && formik.errors.email && "1px solid red"
          }
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      </FormGroup>

      <FormGroup>
        <label htmlFor="message">Message</label>
        <StyledInput
          as="textarea"
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows="6"
          border={
            formik.touched.message && formik.errors.message && "1px solid red"
          }
        />
        {formik.touched.message && formik.errors.message ? (
          <span>{formik.errors.message}</span>
        ) : null}
      </FormGroup>

      <Button type="submit" disabled={formik.isSubmitting}>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
