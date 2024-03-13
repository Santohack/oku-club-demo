// EmblaCarousel.jsx

"use client";
import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { images, options } = props; // Use 'images' instead of 'slides'
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className=" embla">
      <div className="embla__controls  ">
        <div className="embla__buttons py-10">
         <div className="rounded-full  border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200">
         <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
         </div>
         <div className="rounded-full  border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200"> <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /></div>
         
        </div>

        {/* <div className="embla__dots text-gray-300">
          {scrollSnaps?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'text-gray-300 embla__dot'.concat(
                index === selectedIndex ? 'text-gray-300  embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  ">
          {images?.map((imageUrl, index) => (
            <div className="embla__slide " key={index}>
              <div className="rounded-3xl border py-10 hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={imageUrl}
                    width={300}
                    height={100}
                    alt={`Slide ${index + 1}`}
                    className="h-[300px] w-[200px] object-cover mx-auto mb-4"
                  />
                  <span>Scythe (Arc of a Scythe, #1)</span>
                  <span className="block text-gray-500">
                    by Neal Shusterman
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
