import { ISeason } from "../../domain/ISeason";
import { SEASONS } from "../../domain/SeasonEnum";
import "./styles.css";

const SeasonNotification = ({ currentSeason }: SeasonNotificationProps) => {
  return (
    <div className="season-notification">
      <h1>Новый сезон "{SEASONS[currentSeason.type]}"</h1>
      <h2>Подсчитайте полученные очки за прошлый сезон</h2>
    </div>
  );
};

export default SeasonNotification;

interface SeasonNotificationProps {
  currentSeason: ISeason;
}
