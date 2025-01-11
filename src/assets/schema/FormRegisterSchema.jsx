import * as Yup from 'yup';


export const FormRegisterSchema = Yup.object().shape({
    Username: Yup.string().required("Ad daxil edin!"),
    Email: Yup.string().email("Email duzgun yazilmayib!").required("Email daxil edin!"),
    Logemail: Yup.string().email("Email duzgun yazilmayib!").required("Email daxil edin!"),
    Password: Yup.string().required("Passord daxil edin!"),
    Logpassword: Yup.string().required("Passord daxil edin!"),
    number: Yup.number().required("Nomre daxil edin!").positive("Musbet eded daxil edin!").integer("Tam eded daxil edin!"),
    term: Yup.boolean().oneOf([Yup.ref("true")], "Oxuyub tesdiq edin!")
})