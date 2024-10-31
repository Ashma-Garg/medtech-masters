import { patientAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { IMakeAnAppointmentAPI, PatientSignUpAPIProps } from "./interface";

export const getPatientByUsername = (username: string) => {
  return patientAxios.get(`/${username}`);
};

export const getAllPatients = () => {
  return patientAxios.get("/patient");
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
  return patientAxios.get(`/latest-record/${patient_username}`);
};

export const getAllRealTimeData = (username: string) => {
  return patientAxios.get(`/record-data/${username}`);
};

export const getAllTimeSlotsForDoctor = (
  doctor_username: string,
  day_name: string
) => {
  return patientAxios.get(`/avail-doc-appointment/${doctor_username}`, {
    params: {
      day_name: day_name,
    },
  });
};

export const makeAnAppointment = (
  patient_username: string,
  appointmentDetails: IMakeAnAppointmentAPI
) => {
  return patientAxios.post(
    `/book-appointment/${patient_username}`,
    appointmentDetails
  );
};

export const getAllBookedAppointment = (patient_username: string) => {
  return patientAxios.get(`/book-appointment/${patient_username}?is_all=false`);
};
