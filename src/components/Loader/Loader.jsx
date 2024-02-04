import React, { Component } from 'react';
import { DNA } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{ position: 'fixed', top: '50%', left: '50%' }}
        wrapperClass="dna-wrapper"
      />
    );
  }
}
