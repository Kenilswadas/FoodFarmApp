// Button component
const Button = ({ btnName, faicon, clickHandler, disable, type }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type={type}
        // onClick={() => {
        //   clickHandler();
        // }}
        disabled={disable}
        className="flex xl:mt-10 2xl:mt-10 sm:mt-20 max-sm:mt-5 p-2 sm:pl-6 sm:pr-6 bg-[#90D26D] text-white  transition-transform transform-gpu  hover:shadow-lg hover:bg-green-800  font-dm rounded-full"
      >
        {faicon}
        {btnName}
      </button>
    </div>
  );
};

export { Button };
