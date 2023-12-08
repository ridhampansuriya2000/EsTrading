const CardThree = () => {
  return (
    <div className="rounded-md bg-boxdark py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className=" flex justify-center">
        <h6 className="text-center text-white dark:text-black ">Account Size</h6>
      </div>

      <div className="rounded-lg bg-[black] shadow-default mt-4">
        <div className="flex p-10 justify-center bg-black rounded-lg">
          <p className="text-center text-white dark:text-black font-medium text-title-sm">
            $50,000.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
