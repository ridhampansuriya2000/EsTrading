import React from 'react';
const CardOne = ({data} : any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data.data}
          </h4>
          <span className="text-sm font-medium">{data.label}</span>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
