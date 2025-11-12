import { useState, type CSSProperties, type MouseEvent } from 'react';
import type { CardVariant } from '../constants/cardData';

type CardProps = {
  variant?: CardVariant;
  image?: string;
  title?: string;
  website?: string;
  github?: string;
  zIndex: number;
  cardRef: (el: HTMLDivElement | null) => void;
  onModalClick?: (event: MouseEvent) => void;
  style?: CSSProperties;
};

const Card = ({
  variant = 'detail',
  image,
  title,
  website,
  github,
  zIndex,
  cardRef,
  style,
  onModalClick,
}: CardProps) => {
  const renderContent = () => {
    switch (variant) {
      case 'title':
        return (
          <>
            <div className="relative flex justify-center items-center flex-col gap-4 h-full w-full cursor-pointer p-2 overflow-hidden ">
              <div className="absolute flex flex-col justify-center items-center top-0 w-full bg-gray-200 h-18 border-b-1 border-b-gray-300">
                <div className="absolute left-2 top-5">
                  <img
                    src="./images/icon_arrow_back.svg"
                    className="w-6 h-6"
                  ></img>
                </div>
                <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl">
                  🥺
                </div>
                <div className="absolute right-2 top-5 text-2xl">
                  <img src="./images/icon_video.svg" className="w-6 h-6"></img>
                </div>
                <div className="text-[8px] mt-1">PJH</div>
              </div>
              <div className="mt-16 relative bg-blue-500 text-white px-4 py-2 rounded-2xl inline-flex items-center self-end">
                ABOUT ME
                <div className="absolute bottom-1 right-2 w-2 h-4 bg-blue-500 rotate-45 translate-y-1/2"></div>
              </div>
              <div className="relative bg-blue-500 text-white px-4 py-2 rounded-2xl inline-flex items-center self-end">
                CONTACT
                <div className="absolute bottom-1 right-2 w-2 h-4 bg-blue-500 rotate-45 translate-y-1/2"></div>
              </div>
              <div className="relative bg-gray-300 px-4 py-2 rounded-2xl inline-flex items-center self-start">
                click 😎
                <div className="absolute bottom-1 left-2 w-4 h-4 bg-gray-300 rotate-45 translate-y-1/2"></div>
              </div>
            </div>
          </>
        );

      case 'detail':
        return (
          <>
            <div className="h-[200px] w-full flex justify-center items-center bg-white rounded-t-lg">
              <img
                src={`./images/${image}`}
                alt={title}
                className="w-full h-full object-cover rounded-t-lg scale-[1.35] transition-transform duration-500 ease-in-out group-hover:scale-[1.0]"
              />
            </div>
            <div className="h-[100px] flex justify-between items-center p-2 bg-[#FBF4E6] z-10">
              <div className="w-full flex flex-col justify-center">
                <span className="text-lg font-bold italic leading-tight text-center">
                  {title}
                </span>
              </div>
              <div className="flex gap-1 ">
                <a
                  className="flex flex-col justify-center items-center cursor-pointer perspective-[600px]"
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full h-[42px] w-[42px] bg-white border-[1px] border-gray-400 shadow-xl">
                    <img
                      src="./images/web-icon.png"
                      alt="website"
                      className="h-[32px] w-[32px] object-cover transition-transform duration-700 ease-in-out
                      hover:[transform:rotateY(360deg)]
                      [transform-style:preserve-3d]"
                    />
                  </div>
                  <span className="text-xs font-bold">SITE</span>
                </a>
                <a
                  className="flex flex-col justify-center items-center cursor-pointer perspective-[600px]"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center rounded-full h-[42px] w-[42px] bg-white border-[1px] border-gray-400 shadow-xl">
                    <img
                      src="./images/github-mark.png"
                      alt="github"
                      className="h-[32px] w-[32px] object-cover transition-transform duration-700 ease-in-out
                      hover:[transform:rotateY(360deg)]
                      [transform-style:preserve-3d]"
                    />
                  </div>
                  <span className="text-xs font-bold">GITHUB</span>
                </a>
              </div>
            </div>
          </>
        );

      case 'image':
        return (
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <img
              src={`./images/${image}`}
              alt="card image"
              className="w-full h-full object-cover"
            />
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full">
            <span>{title}</span>
          </div>
        );
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: isHovered ? 9999 : zIndex, ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-[300px] w-[200px] rounded-xl flex flex-col 
                 bg-[#f5f5f5] border border-gray-600 
                 overflow-hidden
                 transition-all duration-600 transform
                 ${variant === 'title' || variant === 'detail' ? 'group hover:scale-115 hover:shadow-[0_20px_50px_rgba(100,150,255,0.6)]' : ''}`}
        onClick={onModalClick}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Card;
