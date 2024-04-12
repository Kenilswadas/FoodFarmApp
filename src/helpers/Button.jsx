// Button component
const SignInButton = ({ btnName, faicon, clickHandler, disable, type }) => {
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
const Button = ({ btnName, faicon, clickHandler, disable, type }) => {
  return (
    // <div className="bg-[#C6EBC5] p-2 rounded-md mt-5">
    // <button
    //   type={type}
    //   disable={disable}
    //   onClick={
    //     clickHandler
    //       ? () => {
    //           clickHandler();
    //         }
    //       : null
    //   }
    //   disabled={disable}
    //   // className="flex items-center justify-between xl:mt-0 2xl:mt-0 sm:mt-0 max-sm:mt-0 p-2 sm:pl-8 sm:pr-8  bg-white rounded-md text-[#2C7865] hover:bg-[#2C7865] hover:text-[#ffffff] font-dm border-l-2 border-l-[#2C7865] border-t-2 border-t-[#2C7865] border-r-2 border-r-[#90D26D] border-b-2 border-b-[#90D26D]  hover:border-r-2 hover:border-r-white hover:border-b-2 hover:border-b-white hover:shadow-2xl shadow-2xl"
    //   className="flex items-center justify-between bg-[#D9EDBF] mt-5 p-3 rounded-full"
    // >
    //   {faicon ? <span className="pr-2">{faicon}</span> : null}{" "}
    //   <span>{"  " + btnName}</span>
    //   Spam
    // </button>
    // </div>
    <div class="flex flex-wrap justify-center gap-6 mt-5">
      <button
        class="relative "
        href="#"
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
      >
        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-[#A1C398]"></span>
        <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-[#2C7865] bg-[#ffffff] px-3 py-1 text-base font-bold text-[#2C7865] hover:shadow-2xl transition duration-100 hover:bg-[#FEFDED] hover:text-[#2C7865]">
          Add Category
        </span>
      </button>
    </div>
  );
};

export { Button, SignInButton };
