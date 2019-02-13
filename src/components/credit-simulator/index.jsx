import React, { Component } from 'react';
import style from './credit-simulator.scss';
import SimpleSlider from '../slider';
import SliderAndInfo from '../slider-and-info';

class CreditSimulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 5000,
      term: 3,
    };
  }

  setTotalAmount = mount => {
    this.setState({ totalAmount: mount });
  };

  setTerm = num => {
    this.setState({ term: num });
  };

  render() {
    const nf = new Intl.NumberFormat();
    const numberWithComma = `$${nf.format(this.state.totalAmount)}`;

    return (
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.title}>
            <h1>Simulá tu Crédito</h1>
          </div>

          <div className={style.subContainer}>
            {
              <SliderAndInfo
                title="MONTO TOTAL"
                inputValue={numberWithComma}
                minRange={5000}
                maxRange={50000}
                sliderValue={this.state.totalAmount}
                setValue={this.setTotalAmount}
                rangeText={{ start: '$5.000', end: '$50.000' }}
              />
            }

            {
              <SliderAndInfo
                title="PLAZO"
                inputValue={this.state.term}
                minRange={3}
                maxRange={24}
                sliderValue={this.state.term}
                setValue={this.setTerm}
                rangeText={{ start: '3', end: '24' }}
              />
            }

            <div className={style.installments}>
              <h3>CUOTA FIJA POR MES</h3>
              <h1>$ {nf.format(this.state.totalAmount / this.state.term)}</h1>
            </div>
            <div className={style.buttons}>
              <button className={style.creditButton}>OBTENÉ CRÉDITO</button>
              <button className={style.detailsButton}>
                VER DETALLES DE <br />
                CUOTAS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditSimulator;
