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

const LatestReviews = (props) => {
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
        <div className="embla__buttons pb-10 ">
          <div className="rounded-full  border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="rounded-full  border hover:bg-[#1C1C1D] hover:translate-x-0 border-gray-200">
            {" "}
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  ">
          {images?.map((imageUrl, index) => (
            <div className="embla__slide " key={index}>
              <div className="rounded-3xl border py-10 hover:bg-[#1C1C1D] hover:translate-x-0 border-[#282829] flex items-center justify-center">
             
                <div className=" flex  text-center">
               
                    <img
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="h-[40px] w-[100px] bg-cover  rounded-full object-cover mb-4"
                    />
               
                  <div className="flex flex-col justify-start ">
                    
                    <img
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="h-[170px] bg-cover w-[100px] object-cover mx-auto mb-4"
                    />

                    <span>Scythe (Arc of a Scythe, #1)</span>
                    <span className="block text-gray-500">
                      by Neal Shusterman
                    </span>
                    <div className="flex py-5  gap-2">
                      <span>frida</span>
                      <div className="w-1 h-1 bg-gray-300 mt-3 rounded-full flex items-center justify-center" />
                      <span>16 Mar 2024</span>
                    </div>
                    
                    <div>
                      <h6>
                        Reviews<span className=" text-center text-gray-500"> Vicious</span>{" "}
                      </h6>
                      <h6 className="text-center border-l ">
                        It was easy and fast to read.
                        It was easy and fast to read.It was easy and fast to read.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;
