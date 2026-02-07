
export interface FormData {
  fullName: string;
  gender: string;
  dob: string;
  currentCity: string;
  currentState: string;
  country: string;
  primaryMobile: string;
  alternateMobile: string;
  primaryEmail: string;
  alternateEmail: string;
  roleApplyingFor: string;
  preferredJobLocation: string;
  employmentType: string;
  highestQualification: string;
  degreeName: string;
  specialization: string;
  collegeName: string;
  yearOfPassing: string;
  totalExperience: string;
  currentCompany: string;
  currentJobRole: string;
  keySkills: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  confirmed: boolean;
}

export const INITIAL_FORM_STATE: FormData = {
  fullName: '',
  gender: '',
  dob: '',
  currentCity: '',
  currentState: '',
  country: '',
  primaryMobile: '',
  alternateMobile: '',
  primaryEmail: '',
  alternateEmail: '',
  roleApplyingFor: '',
  preferredJobLocation: '',
  employmentType: '',
  highestQualification: '',
  degreeName: '',
  specialization: '',
  collegeName: '',
  yearOfPassing: '',
  totalExperience: '',
  currentCompany: '',
  currentJobRole: '',
  keySkills: '',
  currentCTC: '',
  expectedCTC: '',
  noticePeriod: '',
  confirmed: false,
};
