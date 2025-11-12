import type { CSSProperties, MouseEvent } from 'react';

type TitleCardProps = {
  zIndex: number;
  onCardClick?: (event: MouseEvent) => void;
  style?: CSSProperties;
};

const TitleCard = ({ zIndex, onCardClick, style }: TitleCardProps) => {
  return (
    <div
      onClick={onCardClick}
      style={{ zIndex, ...style }}
      className="absolute left-1/2 top-1/2 h-[302px] w-[202px] 
                 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden 
                 cursor-pointer bg-blue-700 transition-transform"
    >
      <div className="relative h-full w-full">
          <p className="text-white text-right pr-1.5">web-publisher 2025</p>
        <h2 className="absolute bottom-3 left-3 text-5xl font-bold text-white">
          <span className="block">PORT</span>
          <span className="text-yellow-400">-</span>
          <span>FOLIO</span>
        </h2>
      </div>
    </div>
  );
};

export default TitleCard;
