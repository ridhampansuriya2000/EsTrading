import React from 'react';
const Subnavbar = ({data} : any) => {
  return (
    <div className="progress-size rounded-sm border border-stroke bg-white py-4 px-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" flex items-center gap-[20px]">
        <div className='{/*bg-[#91b5ff]*/} border-b-[3px] border-solid border-[#3d93ea] {/*rounded-[5px]*/} px-[10px] py-[15px] cursor-pointer'>
          <div className="text-title-sm font-bold text-black dark:text-white">
            Progressive Objective
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white cursor-pointer">
            Advanced insights
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white cursor-pointer">
            Trading Jounal
          </div>
        </div>
        <div>
          <div className="text-title-sm font-bold text-black dark:text-white cursor-pointer">
            Account Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
