import Card from "../../components/Card";
import { serviceGallery } from "../../services/serviceGallery";
import { useFetch } from "../../useFetch";

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
