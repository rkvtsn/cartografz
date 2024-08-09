import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import { serviceGallery } from "../../services/serviceGallery";

const Gallery = () => {
  const { state } = useFetch([], () => serviceGallery.getAll());

  return (
    <div className="gallery">
      {state.map((card) => (
        <Card key={card.img} card={card} />
      ))}
    </div>
  );
};

export default Gallery;
