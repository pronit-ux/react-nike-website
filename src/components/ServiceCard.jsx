const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[360px] sm:min-w-[360px] w-full rounded-[25px] shadow-3xl px-10 py-16">
      <div className="w-14 h-14 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-6 font-palanquin text-4xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-4 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
