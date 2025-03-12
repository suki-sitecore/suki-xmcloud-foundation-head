import React, { useMemo } from 'react';

export interface RatingStarsProps {
  value: number;
}

const RateStar = (): JSX.Element => {
  return (
    <span>
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.272.139 9.092 4.7l4.61.37c.35 0 .36.411.18.56l-3.55 3.188 1.11 4.752c.07.212-.3.465-.45.349L6.972 11.3l-4 2.64c-.2.169-.51-.053-.41-.317l1.16-4.857-3.65-3.2c-.15-.127-.05-.486.15-.507l4.74-.37L6.732.107c.06-.148.49-.148.54.032Z"
          fill="#BABABA"
        ></path>
      </svg>
    </span>
  );
};

const RateStarActive = (): JSX.Element => {
  return (
    <span>
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.272.139 9.092 4.7l4.61.37c.35 0 .36.411.18.56l-3.55 3.188 1.11 4.752c.07.212-.3.465-.45.349L6.972 11.3l-4 2.64c-.2.169-.51-.053-.41-.317l1.16-4.857-3.65-3.2c-.15-.127-.05-.486.15-.507l4.74-.37L6.732.107c.06-.148.49-.148.54.032Z"
          fill="#000000"
        ></path>
      </svg>
    </span>
  );
};

export const RatingStars = (props: RatingStarsProps): JSX.Element => {
  const rateStar = useMemo(() => {
    return <RateStar />;
  }, []);

  const rateStarActive = useMemo(() => {
    return <RateStarActive />;
  }, []);

  const stars = [1, 2, 3, 4, 5];
  const value = Math.max(0, Math.min(5, props.value || 0));
  const activeStarsCount = Math.floor(value);
  const fractionStarsValue = value - activeStarsCount;

  return (
    <div className="rating-stars">
      <div className="rating-stars-back">
        {stars.map((_v, idx) => {
          return <span key={`b-${idx}`}>{rateStar}</span>;
        })}
      </div>
      <div className="rating-stars-front">
        {[...new Array(activeStarsCount)].map((_v, idx) => {
          return <span key={`f-${idx}`}>{rateStarActive}</span>;
        })}
        {fractionStarsValue > 0.0 && (
          <span style={{ width: `${fractionStarsValue * 100}%` }}>{rateStarActive}</span>
        )}
      </div>
    </div>
  );
};
