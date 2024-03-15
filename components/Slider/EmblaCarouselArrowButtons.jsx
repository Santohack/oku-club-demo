"use client";
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        height="20"
        viewBox="0 0 28 28"
        width="20"
        className="css-y7zllx"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          fill="currentColor"
          d="M13.9421 7.30587C14.3254 7.70342 14.3139 8.33648 13.9164 8.71985L9.47768 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H9.47768L13.9164 19.2802C14.3139 19.6635 14.3254 20.2966 13.9421 20.6941C13.5587 21.0917 12.9256 21.1032 12.5281 20.7198L6.30586 14.7198C6.11041 14.5314 6 14.2715 6 14C6 13.7285 6.11041 13.4686 6.30586 13.2802L12.5281 7.28016C12.9256 6.8968 13.5587 6.90831 13.9421 7.30587Z"
        ></path>
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg height="20" className="flex items-center rotate-180" viewBox="0 0 28 28" width="20" class="css-1wp5krq"
        fill="currentColor">
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          fill="currentColor"
          d="M13.9421 7.30587C14.3254 7.70342 14.3139 8.33648 13.9164 8.71985L9.47768 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H9.47768L13.9164 19.2802C14.3139 19.6635 14.3254 20.2966 13.9421 20.6941C13.5587 21.0917 12.9256 21.1032 12.5281 20.7198L6.30586 14.7198C6.11041 14.5314 6 14.2715 6 14C6 13.7285 6.11041 13.4686 6.30586 13.2802L12.5281 7.28016C12.9256 6.8968 13.5587 6.90831 13.9421 7.30587Z"
        ></path>
      </svg>
      {children}
    </button>
  );
};
