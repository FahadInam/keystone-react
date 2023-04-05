import * as Yup from "yup";


export const SignInSchema = Yup.object({
    email: Yup.string().email("Must be a valid email.").required("Please enter your email."),
    password: Yup.string().min(6).required("Please enter your password.")
})
export const SignUpSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Please enter your firsname."),
    lastname: Yup.string().min(2).max(25).required("Please enter your lastname."),
    email: Yup.string().email().required("Please enter your email."),
    password: Yup.string().min(6).required("Please enter your password."),
    password_confirmation: Yup.string().required('').oneOf([Yup.ref('password'), null], "Password must match"),
})
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const CompanyDetails = Yup.object({
    dotnumber: Yup.number()
    .typeError('Not a valid DOT Number').notRequired(),
    companyname: Yup.string().min(2).max(25).required("Company name is required."),
    address: Yup.string().min(2).max(25).required("Address is required."),
    country: Yup.string().required("Country is required."),
    city: Yup.string().required("City is required."),
    zipcode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Zip code is invalid')
    .required('Zip code is required'),
    state: Yup.string().required('State is required'),
    phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone Number is required."),
    timezone: Yup.string()
    // .matches(/^([A-Z][a-z]+\/){1,3}[A-Z][a-z]+$/, 'Invalid timezone format')
    .required('Timezone is required')
})

export const ForgotPassword = Yup.object({
    email: Yup.string().email("Must be a valid email.").required("Please enter your email.")
})
export const ResetPassword = Yup.object({
    password: Yup.string().min(6).required("Please enter your password."),
    password_confirmation: Yup.string().required('').oneOf([Yup.ref('password'), null], "Password must match")

})
export const InviteValidation = Yup.object({
    firstname: Yup.string().min(2).max(25).required("Enter a valid firsname."),
    lastname: Yup.string().min(2).max(25).required("Enter a valid lastname."),
    email: Yup.string().email().required("Enter an email."),
    userType: Yup.string()
    .notOneOf(["Select an option"], "Please select a user role")
    .required("Required"),
})