import { ISeason } from "../../domain/ISeason";
import { SEASONS } from "../../domain/SeasonEnum";
import Modal from "../Modal";

const SeasonNotification = ({ currentSeason }: SeasonNotificationProps) => {
  return (
    <Modal.Panel>
      <h1>Новый сезон "{SEASONS[currentSeason.type]}"</h1>
      <h2>Подсчитайте полученные очки за прошлый сезон</h2>
    </Modal.Panel>
  );
};

export default SeasonNotification;

interface SeasonNotificationProps {
  currentSeason: ISeason;
}
