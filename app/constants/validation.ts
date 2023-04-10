import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  iin: yup
    .string()
    .typeError("only_numbers")
    .length(12, "twelve_symbols")
    .required("must_be"),
  password: yup.string().required("must_be"),
  // checkbox: yup.boolean(),
});

export const ForgetSchema = yup.object().shape({
  iin: yup
    .string()
    .typeError("only_numbers")
    .length(12, "twelve_symbols")
    .required("must_be"),
  email: yup.string().max(255).email("invalid_email").required("must_be"),
});
