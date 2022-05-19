interface IChart {
  key: number;
  lowest: number;
  highest: number;
}

export default function Chart({ key, lowest, highest }: IChart) {
  return (
    <div className="flex items-center w-full" key={key}>
      <div className="relative w-1/2">
        <div className="absolute -bottom-0 left-right transform translate-x-1/2 translate-y-1/2 z-0 border-t-gray-300 border-dashed border-t-2 h-1 w-full" />
        <div
          className="absolute transform -translate-y-1/2 right-0 -bottom-[2px] bg-[#cce4f5] rounded-l-md z-10 h-1"
          style={{ width: `${lowest}%` }}
        />
      </div>
      <div className="relative w-1/2">
        <div
          className="absolute transform -translate-y-1/2 left-0 -bottom-[2px] bg-red-500 rounded-r-md z-10 h-1"
          style={{ width: `${highest}%` }}
        />
      </div>
    </div>
  );
}