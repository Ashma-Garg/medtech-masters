import axios from "axios";

export const adminMedAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST}/admin`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const patientAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST}/patients`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const doctorAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST}/doctors`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const appointmentAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST}/appointmentdata`,
  headers: {
    "Content-Type": "application/json",
  },
});
