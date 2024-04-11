// Button component
const Button = ({ btnName, faicon, clickHandler, disable, type }) => {
  return (
    <button
      type={type}
      disable={disable}
      onClick={
        clickHandler
          ? () => {
              clickHandler();
            }
          : null
      }
      disabled={disable}
      className="flex items-center justify-between xl:mt-5 2xl:mt-5 sm:mt-5 max-sm:mt-5 p-2 sm:pl-6 sm:pr-6 bg-[#D9EDBF]  transition-transform transform-gpu  hover:shadow-lg  text-[#2C7865] hover:bg-[#2C7865] hover:text-[#ffffff] font-dm rounded-full"
    >
      {faicon ? <span className="pr-2">{faicon}</span> : null}{" "}
      <span>{"  " + btnName}</span>
    </button>
  );
};

export { Button };
