import { useEffect, useState } from "react";
import Modal from "../Modal";
import { ICardMap } from "../../domain/ICardMap";
import Card from "../Card";
import { serviceMaps } from "../../services/serviceMaps";

const Maps = () => {
  const [mapCard, setMapCard] = useState<ICardMap | null>(null);
  const [mapCards, setMapCards] = useState<ICardMap[]>([]);

  const showMap = (card: ICardMap | null) => () => {
    setMapCard(card);
  };

  useEffect(() => {
    serviceMaps.getMaps().then((maps) => {
      setMapCards(maps);
    });
  }, []);

  return (
    <>
      {mapCards.map((card) => (
        <button key={card.id} onClick={showMap(card)}>
          {card.name}
        </button>
      ))}
      {mapCard && (
        <Modal onClose={showMap(null)}>
          <Card card={mapCard} />
        </Modal>
      )}
    </>
  );
};

export default Maps;
