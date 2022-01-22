import * as Yup from 'yup'

const ticketFormSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  age: Yup.number().min(18),
  tc: Yup.string().min(11).max(11).required(),
  info: Yup.string().max(300).required(),
  address: Yup.string().required(),
  file: Yup.mixed(),
  createdAt: Yup.string(),
})

export default ticketFormSchema

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(5).required().label('Password'),
})
