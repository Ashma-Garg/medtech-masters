import { adminMedAxios } from ".";
import { LinkDoctorPatientProps } from "./interface";

export const linkDoctorPatient = (object: LinkDoctorPatientProps) => {
  return adminMedAxios.post("/doctorpatientrelation", object);
};
