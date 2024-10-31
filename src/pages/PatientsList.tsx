import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientsList } from "../modules/patientsList";

export const PatientsList = () => {
  return (
    <MedMastersDrawer>
      <MPatientsList />
    </MedMastersDrawer>
  );
};
