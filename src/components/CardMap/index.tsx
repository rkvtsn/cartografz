import { CardMapNameEnum } from "../../domain/CardMapNameType";
import { getImageUrl } from "../../utils/getImageUrl";
import { CARD_MAPS } from "./constants";

const CardMap = ({ name }: CardMapProps) => {
  return (
    <div className="card">
      <img className="img" src={getImageUrl(CARD_MAPS[name])} />
    </div>
  );
};

export default CardMap;

interface CardMapProps {
  name: CardMapNameEnum;
}
