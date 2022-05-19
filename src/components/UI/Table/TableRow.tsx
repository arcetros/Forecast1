import { IoMdWater } from 'react-icons/io';
import { TiWeatherCloudy } from 'react-icons/ti';
import Chart from './Chart';
import getTempPercents from '../../../helpers';

export default function TableRow() {
  const temps = getTempPercents(7, 27);

  return (
    <tr className="h-16 border border-gray-1 hover:bg-gray-100">
      <td className="pl-4 w-2/12">
        <div>
          <span className="text-gray-500">Sunday</span>
        </div>
      </td>
      <td className="w-2/12">
        <div className="flex flex-shrink-0 items-center gap-x-1 max-w-sm">
          <IoMdWater className="text-blue-500" />
          <span className="flex-1 text-gray-500">54%</span>
        </div>
      </td>
      <td className="text-blue-500 w-2/12">
        <TiWeatherCloudy className="w-7 h-7" />
      </td>
      <td className="pr-4 w-6/12">
        <div className="flex items-center justify-between gap-x-8">
          <span className="text-gray-500">14°C</span>
          {temps.map((item, index) => {
            if (item.highest === 0 || item.lowest === 0) {
              return <Chart key={index} lowest={item.lowest && item.lowest} highest={item.highest && item.highest} />;
            }
            return <Chart key={index} lowest={item.lowest} highest={item.highest} />;
          })}
          <span>27°C</span>
        </div>
      </td>
    </tr>
  );
}
