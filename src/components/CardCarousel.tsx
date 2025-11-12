import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Card from './Card';
import TitleCard from './TitleCard';
import { CARD_CONFIGS, FINAL_POSITIONS } from '../constants/cardData';
import About from './About';

const CardCarousel = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, []);

  const animateCards = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    CARD_CONFIGS.forEach((_, i) => {
      const card = cardRefs.current[i + 1];
      if (!card) return;
      const pos = FINAL_POSITIONS[i];
      tl.to(card, { rotateY: '+=180', x: pos.x, y: pos.y, duration: 1.45 }, 0);
    });

    tl.to(wrapperRef.current, { rotateY: '+=180', duration: 1.4 }, 0);

    return tl;
  };

  const handleCardClick = (index: number) => {
    if (index === 0 && !hasClicked) {
      setHasClicked(true);
      animateCards();
    }
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-[1000px] h-[600px] perspective-[1200px] mx-auto">
        <div
          ref={wrapperRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
          }}
        >
          <TitleCard
            zIndex={10}
            onCardClick={() => handleCardClick(0)}
            style={{ display: hasClicked ? 'none' : 'flex' }}
          />
          {CARD_CONFIGS.map((card, i) => {
            const isFirstCard = i === 0;
            return (
              <Card
                variant={card.type}
                key={i + 1}
                title={card.title}
                image={card.image}
                website={card.website}
                github={card.github}
                zIndex={i + 1}
                cardRef={(el) => (cardRefs.current[i + 1] = el)}
                onModalClick={isFirstCard ? () => handleModal() : undefined}
              />
            );
          })}
        </div>
      </div>
      {openModal && <About onClick={() => setOpenModal(false)} />}
    </div>
  );
};

export default CardCarousel;
