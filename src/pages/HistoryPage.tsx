import "./style.scss";
import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { History } from "../modules/history";
import { useContext } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";

const HistoryPage = () => {
  const { user } = useContext(AppContext) as ContextProps;
  return (
    <MedMastersDrawer>
      <History username={user.user_name} />
    </MedMastersDrawer>
  );
};

export default HistoryPage;
