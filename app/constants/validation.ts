import * as yup from "yup";
import { mixed } from "yup";

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
export const AddEnvFacSchema = yup.object().shape({
  doc: mixed().test("file", "must_field", (doc) => {
    if (doc?.length > 0) {
      return true;
    }
    return false;
  }),
  place: yup.string().required("must_field"),
  env_fac_type_id: yup.string().required("must_field"),
  name: yup.string().required("must_field"),
  info: yup.string().required("must_field"),
});

export const AddPlanScheduleSchema = yup.object().shape({
  object_card_id: yup.number().required("must_field"),
  chech_reason: yup.string().required("must_field"),
  date_from: yup.date().required("must_field"),
  date_to: yup
    .date()
    .when(
      "date_from",
      (date_from, schema) => date_from && schema.min(date_from, "must_be_later")
    )
    .required("must_field"),
  file: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),

  production_name: yup.string().required("must_field"),
});

export const CreateCheckReport = yup.object().shape({
  handbook_accounting_act_id: yup.string().required("must_field"),
  handbook_dsek_agreement_id: yup.string().required("must_field"),
  handbook_nca_name_id: yup.string().required("must_field"),
  handbook_object_section_id: yup.string().required("must_field"),
  object_type: yup.string().required("must_field"),
});

export const AddPermitDocumentSchema = yup.object().shape({
  number: yup.string().required("must_field"),
  doc: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
});
export const AddMedCheckDocumentSchema = yup.object().shape({
  doc: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
});
export const AddMedCheckUserSchema = yup.object().shape({
  fio: yup.string().required("must_field"),
});
export const AddCameralControlSchema = yup.object().shape({
  name: yup.string().required("must_field"),
  number: yup.number().typeError("only_numbers").required("must_field"),
  status: yup.string().required("must_field"),
  documents: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
});
export const AddLabTestSchema = yup.object().shape({
  lsam_type_id: yup.string().required("must_field"),
  protocol_name_ru: yup.string().required("must_field"),
  protocol_number: yup
    .number()
    .typeError("only_numbers")
    .required("must_field"),
  documents: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
  from_date: yup.date().required("must_field"),
});
export const AddProductControlDocumentSchema = yup.object().shape({
  doc: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
});

export const AddPlannedChecksDocumentSchema = yup.object().shape({
  doc: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
  date_from: yup.string().required("must_field"),
  protocol_number: yup.string().required("must_field"),
  protocol_name: yup.string().required("must_field"),
});

export const EditReportErcpfwcs = yup.object().shape({
  organization_iin_bin: yup
    .string()
    .typeError("only_numbers")
    .length(12, "twelve_symbols")
    .required("must_be"),

  check_organization_bin: yup
    .string()
    .typeError("only_numbers")
    .length(12, "twelve_symbols")
    .required("must_be"),
});

export const EditPlanScheduleSchema = yup.object().shape({
  codeProduct: yup.string().required("must_field"),
  nameByCode: yup.string().required("must_field"),
  nameByProduct: yup.string().required("must_field"),
  epidemic: yup.string().required("must_field"),
  countryCode: yup.string().required("must_field"),
  nameCountry: yup.string().required("must_field"),
  manufacturer: yup.string().required("must_field"),
  manufacturerAdress: yup.string().required("must_field"),
  batchNumber: yup.string().required("must_field"),
  dateOfManufacture: yup.string().required("must_field"),
  bestBeforeDate: yup.string().required("must_field"),
});

export const checkPlanScheduleSchema = yup.object().shape({
  codeProduct: yup.string().required("must_field"),
  nameByCode: yup.string().required("must_field"),
  nameByProduct: yup.string().required("must_field"),
  epidemic: yup.string().required("must_field"),
  countryCode: yup.string().required("must_field"),
  nameCountry: yup.string().required("must_field"),
  manufacturer: yup.string().required("must_field"),
  manufacturerAdress: yup.string().required("must_field"),
  batchNumber: yup.string().required("must_field"),
  dateOfManufacture: yup.string().required("must_field"),
  bestBeforeDate: yup.string().required("must_field"),
});
export const AddHandbookSchema = yup.object().shape({});
export const EditHandbookSchema = yup.object().shape({
  roles: yup
    .array()
    .min(1, "must_be")
    .test({
      name: "rolse",
      test: (value) => {
        if (value && value[0]) return true;
        else return false;
      },
      message: "must_be",
    })
    .required("must_be"),
  sections: yup
    .array()
    .min(1, "must_be")
    .test({
      name: "rolse",
      test: (value) => {
        if (value && value[0]) return true;
        else return false;
      },
      message: "must_be",
    })
    .required("must_be"),
});

export const AddUserSchema = yup.object().shape({
  first_name: yup.string().max(255).required("must_be"),
  last_name: yup.string().max(255).required("must_be"),
  iin: yup
    .string()
    .typeError("only_numbers")
    .length(12, "twelve_symbols")
    .required("must_be"),
  email: yup.string().max(255).email("invalid_email").required("must_be"),
  password: yup
    .string()
    .min(8, "8_symbols")
    .max(30, "30_symbols")
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, "only_latin")
    .required("must_be"),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "wrong_confirm_pass")
    .required("must_be"),
});

export const ChangePasswordSchema = yup.object().shape({
  old_password: yup.string().max(255).required("must_be"),
  password: yup
    .string()
    .min(8, "8_symbols")
    .max(30, "30_symbols")
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, "only_latin")
    .required("must_be"),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "wrong_confirm_pass")
    .required("must_be"),
});

export const AddEmergencySchema = yup.object().shape({
  note: yup.string().required("must_field"),
  date: yup.string().required("must_field"),
  documents: mixed().test("file", "must_field", (doc) => {
    if (doc.length > 0) {
      return true;
    }
    return false;
  }),
});

export const GetDocumentMonitoringSchema = yup.object().shape({
  user: yup.string().required("must_field"),
});

export const EditCheckListSchema = yup.object().shape({
  checks: yup.array(
    yup.object({
      correspond: yup.mixed().when("mandatory", {
        is: (value: any) => value !== null && value !== 0,
        then: yup.mixed().required("select_option"),
      }),
    })
  ),
});

export const GetDocumentObjectSchema = yup.object().shape({
  // region: yup.string().required("must_field"),
});
export const AddControlPurchaseSchema = yup.object().shape({
  production_code: yup.string().required("must_field"),
  code_name: yup.string().required("must_field"),
  production_name: yup.string().required("must_field"),
  date_from: yup.date().required("must_field"),
  date_to: yup
    .date()
    .when(
      "date_from",
      (date_from, schema) => date_from && schema.min(date_from, "must_be_later")
    )
    .required("must_field"),
  object_card_id: yup.number().required("must_field"),
  chech_reason: yup.string().required("must_field"),
  document: mixed().test("file", "must_field", (doc) => {
    if (doc?.length > 0) {
      return true;
    }
    return false;
  }),
});

export const AddActStartSchems = yup.object().shape({
  number: yup.number().typeError("only_numbers").required("must_field"),
  date: yup.date().required("must_field"),
  registered_government: yup.string().required("must_field"),
  registered: yup.string().required("must_field"),
  legal_grounds: yup.string().required("must_field"),
  handbook_department_id: yup.string().required("must_field"),
  handbook_check_reason_id: yup.string().required("must_field"),
  act_signs: yup
    .array(
      yup.object({
        value: yup.number().required("must_field"),
        label: yup.string().required("must_field"),
      })
    )
    .min(1, "must_field")
    .typeError("must_field")
    .required("must_field"),
  responsibles: yup.array(
    yup.object({
      position: yup.string().required("must_field"),
      user_id: yup
        .object({
          value: yup.number().required("must_field"),
          label: yup.string().required("must_field"),
        })
        .required("must_field"),
    })
  ),
  specialists: yup.array(
    yup.object({
      position: yup.string().required("must_field"),
      user_id: yup
        .object({
          value: yup.number().required("must_field"),
          label: yup.string().required("must_field"),
        })
        .required("must_field"),
    })
  ),
});
export const AddReportWaterSchema = yup.object().shape({
  number: yup.number().typeError("only_numbers").required("must_field"),
  date: yup.date().required("must_field"),
  registered_government: yup.string().required("must_field"),
  legal_grounds: yup.string().required("must_field"),
  handbook_department_id: yup.string().required("must_field"),
  handbook_check_reason_id: yup.string().required("must_field"),
  act_signs: yup.array().min(1, "must_field"),
});
export const EditReportWaterSchema = yup.object().shape({
  sampling_goal: yup.string().required("must_field"),
  sampling_date: yup.date().required("must_field"),
  expiration_date_start: yup.date().required("must_field"),
  expiration_date_end: yup
    .date()
    .when(
      "expiration_date_start",
      (expiration_date_start, schema) =>
        expiration_date_start &&
        schema.min(expiration_date_start, "must_be_later")
    )
    .required("must_field"),
  delivery_date: yup.date().required("must_field"),
  hnd_id: yup.string().required("must_field"), // Handbook nd selection method
  htc_id: yup.string().required("must_field"), // Handbook transport method
  hsc_id: yup.string().required("must_field"), // Handbook storage method
  mark: yup.string().required("must_field"),
  hwcm_id: yup.string().required("must_field"), // Handbook water containment method
  additional_details: yup.string().required("must_field"),
  witness_info: yup.string().required("must_field"),
  additionals: yup
    .array(
      yup.object({
        registered_sample_number: yup.string().required("must_field"),
        selected_samples_list: yup.string().required("must_field"),
        sample_volume: yup.string().required("must_field"),
        packaging_type_and_seal_number: yup.string().required("must_field"),
      })
    )
    .required("must_field"),
  u_id: yup
    .object({
      value: yup.number().required("must_field"),
      label: yup.string().required("must_field"),
    })
    .required("must_field"), // User
  act_amount: yup.number().typeError("only_numbers").required("must_field"),
});

export const SubmitReportSchema = yup.object().shape({
  receiver_id: yup.string().required("must_field"),
});

export const FormCheckSchema = yup.object().shape({
  object_card_id: yup.string().required("must_field"),
  handbook_check_reason_id: yup.string().required("must_field"),
  date_from: yup.date().required("must_field"),
  date_to: yup
    .date()
    .when(
      "date_from",
      (date_from, schema) => date_from && schema.min(date_from, "must_be_later")
    )
    .required("must_field"),
});
