import React, { Component } from 'react';
import style from './credit-simulator.scss';
import SliderAndInfo from '../slider-and-info';

const {
  background,
  container,
  title,
  subContainer,
  installments,
  buttons,
  creditButton,
  detailsButton,
} = style;

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
    const { totalAmount, term } = this.state;

    const nf = new Intl.NumberFormat();
    const numberWithComma = `$${nf.format(totalAmount)}`;

    return (
      <div className={background}>
        <div className={container}>
          <div className={title}>
            <h1>Simulá tu Crédito</h1>
          </div>

          <div className={subContainer}>
            {
              <SliderAndInfo
                title="MONTO TOTAL"
                inputValue={numberWithComma}
                minRange={5000}
                maxRange={50000}
                sliderValue={totalAmount}
                setValue={this.setTotalAmount}
                rangeText={{ start: '$5.000', end: '$50.000' }}
              />
            }

            {
              <SliderAndInfo
                title="PLAZO"
                inputValue={`${term}`}
                minRange={3}
                maxRange={24}
                sliderValue={term}
                setValue={this.setTerm}
                rangeText={{ start: '3', end: '24' }}
              />
            }

            <div className={installments}>
              <h3>CUOTA FIJA POR MES</h3>
              <h1>$ {nf.format(totalAmount / term)}</h1>
            </div>
            <div className={buttons}>
              <button type="button" className={creditButton}>
                OBTENÉ CRÉDITO
              </button>
              <button type="button" className={detailsButton}>
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
