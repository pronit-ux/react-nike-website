import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-12"
    >
      <h3 className="text-4xl leading-[75px] lg:max-w-md font-palanquin font-bold">
        Sign Up From <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-6 p-3 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
