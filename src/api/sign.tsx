import { doctorAxios, adminMedAxios, patientAxios } from ".";

import {
  DoctorSignUpApiProps,
  PatientSignUpAPIProps,
  UserSignInAPIProps,
} from "./interface";

export const patientSignupService = (data: PatientSignUpAPIProps) => {
  return patientAxios.post("/register", data);
};

export const doctorSignupService = (data: DoctorSignUpApiProps) => {
  return doctorAxios.post("/DoctorRegisteration", {...data, availability_hours: []});
};

export const patientSignIn = (data: UserSignInAPIProps) => {
  return patientAxios.post("/login", data);
}; 

export const doctorSignIn = (data: UserSignInAPIProps) => {
  return doctorAxios.post("/DoctorLogin", data);
};

export const adminSignIn = (data: UserSignInAPIProps) => {
  return adminMedAxios.post("/admin-login", data);
};
