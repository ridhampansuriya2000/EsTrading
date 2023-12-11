import React from 'react';
const Subnavbar = ({data} : any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-4 px-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" flex items-center gap-[20px]">
        <div className='bg-[#91b5ff] border-2 border-solid border-[#91b5ff] rounded-[5px] px-[10px] py-[10px]'>
          <div className="text-title-sm font-bold text-white dark:text-white">
            Progressive Objective
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white">
            Advanced insights
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white">
            Trading Jounal
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white">
            Account Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
