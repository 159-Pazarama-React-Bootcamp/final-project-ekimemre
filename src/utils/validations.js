import * as Yup from 'yup'

const ticketFormSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'En az 3 karakter olmalıdır.')
    .max(15, 'En fazla 15 karakter olmalıdır.')
    .required('Zorunlu alan.'),
  lastName: Yup.string()
    .min(3, 'En az 3 karakter olmalıdır.')
    .max(15, 'En fazla 15 karakter olmalıdır.')
    .required('Zorunlu alan.'),
  age: Yup.number()
    .min(0, 'Yaş değeri negatif olamaz.')
    .max(99, 'Yaş değerei 0-99 aralığında olmalı!.')
    .optional(),
  tc: Yup.string()
    .min(11, '11 haneli TC Kimlik Numarasını giriniz.')
    .max(11, '11 haneli TC Kimlik Numarasını giriniz.')
    .required('Zorunlu alan.'),
  info: Yup.string()
    .max(200, 'Maksimum 200 karakter içeren bir metin girebilirsiniz.')
    .required('Zorunlu alan.'),
  address: Yup.string()
    .max(60, '60 kararkter ile sınırlıdır.')
    .required('Zorunlu alan.'),
  base64: Yup.string(),
  createdAt: Yup.string(),
})

export default ticketFormSchema

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(5).required(),
})
