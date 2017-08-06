import React, { Component, PropTypes } from 'react';
import styles from './ConvertedResult.css';

const ConvertedResult = ({ startingAmount, startingDollarType, targetAmount, targetDollarType }) => (
    <div className={styles.result}>
      <div>{startingAmount} {startingDollarType} equals </div>
      <strong>{parseFloat(Math.round(targetAmount * 100) / 100).toFixed(2)} {targetDollarType}</strong>
    </div>
);

export default ConvertedResult;
