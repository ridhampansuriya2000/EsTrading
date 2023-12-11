import Breadcrumb from '../components/Breadcrumb';

const Calendar = () => {
  return (
    <div className='mt-[40px]'>
      <Breadcrumb pageName="Calendar" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className=" w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Sunday </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Monday </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Tuesday </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Wednesday </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Thursday </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Friday </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Saturday </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Line 1 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  1
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                    <span className="time text-md font-medium text-[green] dark:text-white">
                      $45,22.2k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  2
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $754,45k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  3
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $312,45k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  4
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $834,45k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  5
                </span>
                <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                  <span className="time text-md font-medium text-[green] dark:text-white">
                      $322.2k
                    </span>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  6
                </span>
                <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                  <span className="time text-md font-medium text-[green] dark:text-white">
                      $522.2k
                    </span>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  7
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $334,45k
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Line 1 --> */}
            {/* <!-- Line 2 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  8
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $34,45k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  9
                </span>
                <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                  <span className="time text-md font-medium text-[green] dark:text-white">
                      $52.2k
                    </span>
                </div>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible absolute left-2 z-30 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[red] dark:text-white">
                      Loss
                    </span>
                    <span className="time text-md font-medium text-[red] dark:text-white">
                      $34,45k
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  10
                </span>
                <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                  <span className="time text-md font-medium text-[green] dark:text-white">
                      $522.2k
                    </span>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  11
                </span>
                <div className="event invisible absolute left-2 z-30 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[90%] md:opacity-100">
                    <span className="event-name text-md font-semibold text-[green] dark:text-white">
                      Profit
                    </span>
                  <span className="time text-md font-medium text-[green] dark:text-white">
                      $222.2k
                    </span>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  12
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  13
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  14
                </span>
              </td>
            </tr>
            {/* <!-- Line 2 --> */}
            {/* <!-- Line 3 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  15
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  16
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  17
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  18
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  19
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  20
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  21
                </span>
              </td>
            </tr>
            {/* <!-- Line 3 --> */}
            {/* <!-- Line 4 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  22
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  23
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  24
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  25
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  26
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  27
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  28
                </span>
              </td>
            </tr>
            {/* <!-- Line 4 --> */}
            {/* <!-- Line 5 --> */}
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  29
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  30
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  31
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  1
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  2
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  3
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  4
                </span>
              </td>
            </tr>
            {/* <!-- Line 5 --> */}
          </tbody>
        </table>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </div>
  );
};

export default Calendar;
