import { IRole } from "../types/types";

export interface ILogin {
  iin: number;
  password: string;
  remember: false | true;
}
export interface ILoginForget {
  iin: number;
  email: string;
}

export interface IBreadscrumb {
  breadscrumb1?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb2?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb3?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb4?: {
    title: string;
    link?: string;
    current?: boolean;
  };
}
export interface IPurchase {
  codeProduct: string;
  object: string;
  subObject: string;
  examination: string;
  dateFrom: string;
  dateTo: string;
}

export interface IPermissions {
  id: number;
  slug: string;
  name: string;
  name_ru?: string;
  name_kk?: string;
}

export interface IEditProduct {
  codeProduct: string;
  nameByCode: string;
  nameByProduct: string;
  epidemic: string;
  countryCode: string;
  nameCountry: string;
  manufacturer: string;
  manufacturerAdress: string;
  batchNumber: string;
  dateOfManufacture: string;
  bestBeforeDate: string;
}

export interface ICheckProduct {
  codeProduct: string;
  nameByCode: string;
  nameByProduct: string;
  epidemic: string;
  countryCode: string;
  nameCountry: string;
  manufacturer: string;
  manufacturerAdress: string;
  batchNumber: string;
  dateOfManufacture: string;
  bestBeforeDate: string;
}

export interface IAddNewHandbook {
  name: string;
  columns: {
    name: string;
    handbook_column_id: number;
    handbook_entry_id: number;
    parent_id: number;
    id?: number;
  }[];
  id: number;
  description: string;
  roles?: Array<IRole>;
  sections?: Array<number>;
}

export interface IAddRole {
  name_ru: string;
  permission_ids: string[];
}
export interface IAddUser {
  last_name: string;
  first_name: string;
  middle_name: string;
  iin: number;
  handbook_department_id: string;
  email: string;
  role_id: number;
  password: string;
  repeat_password: string;
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
export interface IHandbooksEntries {
  handbook_entry_id: number;
  id: number;
  parent_id?: number;
  value_kk?: string;
  value_ru?: string;
}
export interface IHandbooksColumns {
  handbook_entry_values: Array<IHandbooksEntries>;
  id: number;
  name_kk?: string;
  name_ru?: string;
}
export interface IHandbookSingleEntryValue {
  handbook_column_id: number;
  handbook_entry_id: number;
  id: number;
  parent_id: number;
  value_kk: string;
  value_ru: string;
}
export interface IHandbookEntryValues {
  id: number;
  handbook_entry_values: Array<IHandbookSingleEntryValue>;
}
export interface IHandbookSingle {
  handbook_columns: Array<IHandbooksColumns>;
  handbook_entries: Array<IHandbookEntryValues>;
  id: number;
  name_kk?: string;
  name_ru?: string;
  status: string;
  roles?: Array<IRole>;
  handbook_menu_sections?: Array<{
    id: number;
    name_ru: string;
    name_kk: string;
  }>;
  // un_editable: null;
}
export interface IHandbookProductions {
  id: number;
  name_kz: string;
  category: string;
  name_ru: string;
  handbook_epid_sign_level: IhandbookEpidSignLevel;
}
export interface IHandbookKatos {
  code: string;
  id: number;
  name_kz: string;
  name_ru: string;
  children: [
    {
      children: Array<string>;
      code: string;
      handbook_epid_sign_level: IhandbookEpidSignLevel;
      id: number;
      name_kz: null;
      name_ru: string;
    }
  ];
}
export interface IUser {
  avatar: string;
  blocked_at: string;
  department: { id: number; name_ru: string; name_kk: string };
  email: string;
  first_name: string;
  id: number;
  iin: number;
  last_name: string;
  middle_name: string;
  role: IRole;
  created_at: string;
  login: string;
}

export interface IAddActInfo {
  number: string;
  date: string;
  fio: string;
  subject_name: string;
  reason_of_check: string;
  date_range_of_check: string;
  period: string;
}

export interface IAddActCheck {
  registered_government: string;
  number: number;
  date: string;
  registered: string;
  handbook_department_id: number;
  handbook_check_reason_id: number;
  check_detail_id: number;
  legal_grounds: string;
  act_sign: string;
  responsibles: {
    user_id: number;
    position: string;
  }[];
  specialists: {
    user_id: number;
    position: string;
  }[];
  act_signs: number[];
  status?: string;
}

export interface IEditCheckMainInfo {
  registration_subject_act_number: string;
  // period: string;
  act_date: string;
  hd_id: string;
  department_level: string;
  appeal_number: string;
  gov_lvl: string;
  number_of_urpa: string;
  check_type: string;
  check_subject: string;
  legal_basis_for_check: string;
  handbook_check_reason_id?: string;
  // iin: number;
  check_grounds: string;
  // name_check_object: string;
  // name_check_subject: string;
  verification_period: string;
  fio_and_work_position_of_check_person: string;
  // check_place: string;
  details_on_extra_for_check: string;
}
export interface IEditNonProductMainInfo {
  production_code: string;
  code_name: string;
  production_name: string;
  date_from: string;
  date_to: string;
  country_code: string;
  country_name: string;
  manufacturer: string;
  batch_number: string;
  manufacture_date: string;
  expiration_date: string;
  supplier_name: string;
  supplier_address: string;
}

export interface IEditNonProductTakenMeasures {
  object_of_trade_date: Date;
  object_of_trade_number: string;
  object_of_trade_identified_violations: string;
  object_of_trade_fine: string;
  object_of_trade_article: string;
  object_of_trade_fine_sum: string;
  object_of_trade_to_whom: string;
  object_of_trade_withdrawn: string;
  object_of_trade_returned: string;
  object_of_trade_destroyed: string;
  supplier_date: Date;
  supplier_number: string;
  supplier_identified_violations: string;
  supplier_fine: string;
  supplier_article: string;
  supplier_fine_sum: string;
  supplier_to_whom: string;
  supplier_withdrawn: string;
  supplier_returned: string;
  supplier_destroyed: string;
  status: string;

  object_of_trade_file: string;
  supplier_file: string;
}

export interface IAddCheckList {
  checks: {
    name: string;
    id: number;
  }[];
}
export interface IAddRecommendation {
  recommendation: string;
}
export interface IEditCheckList {
  checks: {
    id: number;
    mandatory: string;
    correspond: string;
    does_not_correspond: string;
    recommendation: string;
  }[];
}
export interface ICheckList {
  id: number;
  name: string;
}
export interface IFormSubjectAndObject {
  fio: string;
  object: string;
  date_range: string;
}

export interface IAddSubjectForCheck {
  date_from: string;
  date_to: string;
  object_card_id: number;
  handbook_check_reason_id: number;
  documents: Array<IDocument>;
  confirmed_complaint: string;
}
export interface IDocument {
  id: number;
  doc: string;
  name: string;
  created_at: string;
}
export interface ICameralControl {
  date_of_issue: string;
  documents: Array<IDocument>;
  id: number;
  name: string;
  number: number;
  status: string;
}
export interface ICarriedOutChecks {
  id: number;
  act_date: string;
  inspection_act_issue_date: string;
  check_period: { from: string; to: string };
  date: string;
  documents: {
    inspection_act: Array<IDocument>;
    inspection_list: Array<IDocument>;
    result: Array<IDocument>;
  };
}
export interface IHandbookEpidSign {
  id: number;
  name_kk: string;
  name_ru: string;
  handbook_epid_sign_level: IhandbookEpidSignLevel;
  handbook_okeds: Array<IHandbookOkeds>;
}
export interface ISystemHandbook {
  id: number;
  name_ru?: string;
  code?: string;
  parent_id?: number;
  country_name?: string;
  country_code?: string;
  handbook_oked_id?: string;
  handbook_risk_degree_id?: string;
  manufacturer?: number;
  level_of_epid_sign_catalog_id: number;
  handbook_epid_sign_level?: {
    id: number;
    name_kk: string;
    name_ru: string;
  };
  object_card_id: string;
  handbook_epid_sign_level_id: string;
  name: string;
  points: string;
  created_at: string;
  handbook_oked: {
    code: string;
    id: number;
    name_kz: string;
    name_ru: string;
  };
  handbook_risk_degree: { id: number; name: string; points: string };
  updated_at: string;
}
export interface IhandbookEpidSignLevel {
  id: number;
  name_kk: string;
  name_ru: string;
}
export interface IHandbookOkeds {
  children: [
    {
      children: Array<string>;
      code: string;
      handbook_epid_sign_level: IhandbookEpidSignLevel;
      handbook_epid_sign: { id: number; name_kz: string; name_ru: string };
      handbook_risk_degree: {
        created_at: string;
        id: number;
        name: string;
        updated_at: string;
      };
      handbook_oked_type: string;
      id: number;
      name_kz: null;
      name_ru: string;
    }
  ];

  code: string;
  handbook_oked_type: string;
  handbook_epid_sign_level: IhandbookEpidSignLevel;
  handbook_epid_sign: { id: number; name_kz: string; name_ru: string };
  handbook_risk_degree: {
    created_at: string;
    id: number;
    name: string;
    updated_at: string;
  };
  id: number;
  name_kz: string;
  name_ru: string;
}
export interface IPlannedChecks {
  check_act: ICheckAct;
  date_from: string;
  date_to: string;
  confirmed_complaints: Array<IDocument>;
  id: number;
}
export interface IProductionControls {
  description_kk: string;
  description_ru: string;
  id: number;
  name_kk: string;
  name_ru: string;
  production_controls: Array<{
    documents: Array<IDocument>;
    id: number;
  }>;
}
export interface IHandbookOkedId {
  children: Array<{
    children: Array<string>;
    code: string;
    handbook_epid_sign_level: IhandbookEpidSignLevel;
    id: number;
    name_kz: string;
    name_ru: string;
  }>;

  code: string;
  handbook_epid_sign_level: IHandbookSingleEntryValue;
  id: number;
  name_kz: string;
  name_ru: string;
}
export interface IComplianceClass {
  correspond_total: number;
  first_class: number;
  fourth_class: number;
  not_correspond_total: number;
  second_class: number;
  third_first_class: number;
  third_forth_class: number;
  third_second_class: number;
  third_third_class: number;
}
export interface IGeneralInfo {
  availability_of_personal_protective_equipment: {
    correspond: number;
    id: number;
    not_correspond: number;
  };
  certified_total_amount: number;
  in_hazardous_workplace: number;
  in_hazardous_workplace_woman: number;
  indicators_of_harmfulness_and_danger: {
    compliance_class: IComplianceClass;
    id: number;
  };
  intensity_of_labor_process: {
    action_time: number;
    actual_work_hours: number;
    auditory_analyzer_load: number;
    compliance_class: IComplianceClass;
    focused_observation_activities: number;
    function_distribution: number;
    id: number;
    life_risk_degree: number;
    msvt_alpha_type: number;
    msvt_terminal_type: number;
    optical_device_work: number;
    other_life_responsibility_degree: number;
    production_facilities_number: number;
    rb_breaks_and_duration: number;
    rb_duration: number;
    responsibility_degree: number;
    shift_work: number;
    signal_and_message_density: number;
    signal_evaluation: number;
    size_of_difference: number;
    spt__duration: number;
    spt_element_number: number;
    total_rating: number;
    voice_box_load: number;
    work_content: number;
    work_env_monotony: number;
    work_performed_type: number;
  };
  profession_name: string;
  safety: {
    correspond: number;
    id: number;
    not_correspond: number;
  };
  severity_of_labor_process: {
    compliance_class: IComplianceClass;
    horizontally: number;
    hull_slopes: number;
    id: number;
    lamw_whole_work_shift: number;
    lamw_with_other_work: number;
    meh_from_floor: number;
    meh_from_work_surface: number;
    moving_cargo_five_meter: number;
    moving_cargo_from_one_to_five_meter: number;
    moving_cargo_one_meter: number;
    total_rating: number;
    vertically: number;
    with_body_and_leg_muscles: number;
    with_both_hands: number;
    with_local_load: number;
    with_one_hand: number;
    with_regional_load: number;
    work_pose: number;
  };
  shop_area: string;
  total_amount_of_workers: number;
  total_amount_of_workers_woman: 42;
  work_position: string;
  workspace_code: string;
}
export interface IReportErcpfwcs {
  check_organization_address: {
    check_date: string;
    check_organization_bin: string;
    check_organization_building_number: string;
    check_organization_full_name: string;
    check_organization_office_number: string;
    check_organization_street: string;
  };
  check_organization_information: {
    check_organization_bin: string;
    check_organization_full_name: string;
  };
  general_info: IGeneralInfo;
  organization_information: {
    office_number: string;
    organization_full_name: string;
    organization_iin_bin: string;
    street: string;
    building_number: string;
    handbook_oked_id: IHandbookOkedId;
  };
  id: number;

  building_number: string;
  certified_total_amount: number;
  check_date: string;
  check_organization_bin: string;
  check_organization_building_number: string;
  check_organization_full_name: string;
  check_organization_office_number: string;
  check_organization_street: string;
  in_hazardous_workplace: number;
  in_hazardous_workplace_woman: number;
  office_number: string;
  organization_full_name: string;
  organization_iin_bin: string;
  profession_name: string;
  shop_area: string;
  street: string;
  total_amount_of_workers: number;
  total_amount_of_workers_woman: number;
  work_position: string;
  workspace_code: string;
  handbook_oked_id: IHandbookOkedId;
}
export interface IProductEnvironmentFactor {
  pef_name: {
    name: string;
  };
  id: number;
  cc: {
    correspond_total: number;
    first_class: number;
    fourth_class: number;
    not_correspond_total: number;
    second_class: number;
    third_first_class: number;
    third_forth_class: number;
    third_second_class: number;
    third_third_class: number;
  };
  acceptance_metric: {
    actual_value: string;
    max_permissible_con: string;
    max_permissible_level: string;
  };
}
export interface IReportLsrpfs {
  general_info: {
    profession_name: string;
    shop_area: string;
    work_position: string;
    workspace_code: string;
  };
  id: number;
  production_environment_factors: Array<IProductEnvironmentFactor>;
}
export interface IReportWdmsrs {
  id: number;
  general_info: {
    number_of_workplaces: number;
    profession_name: string;
    reason_for_non_compliance: string;
    safety_source: string;
    shop_area: string;
    work_position: string;
    workspace_code: string;
  };
}
export interface IReportWnpscsfpees {
  administrator: {
    first_name: string;
    iin: number;
    last_name: string;
    surname: string;
    work_position: string;
  };
  general_info: {
    non_compliance_reason: string;
    number_of_workplaces: number;
    personal_protective_equipment_name: string;
    profession_name: string;
    shop_area: string;
    work_position: string;
    workspace_code: string;
  };
  id: number;
  labor: {
    ecp: string;
    first_name: string;
    iin: number;
    last_name: string;
    surname: string;
    work_position: string;
  };
  supervisor: {
    first_name: string;
    iin: number;
    last_name: string;
    surname: string;
    work_position: string;
  };
}
export interface IUnscheduledChecks {
  act_date: string;
  check_period_from: string;
  check_period_to: string;
  date: string;
  id: number;
  inspection_act_issue_date: string;
}
export interface IObjectAddress {
  apartment: string;
  country: string;
  district: string;
  house: string;
  id: number;
  locality: string;
  region: string;
  street: string;
}
export interface IPermitDocuments {
  date_of_issue: string;
  documents: Array<IDocument>;
  id: number;
  status: string;
  unique_number: string;
}
export interface ILsam {
  documents: Array<IDocument>;
  from_date: string;
  id: number;
  lsam_type: {
    id: number;
    name_kk: string;
    name_ru: string;
  };
  protocol_name_kk: string;
  protocol_name_ru: string;
  protocol_number: number;
}
export interface IMedCheck {
  date_of_issue: string;
  docs: Array<IDocument>;
  id: number;
  fio: string;
}
export interface IEnvFac {
  date: string;
  additional_documentation: Array<IDocument>;
  id: number;
  env_fac_type: {
    id: number;
    name: string;
  };
  info: string;
  location: string;
  name: string;
}
export interface ILogs {
  action_end_date: string;
  action_origin_kk: string;
  action_origin_ru: string;
  action_start_date: string;
  category: string;
  description: string;
  id: number;
  ip: string;
  user: IUser;
}

export interface INotifications {
  created_at: string;
  id: string;
  data: {
    text: string;
    unscheduled_check_id: number;
    planned_check_id: number;
  };
  read_at: string;
}
export interface IEmergencySituations {
  documents: Array<IDocument>;
  id: number;
  note: string;
  date: string;
}
export interface IObject {
  acc_and_rep_docs: [];
  cameral_controls: Array<ICameralControl>;
  carried_out_checks: Array<ICarriedOutChecks>;
  category: number;
  conf_event_docs: Array<string>;
  handbook_epid_signs: Array<string>;
  handbook_katos: Array<IHandbookKatos>;
  product_compliances: Array<{
    id: number;
    doc: IDocument;
  }>;
  report_and_audits: Array<{
    id: number;
    doc: IDocument;
  }>;
  code: string;
  handbook_epid_sign_level: IhandbookEpidSignLevel;
  id: number;
  handbook_oked_name_kz: string;
  handbook_oked_name_ru: string;
  handbook_productions: Array<string>;
  iin_bin: string;
  info_on_prod_controls: Array<string>;
  info_scheme_docs: Array<string>;
  liquidation_date: string;
  lsams: Array<ILsam>;
  object_address: Array<IObjectAddress>;
  user: IUser;
  emergency_situations: Array<IEmergencySituations>;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  legal_status: string;
  organization_form: string;
  phone: string;

  permit_documents: Array<IPermitDocuments>;
  planned_checks: Array<IPlannedChecks>;
  production_controls: Array<IProductionControls>;
  registration_date: string;
  report_ercpfwcs: Array<IReportErcpfwcs>;
  report_lsrpfs: Array<IReportLsrpfs>;
  report_wdmsrs: Array<IReportWdmsrs>;
  report_wnpscsfpees: Array<IReportWnpscsfpees>;
  safety_and_prod_conf_docs: Array<string>;
  ul_ip_name_kk: string;
  ul_ip_name_ru: string;
  unscheduled_checks: Array<IUnscheduledChecks>;
  medical_examinations: Array<IMedCheck>;
}

export interface IDocumentsList {
  status: string;
  unique_number: string;
  id: number;
  date_of_issue: string;
  documents: Array<IDocument>;
  object_cards: Array<{
    id: number;
    ul_ip_name_kk: string;
    ul_ip_name_ru: string;
  }>;
}

export interface IAddProductControlDocument {
  doc: string;
  // name: string;
  // production_control_type_id: number;
  // object_id: number;
}

export interface IAddPlannedChecksDocument {
  doc: string;
  protocol_name: string;
  protocol_number: string;
  date_from: number;
}

export interface IAddPermitDocument {
  doc: string;
  date: string;
  number: number;
}

export interface IAddMedCheckUser {
  fio: string;
}

export interface IAddLsam {
  protocol_name_ru: string;
  protocol_name_kk: string;
  protocol_number: number;
  from_date: string;
  lsam_type_id: number;
  documents: Array<IDocument>;
}
export interface IAddCameral {
  name: string;
  number: number;
  date_of_issue: string;
  status: string;
  documents: Array<IDocument>;
}

export interface IAddEmergency {
  note: string;
  documents: Array<IDocument>;
  date: string;
}

export interface IAddMedCheckDocument {
  doc: string;
}

export interface IAddReport {
  report_id: string;
  object_card_id: string;
}

export interface IAddCheckReport {
  check_act_id: number;
  handbook_accounting_act_id: number;
  handbook_dsek_agreement_id: number;
  handbook_nca_name_id: number;
  handbook_object_section_id: number;
  object_type: string;
}
export interface IEditCheckReport {
  sampling_goal: string;
  sampling_date: string;
  expiration_date_start: string;
  expiration_date_end: string;
  delivery_date: string;
  hnd_id: string; // Handbook nd selection method
  htc_id: string; // Handbook transport method
  hsc_id: string; // Handbook storage method
  mark: string;
  hwcm_id: string; // Handbook water containment method
  additional_details: string;
  witness_info: string;
  u_id: string; // User
  act_amount: string;
  additionals: {
    id: number;
    registered_sample_number: string;
    selected_samples_list: string;
    sample_volume: string;
    packaging_type_and_seal_number: string;
    wsa_id: number;
  }[];
  additional_ids: Array<number>;
  status?: string;
}

export interface IAgreeReport {
  receiver_id: string;
}
export interface ISendEditReport {
  comment: string;
}

export interface IAddEnvironmentalFactor {
  doc: string;
  name: string;
  date: number;
  place: string;
  info: string;
  env_fac_type_id: number;
}
export interface IAddObject {
  file: string;
  type: string;
}

export interface IEditReport {
  status: string;
  description: string;
}

export interface IAccountNumber {
  date_of_issue: string;
  id: number;
  object_account_number: string;
  owner_name: string;
  production_object_location: string;
  production_object_name: string;
  service_recipient_name: string;
  other_information: string;
}

export interface IEditAccountNumber {
  reason: string;
  name: string;
}

export interface IEditReportErcpfwcs {
  object_card_id: number;
  organization_iin_bin: number;
  organization_full_name: string;
  street: string;
  building_number: string;
  office_number: string;
  handbook_oked_id: number;
  check_organization_bin: string;
  check_organization_full_name: string;
  check_organization_street: string;
  check_organization_building_number: string;
  check_organization_office_number: string;
  check_date: string;
  total_amount_of_workers: number;
  in_hazardous_workplace: number;
  total_amount_of_workers_woman: number;
  in_hazardous_workplace_woman: number;
  workspace_code: string;
  profession_name: string;
  work_position: string;
  shop_area: string;
  certified_total_amount: number;
  prod_env_factor: {
    cc: {
      first_class: number;
      second_class: number;
      third_first_class: number;
      third_second_class: number;
      third_third_class: number;
      third_forth_class: number;
      fourth_class: number;
      correspond_total: number;
      not_correspond_total: number;
    };
  };
  protect_equip_access: {
    correspond: number;
    not_correspond: number;
  };
  injury_risk: {
    correspond: number;
    not_correspond: number;
  };
  labor_process_severity: {
    cc: {
      first_class: number;
      second_class: number;
      third_first_class: number;
      third_second_class: number;
      third_third_class: number;
      third_forth_class: number;
      fourth_class: number;
      correspond_total: number;
      not_correspond_total: number;
    };
    moving_cargo_one_meter: number;
    moving_cargo_from_one_to_five_meter: number;
    moving_cargo_five_meter: number;
    lamw_with_other_work: number;
    lamw_whole_work_shift: number;
    meh_from_work_surface: number;
    meh_from_floor: number;
    with_local_load: number;
    with_regional_load: number;
    with_one_hand: number;
    with_both_hands: number;
    with_body_and_leg_muscles: number;
    work_pose: number;
    hull_slopes: number;
    horizontally: number;
    vertically: number;
    total_rating: number;
  };
  labor_process_intensity: {
    cc: {
      first_class: number;
      second_class: number;
      third_first_class: number;
      third_second_class: number;
      third_third_class: number;
      third_forth_class: number;
      fourth_class: number;
      correspond_total: number;
      not_correspond_total: number;
    };
    work_content: number;
    signal_evaluation: number;
    function_distribution: number;
    work_performed_type: number;
    focused_observation_activities: number;
    signal_and_message_density: number;
    production_facilities_number: number;
    size_of_difference: number;
    optical_device_work: number;
    msvt_alpha_type: number;
    msvt_terminal_type: number;
    auditory_analyzer_load: number;
    voice_box_load: number;
    responsibility_degree: number;
    life_risk_degree: number;
    other_life_responsibility_degree: number;
    spt_element_number: number;
    spt__duration: number;
    action_time: number;
    work_env_monotony: number;
    actual_work_hours: number;
    shift_work: number;
    rb_breaks_and_duration: number;
    rb_duration: number;
    total_rating: number;
  };
}

export interface IEditReportLsrpfs {
  object_card_id: number;
  workspace_code: string;
  profession_name: string;
  work_position: string;
  shop_area: string;
  pefs: [
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: 13;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: 14;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    },
    {
      pef_name_id: number;
      cc: {
        first_class: number;
        second_class: number;
        third_first_class: number;
        third_second_class: number;
        third_third_class: number;
        third_forth_class: number;
        fourth_class: number;
        correspond_total: number;
        not_correspond_total: number;
      };
      acceptance_metric: {
        max_permissible_con: string;
        max_permissible_level: string;
        actual_value: string;
      };
    }
  ];
}

export interface IEditReportWdmsr {
  object_card_id: number;
  workspace_code: string;
  profession_name: string;
  work_position: string;
  shop_area: string;
  number_of_workplaces: number;
  safety_source: string;
  reason_for_non_compliance: string;
}

export interface IEditReportWnpscsfpees {
  workspace_code: string;
  profession_name: string;
  work_position: string;
  shop_area: string;
  number_of_workplaces: number;
  personal_protective_equipment_name: string;
  non_compliance_reason: string;
  supervisor_iin: string;
  supervisor_surname: string;
  supervisor_first_name: string;
  supervisor_last_name: string;
  supervisor_work_position: string;
  administrator_iin: string;
  administrator_surname: string;
  administrator_first_name: string;
  administrator_last_name: string;
  administrator_work_position: string;
  labor_iin: string;
  labor_surname: string;
  labor_first_name: string;
  labor_last_name: string;
  labor_work_position: string;
  object_card_id: number;
}
export interface IHandbookCnfea {
  children: [
    {
      children: Array<string>;
      code: string;
      handbook_epid_sign_level: IhandbookEpidSignLevel;
      id: number;
      name_kz: null;
      name_ru: string;
    }
  ];
  code: string;
  id: number;
  name_kk: string;
  name_ru: string;
  parent: string;
}
export interface IHandbookUlpsss {
  country_code: string;
  country_name: string;
  id: number;
  manufacturer: string;
}
export interface IProductRegistry {
  handbook_cnfea: IHandbookCnfea;
  handbook_production: IHandbookProductions;
  handbook_ulpsss: IHandbookUlpsss;
}

export interface IChangePassword {
  old_password: string;
  password: string;
  repeat_password: string;
}

export interface IDownloadRegistry {
  date_from?: string;
  date_to?: string;
  user?: Array<number>;
  doc_type_pdf?: string;
  doc_type_xls?: string;
  doc_type_doc?: string;
}

export interface IDownloadRegistryObject {
  date_from?: string;
  date_to?: string;
  region?: number;
}

export interface ICheckReasons {
  id: number;
  name_kk: string;
  name_ru: string;
}

export interface IChecksObjectCard {
  handbook_risk_degree: {
    id: number;
    name: string;
  };
  category: string;
  first_name: string;
  id: number;
  last_name: string;
  middle_name: string;
  object_address: Array<IObjectAddress>;
  oked: IHandbookOkeds;
  ul_ip_name_ru: string;
  ul_ip_name_kk: string;
  iin_bin: string;
}
export interface ICheckList {
  id: number;
  check_list_requirement_id: number;
  mandatory: string;
  correspond: string;
  does_not_correspond: string;
  recommendation: string;
}
export interface ICheckReport {
  additional: any;
  act_amount: string;
  additional_details: string;
  delivery_date: string;
  expiration_date_end: string;
  expiration_date_start: string;
  file_path: string;
  handbook_accounting_act: string;
  handbook_dsek_agreement: string;
  handbook_nca_name: string;
  handbook_nd_selection_method: string;
  handbook_object_section: string;
  handbook_storage_condition: string;
  handbook_transport_condition: string;
  handbook_water_containment_method: string;
  id: number;
  mark: string;
  object_type: string;
  sampling_date: string;
  sampling_goal: string;
  user: string;
  witness_info: string;
}
export interface ICheckAct {
  act_signs: {
    fio: string;
    id: number;
  }[];
  check_detail: {
    act_date: string;
    appeal_number: string;
    check_grounds: string;
    check_subject: string;
    check_type: string;
    department_level: string;
    details_on_extra_for_check: string;
    fio_and_work_position_of_check_person: string;
    handbook_department: string;
    id: number;
    legal_basis_for_check: string;
    number_of_urpa: string;
    registration_subject_act_number: string;
  };
  date: string;
  file_path: string;
  handbook_check_reason: {
    id: number;
    name_kk: string;
    name_ru: string;
  };
  handbook_department: {
    id: number;
    name_kk: string;
    name_ru: string;
  };
  id: number;
  legal_grounds: string;
  number: number;
  object_card: string;
  registered: string;
  registered_government: string;
  responsibles: {
    fio: string;
    id: number;
    position: string;
  }[];
  specialists: {
    fio: string;
    id: number;
    position: string;
  }[];
  additional_acts: { water_sampling_acts: ICheckReport[] };
}
export interface IPlannedChecksList {
  check_lab_results: IResult[];
  check_act: ICheckAct;
  id: number;
  check_detail: { id: number };
  base: Array<IDocument>;
  check_list_names: Array<{
    id: number;
    name: string;
    check_list_requirements: Array<{
      id: number;
      name_kk: string;
      name_ru: string;
      violation_degree: string;
      check_lists: Array<ICheckList>;
    }>;
  }>;
  check_lists: Array<ICheckList>;
  date_from: string;
  date_to: string;
  subject_notified: number;
  object_card: IChecksObjectCard;
}

export interface IUnscheduledChecksList {
  act_date: string;
  check_period_from: string;
  check_period_to: string;
  date: string;
  date_from: string;
  date_to: string;
  id: number;
  inspection_act_issue_date: string;
  subject_notified: number;
  object_card: IChecksObjectCard;
}

export interface ICarriedOutChecksList {
  act_date: string;
  check_period_from: string;
  check_period_to: string;
  date_from: string;
  date_to: string;
  date: string;
  documents: {
    inspection_act: Array<IDocument>;
    inspection_list: Array<IDocument>;
    result: Array<IDocument>;
  };
  id: number;
  inspection_act_issue_date: string;
  object_card: IChecksObjectCard;
}

export interface IDates {
  date_from: string;
  date_to: string;
}

export interface IResult {
  id: number;
  protocol_name: string;
  protocol_number: string;
  date_from: string;
  documents: any[];
}
export interface ICheckLabResults {
  check_lab_results: IResult[];
}

export interface DocumentCheck {
  id: number;
  doc: string;
  name: string;
  created_at: string;
}

export interface PlanCheck {
  id: number;
  date: string;
  description: string;
  documents: DocumentCheck[];
}

export interface ICheckActDocs {
  check_act_docs?: PlanCheck[];
}

export interface IAddControlPurchase {
  production_code: number;
  code_name: string;
  production_name: string;
  date_from: string;
  date_to: string;
  object_card_id: number;
  chech_reason: string;
  file: string;
}

export interface IControlPurchase {
  code_name: string;
  cps_detail: {
    batch_number: number;
    country_code: number;
    country_name: string;
    expiration_date: string;
    id: number;
    manufacture_date: string;
    manufacturer: string;
    supplier_address: string;
    supplier_name: string;
    check_reason: string;
    documents: {
      created_at: string;
      doc: string;
      id: number;
      name: string;
      table_column_name: string;
    }[];
  };
  cps_results: {
    document: IDocument[];
    id: number;
    result: string;
    date_from: string;
    date_to: string;
  }[];
  date_from: string;
  date_to: string;
  id: number;
  finished: number;
  object_card: {
    object_address: Array<IObjectAddress>;
    ul_ip_name_kk: string;
    ul_ip_name_ru: string;
  };
  production_code: number;
  production_name: string;
}

export interface IEditControlPurchase {
  production_code: number;
  code_name: string;
  production_name: string;
  date_from: string;
  date_to: string;
  country_code: number;
  country_name: string;
  manufacturer: string;
  batch_number: number;
  manufacture_date: Date;
  expiration_date: Date;
  check_reason: string;
  check_reason_doc: string;
  file_act: string;
  supplier_name: string;
  supplier_address: string;
}
export interface IAddControlResultDocument {
  date_from: string;
  date_to: string;
  result: string;
  document: string;
  control_purchase_schedule_id: number;
}

export interface IAddViolationDocument {
  protocol_name: string;
  date: string;
  npr_violation_type_id: number;
  document: string;
}

export interface IAddMeasureLetter {
  number: string;
  date: string;
  address: string;
}

export interface INprDetail {
  object_test?: any;
  batch_test?: any;
  supplier_test?: any;
  batch_number: string;
  country_code: string;
  country_name: string;
  expiration_date: string;
  id: number;
  manufacture_date: string;
  manufacturer: string;
  supplier_address: string;
  supplier_name: string;
}
export interface IObjectOfTrade {
  article: string;
  date: string;
  destroyed: string;
  fine: string;
  fine_sum: string;
  identified_violations: string;
  number: string;
  returned: string;
  to_whom: string;
  withdrawn: string;
}
export interface INprTakenMeasure {
  documents: Array<{
    created_at: string;
    doc: string;
    id: number;
    name: string;
    table_column_name: string;
  }>;
  id: number;
  object_of_trade: IObjectOfTrade;
  status: string;
  supplier: IObjectOfTrade;
  npr_taken_measure_lettes: Array<{
    address: string;
    created_at: string;
    date: string;
    id: number;
    npr_tm_id: number;
    number: string;
    updated_at: string;
  }>;
}
export interface INprViolationTypes {
  id: number;
  name: string;
}

export interface INprViolations {
  id: number;
  npr_violation_type_id: number;
  protocol_number: string;
  document: Array<IDocument>;
  date: string;
}

export interface INonProduct {
  code_name: string;
  date_from: string;
  date_to: string;
  id: number;
  production_code: string;
  production_name: string;
  npr_detail: INprDetail;
  npr_taken_measure: INprTakenMeasure;
  npr_violation_types: Array<INprViolationTypes>;
  npr_violations: Array<INprViolations>;
  object_card: {
    object_address: Array<IObjectAddress>;
    ul_ip_name_kk: string;
    ul_ip_name_ru: string;
  };
}

export interface IKGDControl {
  departure_country: string;
  goods_declaration_registration_number: string;
  state_revenue_declaration_department: string;
  goods_country_of_origin: string;
  sender_or_and_exporter: string;
  uved: string;
  uved_iin_bin: string;
  uved_legal_address: string;
  goods_code: string;
  goods_name: string;
  goods_description: string;
  goods_weight: string;
  quantity_in_additional_units_of_measurement: string;
  conditional_release_note: string;
}

export interface ICTMRControl {
  fio_and_address: string;
  applicant_iin_bin: string;
  manufacturer_name: string;
  goods_name_ctrm: string;
  quantitative_information_on_goods: string;
  legal_act_information: string;
  applicant_documents: string;
  certificate_date: string;
  certificate_status?: any;
  certificate_extension_date: string;
  certificate_extension_status?: any;
  application_details: string;
  name_address_number_date_of_certificate: string;
  fio_leader_of_certificate: string;
  fio_expert: string;
  certificate_registration_number_date: string;
  certificate_registration_number_status?: any;
}

export interface ISummary {
  id: number;
  uved: string;
  departure_country: string;
  uved_legal_address: string;
  quantity_in_additional_units_of_measurement: string;
  conditional_release_note: string;
  uved_iin_bin: string;
  quantitative_information_on_goods: string;
  fio_and_address: string;
}
export interface IRId {
  last_name: string;
  first_name: string;
  middle_name: string;
  handbook_department: {
    id: number;
    name_kk: string;
    name_ru: string;
  };
}
export interface IHandbookTargetTndicatorReportNames {
  data: IHandbookTargetTndicatorReportValues;
  section_name: string;
}
export interface IHandbookTargetTndicatorReportValues {
  id: number;
  mark: string;
  name: string;
  section_name: string;
  unit_of_measurement: string;
  value: {
    dynamic: string;
    handbook_target_indicator_name_id: number;
    id: number;
    note: string;
    previous_period_indicator: string;
    reporting_period_fact: string;
  };
}
export interface IHandbookActivityReportValuesInner {
  drinking_water_percent: string;
  drinking_water_population_total: string;
  drinking_water_supply_decentralized_percent: string;
  drinking_water_supply_decentralized_population_number: string;
  drinking_water_supply_imported_percent: string;
  drinking_water_supply_imported_population: string;
  drinking_water_supply_open_percent: string;
  drinking_water_supply_open_population: string;
  drinking_water_supply_percent: string;
  drinking_water_supply_population_number: string;
  id: number;
  including_using_laboratory_methods_units: string;
  investigated_water_examined_samples: string;
  investigated_water_including: string;
  investigated_water_including_positive: string;
  investigated_water_samples: string;
  investigated_water_samples_giardia_cysts: string;
  investigated_water_sanitary: string;
  materials_submitted_to_court_total: string;
  number_of_examinations_units: string;
  number_of_fines_imposed: string;
  number_of_objects_nd_units: string;
  number_of_objects_units_of_which_works_units: string;
  number_of_objects_units_total_units: string;
  number_of_orders: string;
  number_of_persons_suspended_from_work: string;
  objects_surveyed_units: string;
  of_which_completed_on_time: string;
  specific_water_consumption_city: string;
  specific_water_consumption_village: string;
  total_population: string;
  transferred_materials_to_court_decisions_in_favor_of_the_service: string;
  water_samples_examined: string;
  water_samples_examined_epid: string;
  water_samples_examined_for_giardia: string;
  water_samples_examined_for_microbiological_indicators_units: string;
  water_samples_examined_for_microbiological_samples_examined: string;
  water_samples_examined_for_microbiological_standards: string;
  water_samples_examined_giardia_cysts: string;
  water_samples_examined_microbiological_indicators: string;
  water_samples_tested_for_giardia: string;
  water_samples_were_studied: string;
  which_fines_were_imposed: string;
}
export interface IHandbookActivityReportValues {
  id: number;
  name_kk: string;
  name_ru: string;
  handbook_activity_report_names: {
    row_number: string;
    id: number;
    water_supply_facility: string;
    value: IHandbookActivityReportValuesInner;
  }[];
}
export interface IHtirId {
  id: number;
  name_kk: string;
  name_ru: string;
  handbook_target_indicator_report_names: Array<IHandbookTargetTndicatorReportNames>;
}
export interface ITargetReport {
  created_at: string;
  id: number;
  comment: string;
  r_id: IRId;
  status: string;
  status_changed: string;
  htir_id: IHtirId;

  a_id: IRId;
  target_indicator_report_values: Array<IHandbookTargetTndicatorReportValues>;
}

export interface IMonitoringReport {
  author: {
    first_name: string;
    handbook_department: {
      id: number;
      name_kk: string;
      name_ru: string;
    };
    id: number;
    last_name: string;
    middle_name: string;
  };
  created_at: string;
  handbook_sem_form: {
    category: string;
    id: number;
    subcategory_first: string;
    subcategory_second: string;
  };
  id: number;
  monitoring_act_form: {
    boarding_school_amount: string;
    boarding_school_students_amount: string;
    eleven_to_twenty: string;
    id: number;
    school_amount: string;
    school_one_to_two: string;
    sick_students_share: string;
    sick_students_total: string;
    students_amount: string;
    three_to_ten: string;
    twenty_one_and_higher: string;
    vga_schools_share: string;
    vga_schools_total_amount: string;
    vga_total_amount: string;
    territory_name: string;
  };
  sender: string;
  status: string;
  status_changed: string;
}

export interface IEditTargetIndicatorReport {
  values: {
    id: number;
    reporting_period_fact: string;
    dynamic: string;
    note: string;
  }[];
}

export interface IEditMonitoringReport {
  vga_total_amount: string;
  school_amount: string;
  students_amount: string;
  boarding_school_amount: string;
  boarding_school_students_amount: string;
  vga_schools_total_amount: string;
  sick_students_total: string;
  sick_students_share: string;
  school_one_to_two: string;
  three_to_ten: string;
  eleven_to_twenty: string;
  twenty_one_and_higher: string;
  vga_schools_share: string;
  territory_name: string;
}

export interface IEditActivityReport {
  values: {
    id: number;
    number_of_objects_units_total_units: string;
    number_of_objects_units_of_which_works_units: string;
    objects_surveyed_units: string;
    including_using_laboratory_methods_units: string;
    number_of_examinations_units: string;
    number_of_objects_nd_units: string;
    number_of_orders: string;
    of_which_completed_on_time: string;
    water_samples_examined: string;
    investigated_water_samples: string;
    water_samples_examined_for_microbiological_samples_examined: string;
    water_samples_examined_for_microbiological_standards: string;
    water_samples_examined_for_microbiological_indicators_units: string;
    water_samples_were_studied: string;
    water_samples_examined_for_giardia: string;
    water_samples_tested_for_giardia: string;
    water_samples_examined_epid: string;
    investigated_water_sanitary: string;
    water_samples_examined_microbiological_indicators: string;
    investigated_water_including: string;
    investigated_water_examined_samples: string;
    investigated_water_including_positive: string;
    water_samples_examined_giardia_cysts: string;
    investigated_water_samples_giardia_cysts: string;
    materials_submitted_to_court_total: string;
    transferred_materials_to_court_decisions_in_favor_of_the_service: string;
    number_of_fines_imposed: string;
    which_fines_were_imposed: string;
    number_of_persons_suspended_from_work: string;

    // Если второй отчёт

    total_population: string;
    drinking_water_population_total: string;
    drinking_water_percent: string;
    drinking_water_supply_population_number: string;
    drinking_water_supply_percent: string;
    drinking_water_supply_decentralized_population_number: string;
    drinking_water_supply_decentralized_percent: string;
    drinking_water_supply_open_population: string;
    drinking_water_supply_open_percent: string;
    drinking_water_supply_imported_population: string;
    drinking_water_supply_imported_percent: string;
    specific_water_consumption_city: string;
    specific_water_consumption_village: string;
  }[];
}

export interface IMeragedTargetIndicatorsReport {
  dynamic: string;
  handbook_target_indicator_name_id: number;
  id: number;
  mark: string;
  name: string;
  note: string;
  previous_period_indicator: string;
  reporting_period_fact: string;
  section_name: string;
  unit_of_measurement: string;
}

export interface IErapData {
  actnum: string;
  av_original_id: string;
  balancesize: string;
  commissiondate: string;
  decision: string;
  doc_name: string;
  half_sum_expired_date: string;
  kbk: string;
  kno: string;
  knp: string;
  offenceorg: string;
  paymentsize: string;
  penaltysize: string;
  protocoldate: string;
  qualification: string;
  qualification_code: string;
}

export interface IElData {
  ActivityType: {
    Code: string;
    NameEn: string;
    NameKz: string;
    NameRu: string;
  };
  DocumentUrl: string;
  GlobalUniqueNumber: string;
  IinBin: string;
  IssueDate: string;
  Licensiar: {
    Code: string;
    NameEn: string;
    NameKz: string;
    NameRu: string;
  };
  Nikad: string;
  NikadRequests: string;
  Number: string;
  Status: {
    Code: string;
    NameKz: string;
    NameRu: string;
  };
  StopSuspendDuplicateDate: [];
  SuspendingEndDate: [];
  SuspendingStartDate: [];
  ValidityEndDate: string;
  ValidityStartDate: string;
}

export interface IActivityReport {
  created_at: string;
  id: number;
  comment: string;
  r_id: IRId;
  status: string;
  status_changed: string;
  a_id: IRId;
  handbook_activity_report: IHandbookActivityReportValues;
}

export interface IWaterReportCheck {
  author: string;
  bin: string;
  date: string;
  document_name: string;
  id: number;
  object: string;
  organization: string;
  status: string;
  water_sampling_act: ICheckReport;
}
