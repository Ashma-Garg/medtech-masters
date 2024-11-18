import { MAddSchedule } from "../modules/appointments/addSchedule";
import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";

export const AddSchedule = () => {
  return (
    <MedMastersDrawer>
      <MAddSchedule />
    </MedMastersDrawer>
  );
};
