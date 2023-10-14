import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[290px] h-[290px]" />
      <div className="mt-9 flex justify-start gap-3">
        <img src={star} alt="rating" width={26} height={26} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-3 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-3 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
