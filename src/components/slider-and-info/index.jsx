import React from 'react';
import PropTypes from 'prop-types';
import style from './slider-and-info.scss';
import SimpleSlider from '../slider';

const {
  container,
  inputContainer,
  input,
  sliderContainer,
  rangeAmount,
} = style;

const SliderAndInfo = ({
  title,
  inputValue,
  sliderValue,
  setValue,
  minRange,
  maxRange,
  rangeText,
}) => (
  <div className={container}>
    <div className={inputContainer}>
      <p>{title}</p>
      <input
        type="text"
        value={inputValue}
        onChange={() => {}}
        className={input}
      />
    </div>
    <div className={sliderContainer}>
      <SimpleSlider
        value={sliderValue}
        setValue={setValue}
        min={minRange}
        max={maxRange}
      />
      <div className={rangeAmount}>
        <p>{rangeText.start}</p>
        <p>{rangeText.end}</p>
      </div>
    </div>
  </div>
);

const { string, number, func, objectOf } = PropTypes;

SliderAndInfo.propTypes = {
  title: string,
  inputValue: string,
  sliderValue: number,
  setValue: func,
  minRange: number,
  maxRange: number,
  rangeText: objectOf(PropTypes.string),
};

export default SliderAndInfo;
