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

const DailySummary: React.FC = () => {

  return (
    <div className="  col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-4 justify-between gap-4 sm:flex h-[10%]">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            DailySummary
          </h4>
        </div>
      </div>

      <div className='h-[90%]'>
        <div id="chartTwo" className="flex flex-col justify-around rounded-[20px] p-[20px] h-[90%] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080] ' >Day Gan</div>
            <div className='font-bold text-[#50d71e] dark:text-[#50d71e] '>15.41%</div>
          </div>
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080]'>ABC Gan</div>
            <div className='font-bold text-[#50d71e] dark:text-[#50d71e] '>15.43%</div>
          </div>
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080]'>Day Dradown</div>
            <div className='font-bold' >0.17%</div>
          </div>
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080]'>LoremEpsum</div>
            <div className='font-bold' >1200</div>
          </div>
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080]' >LoremEpsum</div>
            <div className='font-bold' >7.22%</div>
          </div>
          <div className="flex flex-row justify-between" >
            <div className='font-bold text-[#000000] dark:text-[#808080]' >LoremEpsum</div>
            <div className='font-bold' >20.01%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySummary;
