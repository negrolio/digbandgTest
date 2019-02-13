import React from 'react';
import style from './slider-and-info.scss';
import SimpleSlider from '../slider';

const SliderAndInfo = props => (
  <div className={style.container}>
    <div className={style.inputContainer}>
      <p>{props.title}</p>
      <input
        type="text"
        step="0.01"
        value={props.inputValue}
        onChange={() => {}}
        className={style.input}
      />
    </div>
    <div className={style.sliderContainer}>
      <SimpleSlider
        value={props.sliderValue}
        setValue={props.setValue}
        min={props.minRange}
        max={props.maxRange}
      />
      <div className={style.rangeAmount}>
        <p>{props.rangeText.start}</p>
        <p>{props.rangeText.end}</p>
      </div>
    </div>
  </div>
);

export default SliderAndInfo;
