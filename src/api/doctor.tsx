import { appointmentAxios, doctorAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IAppointmentSchedule } from "../modules/appointments/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { DoctorSignUpApiProps } from "./interface";

export const getDoctorByUsername = (username: string) => {
  return doctorAxios.get(`/${username}`);
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
  return doctorAxios.post(`/timeslots/${username}`, addedSchedule);
};

export const updateScheduleForDoctor = (
  username: string,
  addedSchedule: Array<IAppointmentSchedule>
) => {
  return doctorAxios.put(`/timeslots/${username}`, addedSchedule);
};

export const getAllDoctorBookedAppointments = (username: string) => {
  return appointmentAxios.get(`/appointments/doctor/${username}/`);
};


export const getAllTimeSlotsForDoctor = (
  doctor_username: string,
  day_name: string
) => {
  return doctorAxios.get(`/available-timeslots/${doctor_username}`, {
    params: {
      day_name: day_name,
    },
  });
};

// appointmentdata/appointments/<str:username>/
// appointmentdata/appointments/doctor/<str:doctor_username>/</str:doctor_username>

export const getAllTimeSlots = (username: string) => {
  return doctorAxios.get(`/timeslots/${username}`);
};

export const makeSOSCall = (patient_username: string) => {
  return doctorAxios.post(`/send-sos/${patient_username}`);
};
