import { doctorAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IAppointmentSchedule } from "../modules/appointments/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { DoctorSignUpApiProps } from "./interface";

export const getDoctorByUsername = (username: string) => {
  return doctorAxios.get(`/doctor/${username}`);
};

export const getAllDoctors = () => {
  return doctorAxios.get("/");
};

export const updateDoctorProfileDetails = (
  patient_username: string,
  profileUser: IPatient | ILoginUser | IDoctorHistory
) => {
  return doctorAxios.put(
    `/doctor/${patient_username}`,
    profileUser as DoctorSignUpApiProps
  );
};

export const addScheduleForDoctor = (
  username: string,
  addedSchedule: Array<IAppointmentSchedule>
) => {
  return doctorAxios.post(`/time-slots/${username}`, addedSchedule);
};

export const updateScheduleForDoctor = (
  username: string,
  addedSchedule: Array<IAppointmentSchedule>
) => {
  return doctorAxios.put(`/time-slots/${username}`, addedSchedule);
};

export const getAllDoctorBookedAppointments = (username: string) => {
  return doctorAxios.get(`/book-appointment/doctor/${username}`);
};

export const getAllTimeSlots = (username: string) => {
  return doctorAxios.get(`/time-slots/${username}`);
};

export const makeSOSCall = (patient_username: string) => {
  return doctorAxios.post(`/send-sos/${patient_username}`);
};
