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

const CollectionUpdates = (props) => {
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
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__buttons right-0 pb-10">
          <div className="rounded-full border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="rounded-full border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images?.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative rounded-3xl border py-10 hover:bg-[#1C1C1D] hover:translate-x-0 border-[#282829] flex items-center justify-center">
                <div className="text-center">
                  <span className="block py-3 text-gray-500">
                    Listend to autobook
                  </span>
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="h-[170px] bg-cover w-[100px] object-cover mx-auto mb-4"
                  />
                </div>
              </div>
             
              <div className=" flex-col relative inset-x-0 bottom-9 flex justify-center items-center">
                <img
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="h-[70px] bg-cover  border-4 border-[#080808] w-[70px] rounded-full object-cover mx-auto mb-4"
                />
                <span className="block pb-3">Scythe </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionUpdates;
