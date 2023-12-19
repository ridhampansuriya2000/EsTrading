import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import DailySummary from '../../components/DailySummary';
import TradingObjective from '../../components/TradingObjective';
import TradingDetails from '../../components/TradingDetails';
import Calendar from '../Calendar';
import Subnavbar from '../../components/Subnavbar';
import TableTwo from '../../components/TableTwo';
import LosserTable from '../../components/LosserTable';

let cards : any = [
  {
    label : 'Start Date',
    data : '1 Feb, 2022'
  },
  {
    label : 'End Date\n',
    data : '28 Feb, 2022'
  },
  {
    label : 'Account Size',
    data : '$50,000.00'
  },
  {
    label : 'Status',
    data : 'In Progress'
  },
  {
    label : 'Status',
    data : 'In Progress'
  },
]

const ECommerce = () => {
  return (
    <>
      <div className='progress-bar'><Subnavbar/></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5 mt-[20px]">
        {cards.map((item : any)=>(<CardOne data={item}/>))}
      </div>

      <div className="mt-4 mb-10 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <DailySummary />
        <TradingDetails />
        <TradingObjective />
        {/*<ChartThree />*/}
        {/*<MapOne />*/}
        {/*<div className="col-span-12 xl:col-span-8">*/}
        {/*  <TableOne />*/}
        {/*</div>*/}
        {/*<ChatCard />*/}
      </div>
      <div className='flex gap-[10px] flex-col md:flex-row'>
        <TableOne />
        <LosserTable />
      </div>
      <Calendar />
    </>
  );
};

export default ECommerce;
