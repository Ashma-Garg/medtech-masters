import { AdminTasks } from "../modules/admin";
import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";

export const AdminOperations = () => {
  return (
    <MedMastersDrawer>
      <AdminTasks />
    </MedMastersDrawer>
  );
};
