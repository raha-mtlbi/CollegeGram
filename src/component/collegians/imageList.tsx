import { useNavigate } from "react-router-dom";
import image from "../../assets/images/imageListSampel.svg";

const images = [
  { id: 1, image: image },
  { id: 2, image: image },
  { id: 3, image: image },
  { id: 4, image: image },
  { id: 5, image: image },
  { id: 6, image: image },
  { id: 7, image: image },
  { id: 8, image: image },
];

export default function ImageList() {
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-4 gap-4 mr-12 ml-5">
      {images.map((i) => (
        <div key={i.id} className="w-[230px] h-[230px] cursor-pointer">
          <img
            className=" max-w-full "
            src={i.image}
            alt=""
            onClick={() => navigate("/innerPost")}
          />
        </div>
      ))}
    </div>
  );
}
