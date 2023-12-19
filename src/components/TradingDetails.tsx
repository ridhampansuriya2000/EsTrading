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
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-4 sm:flex sm:justify-between sm:items-center">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Trading Objective
          </h4>
        </div>
      </div>

      <div id="chartTwo" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-[20px] p-[20px] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>Equity</div>
          <div className='font-bold'>$12,344,4</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>Udoras</div>
          <div className='font-bold'>$52,215.52</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>No of off</div>
          <div className='font-bold'>48</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>Loss</div>
          <div className='font-bold'>7.09</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>woin rate</div>
          <div className='font-bold'>100.00%</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className='font-bold text-[#000000]'>Highest</div>
          <div className='font-bold'>$12,434.34</div>
        </div>
      </div>

      <div className="flex flex-col mt-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4 font-bold sm:justify-between sm:padding-{20px 0px}">
        <div id="chartTwo" className="rounded-[20px] p-[20px] h-[100px] w-[120px] border-2 border-solid border-[#808080] rounded-[20px] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">

            <div className="flex flex-col justify-between">
              <div className='font-bold text-[#000000]'>Avrg pice</div>
              <div className='font-bold dark:text-[#808080]'>$46.36</div>
            </div>
          </div>
          <div className='text-[#000000]'>
            Avrage Loss
          </div>
          <div className='text-[#000000]'>
            Avrage RRR
          </div>
        </div>
        <div id="chartTwo" className="rounded-[20px] p-[20px] h-[100px] w-[full] sm:w-[350px] flex justify-around shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col justify-between">
            <div className='font-bold text-[#000000]'>Expectence</div>
            <div className='font-bold dark:text-[#808080]'>$46.36</div>
          </div>
          <div className="flex flex-col justify-between" >
            <div className='font-bold text-[#000000]'>Fyot Factor</div>
            <div className='font-bold dark:text-[#808080]'>$15,215.52</div>
          </div>
          <div className="flex flex-col justify-between" >
            <div className='font-bold text-[#000000]'>Noyot</div>
            <div className='font-bold dark:text-[#808080]'>$53.96</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 sm:mt-10">
        <div id="chartTwo" className="rounded-[20px] p-[20px] h-[90px] w-[250px] flex justify-around items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex flex-row justify-between items-center">
            <div className='font-bold text-[#000000]'>Time Zone : </div>
            <div className='font-bold dark:text-[#808080]'>GMT + 0</div>
          </div>
        </div>

        <div className='flex'>
          <div className='font-bold text-[black]'>Last Update :</div>
          <div className='font-bold text-[blue]'>5 Jan 2022 00:00:20:12</div>
        </div>
      </div>
    </div>

  );
};

export default TradingDetails;
