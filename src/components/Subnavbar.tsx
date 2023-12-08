import React from 'react';
const Subnavbar = ({data} : any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" flex items-center gap-[20px]">
        <div className='bg-[#8080e2] border-2 border-solid border-[blue] rounded-[4px] px-[10px] py-[20px]'>
          <h6 className="text-title-md font-bold text-white dark:text-white">
            Progressive Objective
          </h6>
        </div>
        <div>
          <h6 className="text-title-md font-bold text-black dark:text-white">
            Advanced insights
          </h6>
        </div>
        <div>
          <h6 className="text-title-md font-bold text-black dark:text-white">
            Trading Jounal
          </h6>
        </div>
        <div>
          <h6 className="text-title-md font-bold text-black dark:text-white">
            Account Info
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
