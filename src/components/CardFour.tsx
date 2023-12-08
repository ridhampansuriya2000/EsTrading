const CardFour = () => {
  return (
    <div className="rounded-md bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className=" flex justify-center">
        <h6 className="text-center text-white dark:text-black ">Status</h6>
      </div>

      <div className="rounded-lg bg-[black] border border-[#ebeb74] shadow-default mt-4">
        <div className="flex p-10 justify-center bg-black rounded-lg">
          <p className="text-center text-[#ebeb74] dark:text-black font-medium text-title-sm">
            In Progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
