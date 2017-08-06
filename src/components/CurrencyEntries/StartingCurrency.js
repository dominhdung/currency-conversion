import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import currencyCodes  from '../../shared/currencyCodes';
import styles from './CurrencyEntries.css';

class SelectOptions extends Component {
    state = {
        startingCode: 'USD',
    };

    handleSelectChange = (event, index, value) => {
        this.setState({startingCode: value});
        this.props.getRates(
        {
            startingCode: value,
            targetCode: this.props.targetCode,
        });
    }


    handleInputTextChange = (event) => {
      this.props.changeAmount(parseFloat(event.target.value));
    }

    render() {
        return (
            <div className={styles.currencyEntering}>
                <TextField
                    hintText="Please enter"
                    type="number"
                    min="1"
                    onChange={this.handleInputTextChange}
                    defaultValue={1}

                    className={styles.input}
                />
                <SelectField
                    floatingLabelText="Dollar"
                    value={this.state.startingCode}
                    onChange={this.handleSelectChange}
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
    getRates: PropTypes.func,

  };
}

export default SelectOptions;
