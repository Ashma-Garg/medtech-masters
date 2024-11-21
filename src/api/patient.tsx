import { appointmentAxios, patientAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { IMakeAnAppointmentAPI, PatientSignUpAPIProps } from "./interface";

export const getPatientByUsername = (username: string) => {
  return patientAxios.get(`/${username}`);
};

export const getAllPatients = () => {
  return patientAxios.get("/");
};

export const updateProfileDetails = (
  patient_username: string,
  profileUser: IPatient | ILoginUser | IDoctorHistory
) => {
  return patientAxios.put(
    `/patient/${patient_username}`,
    profileUser as PatientSignUpAPIProps
  );
};

export const getLatestRealTimeData = (patient_username: string) => {
  return patientAxios.get(`/latest-record/${patient_username}/`);
};

export const getAllRealTimeData = (username: string) => {
  return patientAxios.get(`/record/${username}/`);
};

export const makeAnAppointment = (
  patient_username: string,
  appointmentDetails: IMakeAnAppointmentAPI
) => {
  return appointmentAxios.post(
    `/appointments/${patient_username}/`,
    appointmentDetails
  );
};

export const getAllBookedAppointment = (patient_username: string) => {
  return appointmentAxios.get(`/appointments/${patient_username}/?is_all=false`);
};
