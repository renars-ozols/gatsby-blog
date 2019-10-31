import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import qs from "qs"
import ReactNotification, { store } from "react-notifications-component"
import Button from "../button/button"
import "react-notifications-component/dist/theme.css"
import "animate.css"

import {
  StyledForm,
  FormGroup,
  StyledInput,
  Loader,
} from "./contact-form.styles"

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

    onSubmit: async (values, { resetForm }) => {
      const data = {
        ...values,
      }
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "/contact",
      }

      try {
        await axios(options)

        store.addNotification({
          title: "Form submitted successfully!",
          message:
            "Thank You for contacting us, we will reply to your message as soon as we can.",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "bounceIn"],
          animationOut: ["animated", "bounceOut"],
          dismiss: {
            duration: 10000,
            onScreen: true,
            showIcon: true,
          },
        })

        resetForm()
      } catch (error) {
        store.addNotification({
          title: "Error!",
          message:
            "There was an error while submitting your form. Please try again.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "flipInY"],
          animationOut: ["animated", "flipOutY"],
          dismiss: {
            duration: 5000,
            onScreen: true,
            showIcon: true,
          },
        })
      }
    },
  })
  return (
    <>
      <ReactNotification />
      <StyledForm
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
            border={
              formik.touched.name && formik.errors.name && "1px solid red"
            }
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
          {formik.isSubmitting ? <Loader /> : "Submit"}
        </Button>
      </StyledForm>
    </>
  )
}

export default ContactForm
