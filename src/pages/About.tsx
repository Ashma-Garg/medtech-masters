import { About } from "../modules/about";
import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { DataContact } from "../modules/DigiDataContact";

export const DigicareAbout = () => {
  return (
    <MedMastersDrawer>
      <DataContact />
    </MedMastersDrawer>
  );
};
