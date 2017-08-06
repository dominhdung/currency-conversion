import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import currencyCodes  from '../../shared/currencyCodes';
import styles from './CurrencyEntries.css';

class TargetCurrency extends Component {

  state = {
    value: 'USD',
  };

  handleChange = (event, index, value) => {
    this.setState({value});
    this.props.changeTarget(value)
    let rate = 1;
    Object.keys(this.props.rates).map((key) => {
      if(key===value) {
        return (rate = this.props.rates[key]);
      }
    })

    this.props.updateCurrentRate(rate)

  }


  render() {
    return (
        <div className={styles.currencyEntering}>
          <TextField id="text-field-target"
            disabled={true}
            value={this.props.targetAmount}
            className={styles.input}
          />
          <SelectField
              floatingLabelText="Dollar"
              value={this.state.value}
              onChange={this.handleChange}
              className={styles.select}
          >
            {currencyCodes.map(item => (
                    <MenuItem key={item.code} value={item.code} primaryText={item.name} />
                )
            )}

          </SelectField>

        </div>
    );
  }

  static propTypes = {

  };
}


export default TargetCurrency;
