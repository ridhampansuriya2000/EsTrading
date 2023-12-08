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

const TradingDetails: React.FC = () => {

  return (
    <div className="  col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-4 justify-between gap-4 sm:flex h-[10%]">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Trading Objective
          </h4>
        </div>
      </div>

      <div id="chartTwo" className="bg-[black] rounded-[20px] p-[20px] h-[100px] flex justify-around">
        <div className="flex flex-col justify-between" >
          <div className='font-bold' >Equity</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$12,344,4</div>
        </div>
        <div className="flex flex-col justify-between" >
          <div className='font-bold'>Udoras</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$52,215.52</div>
        </div>
        <div className="flex flex-col justify-between" >
          <div className='font-bold'>No of off</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]' >48</div>
        </div>
        <div className="flex flex-col justify-between" >
          <div className='font-bold'>Loss</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]' >7.09</div>
        </div>
        <div className="flex flex-col justify-between" >
          <div className='font-bold' >woin rate</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]' >100.00%</div>
        </div>
        <div className="flex flex-col justify-between" >
          <div className='font-bold' >Highest</div>
          <div className='font-bold text-[#b6b6b6] dark:text-[#808080]' >$12,434.34</div>
        </div>
      </div>

      <div className='flex justify-between mt-[20px]'>
        <div className='flex justify-arround items-center gap-[20px] font-bold' >
          <div id="chartTwo" className="flex justify-around bg-[black] rounded-[20px] p-[20px] h-[100px] w-[120px] border-2 border-solid border-[#243c5a] rounded-[4px]  ">
            <div className="flex flex-col justify-between" >
              <div className='font-bold' >Avrg pice</div>
              <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$46.36</div>
            </div>
          </div>
          <div>
            Avrage Loss
          </div>
          <div>
            Avrage RRR
          </div>
        </div>
        <div id="chartTwo" className="bg-[black] rounded-[20px] p-[20px] h-[100px] w-[350px] flex justify-around">
          <div className="flex flex-col justify-between" >
            <div className='font-bold' >Expectence</div>
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$46.36</div>
          </div>
          <div className="flex flex-col justify-between" >
            <div className='font-bold'>Fyot Factor</div>
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$15,215.52</div>
          </div>
          <div className="flex flex-col justify-between" >
            <div className='font-bold'>Noyot</div>
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>$53.96</div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center mt-10'>
        <div id="chartTwo" className="bg-[black] rounded-[20px] p-[20px] h-[90px] w-[250px] flex justify-around items-center">
          <div className="flex flex-row justify-between items-center" >
            <div className='font-bold' >Time Zone : </div>
            <div className='font-bold text-[#b6b6b6] dark:text-[#808080]'>GMT + 0</div>
          </div>
        </div>

        <div className='flex'>
          <div className='font-bold text-[black]'>
            Last Update :
          </div>
          <div className='font-bold text-[blue]'>
            5 Jan 202200:00:20:12
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDetails;