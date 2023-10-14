import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[130px] h-[130px]"
      />
      <p className="mt-7 max-w-sm text-center info-text"> {feedback} </p>
      <div className="mt-4 flex justify-center items-center gap-3">
        <img
          src={star}
          alt="img"
          width={26}
          height={26}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray"> ({rating}) </p>
      </div>
      <h3 className="mt-2 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
