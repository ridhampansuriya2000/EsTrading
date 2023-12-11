import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
// import LosserTable from './TableTwo';

const LosserTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mb-[40px]">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Losers
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <p className="text-[14px] uppercase  font-[700]">
              Name
            </p>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <p className="text-[14px] uppercase  font-[700]">

            </p>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <p className="text-[14px] uppercase  font-[700]">
              Price
            </p>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <p className="text-[14px] uppercase  font-[700]">
              Change
            </p>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <p className="text-[14px] uppercase  font-[700]">
              Change %
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/*<div className="flex-shrink-0">*/}
            {/*  <img src={BrandOne} alt="Brand" />*/}
            {/*</div>*/}
            <p className="hidden text-black dark:text-white sm:block font-[600]">BA</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Boeing</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">244.52	</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">7.19</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">3.03</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/*<div className="flex-shrink-0">*/}
            {/*  <img src={BrandTwo} alt="Brand" />*/}
            {/*</div>*/}
            <p className="hidden text-black dark:text-white sm:block font-[600]">
              IBM
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">IBM</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">161.96</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.74</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.09</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/*<div className="flex-shrink-0">*/}
            {/*  <img src={BrandThree} alt="Brand" />*/}
            {/*</div>*/}
            <p className="hidden text-black dark:text-white sm:block font-[600]">INTC</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Intel</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">42.70	</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">0.55</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.30</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/*<div className="flex-shrink-0">*/}
            {/*  <img src={BrandFour} alt="Brand" />*/}
            {/*</div>*/}
            <p className="hidden text-black dark:text-white sm:block font-[600]">CVX</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Chevron</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">144.29	</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.87</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.31</p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/*<div className="flex-shrink-0">*/}
            {/*  <img src={BrandFive} alt="Brand" />*/}
            {/*</div>*/}
            <p className="hidden text-black dark:text-white sm:block font-[600]">
              GS
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Goldman</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">350.80	</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">6.18</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-[red]">1.79</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosserTable;
