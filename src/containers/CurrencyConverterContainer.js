import React, { Component, PropTypes } from 'react';
import bindActionCreators from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { retrieveRates, doConversion, changeAmount, changeTarget, updateCurrentRate } from '../actions/actions';
import SelectOptions from "../components/CurrencyEntries/StartingCurrency";
import ConvertedResult from "../components/ConvertedResult/ConvertedResult";
import TargetCurrency from "../components/CurrencyEntries/TargetCurrency";

class CurrencyConverterContainer extends Component {
  static propTypes = {
    rates: PropTypes.object,
    startingCode: PropTypes.string,
    getRates: PropTypes.func,
    changeAmount: PropTypes.func,
    changeTarget: PropTypes.func,
    updateCurrentRate: PropTypes.func,
  };

  componentDidMount(){
    this.props.getRates(
      {
          startingCode: 'USD',
          targetCode: 'USD',
          startingAmount: 1
      });
  }


  render() {
    const { rates, startingCode, startingAmount, currentRate, targetCode, targetAmount } = this.props;
    return (
    <div>
      <Link className="about" to='about'>About</Link>
      <SelectOptions
          getRates={this.props.getRates}
          changeAmount={this.props.changeAmount}
          targetCode={targetCode}
      />
      <TargetCurrency
          changeTarget={this.props.changeTarget}
          updateCurrentRate={this.props.updateCurrentRate}
          rates={rates}
          targetAmount={targetAmount}
      />
      <ConvertedResult startingDollarType={startingCode}
                       startingAmount={startingAmount}
                       targetDollarType={targetCode}
                       targetAmount={targetAmount}
      />


    </div>

    );
  }
}

/*const mapStateToProps = (state, ownProps) => ({
  rates: state.rateStore.rates,
  conversion: state.rateStore.conversion,
  startingCode: state.rateStore.startingCode,
  startingAmount: state.rateStore.startingAmount,
  targetCode: state.rateStore.targetCode,
  targetAmount: state.rateStore.targetAmount,
  currentRate: state.rateStore.currentRate,

});*/
const mapStateToProps = state => ({
  rates: state.reducer.rates,
  conversion: state.reducer.conversion,
  startingCode: state.reducer.startingCode,
  startingAmount: state.reducer.startingAmount,
  targetCode: state.reducer.targetCode,
  targetAmount: state.reducer.targetAmount,
  currentRate: state.reducer.currentRate,

});

const mapDispatchToProps = dispatch => ({
    getRates: payload => dispatch(retrieveRates(payload)),
    changeAmount: payload => dispatch(changeAmount(payload)),
    changeTarget: payload => dispatch(changeTarget(payload)),
    updateCurrentRate: payload => dispatch(updateCurrentRate(payload)),
  });


/*
const mapDispatchToProps = dispatch => ({
  getRates: () => dispatch(retrieveRates()),
  doConversion: () => dispatch(doConversion()),
  changeAmount: () => dispatch(changeAmount()),
  changeTarget: () => dispatch(changeTarget()),
  updateCurrentRate: () => dispatch(updateCurrentRate())
});
*/

/*const mapDispatchToProps = dispatch => {
  console.log(doConversion)
  bindActionCreators({
    getRates: payload => retrieveRates(payload),
    doConversion: payload => doConversion(payload),
    changeAmount:payload => changeAmount(payload),
    changeTarget: payload => changeTarget(payload),
    updateCurrentRate: payload => updateCurrentRate(payload)
  }, dispatch);
}*/

/*const mapDispatchToProps = dispatch => {
  console.log(doConversion)
  return bindActionCreators({
    getRates: retrieveRates,
    doConversion: doConversion,
    changeAmount: changeAmount,
    changeTarget: changeTarget,
    updateCurrentRate: updateCurrentRate
  }, dispatch);
}*/


/*const mapDispatchToProps = dispatch => ({
  getRates: payload => dispatch(retrieveRates(payload)),

});*/


/*{
  console.log(retrieveRates)
    bindActionCreators({
      getRates: retrieveRates,
      /!*doConversion: doConversion,
      changeAmount: changeAmount,
      changeTarget: changeTarget,
      updateCurrentRate: updateCurrentRate,*!/
    }, dispatch)};*/





export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrencyConverterContainer);
