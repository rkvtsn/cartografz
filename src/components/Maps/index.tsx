import { useState } from "react";
import { CardMapNameEnum } from "../../domain/CardMapNameType";
import Modal from "../Modal";
import CardMap from "../CardMap";

const Maps = () => {
  const [mapName, setMapName] = useState<CardMapNameEnum>(CardMapNameEnum.NONE);

  const showMap = (name: CardMapNameEnum) => () => {
    setMapName(name);
  };

  return (
    <>
      <button onClick={showMap(CardMapNameEnum.A)}>Карта A</button>
      <button onClick={showMap(CardMapNameEnum.B)}>Карта B</button>
      {mapName !== CardMapNameEnum.NONE && (
        <Modal onClose={showMap(CardMapNameEnum.NONE)}>
          <CardMap name={mapName} />
        </Modal>
      )}
    </>
  );
};

export default Maps;
