import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientDetails } from "../modules/patientDetails";
import { useParams } from "react-router";

export const DigicarePatientDetails = () => {
  const { patient_username } = useParams();

  return (
    <MedMastersDrawer>
      <MPatientDetails patient_username={patient_username} />
    </MedMastersDrawer>
  );
};
