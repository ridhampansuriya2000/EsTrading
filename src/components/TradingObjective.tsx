import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface DailySummaryState {
  series: {
    name: string;
    data: number[];
  }[];
}

const TradingObjective: React.FC = () => {

  return (
    <div className="  col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-4 justify-between gap-4 sm:flex h-[10%]">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Trading Objective
          </h4>
        </div>
      </div>

      <div className='mb-[10px]'>
        <div id="chartTwo" className="bg-[black] rounded-[20px] p-[20px] h-[90%] flex flex-col justify-around">
          <div className="flex flex-row justify-between items-center" >
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080] ' >Result : 70</div>
            <div className='font-bold text-[#50d71e] dark:text-[#50d71e] px-[10px] py-[5px] border-2 border-solid border-[#243c5a] rounded-[4px]' >Passed</div>
          </div>
        </div>
      </div>
      <div className='mb-[10px]'>
        <div id="chartTwo" className="bg-[black] rounded-[20px] p-[20px] h-[90%] flex flex-col justify-around">
          <div className="flex flex-row justify-between items-center" >
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080] ' ><div>Max Daily Loss</div><div>Result : 400</div></div>
            <div className='font-bold text-[#cfcf46] dark:text-[#50d71e] px-[10px] py-[5px] border-2 border-solid border-[#cfcf46] rounded-[4px]' >In Progress</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 bg-[gray] mt-[30px]">
        <div className="bg-[blue] h-2.5 rounded-full" style={{width:'55px'}} ></div>
      </div>
    </div>
  );
};

export default TradingObjective;
