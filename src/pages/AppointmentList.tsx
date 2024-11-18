import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { MAppointmentList } from "../modules/appointments/appointmentList";

export const AppointmentList = () => {
  return (
    <MedMastersDrawer>
      <MAppointmentList />
    </MedMastersDrawer>
  );
};
