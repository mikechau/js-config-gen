import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import storeShape from 'react-redux/src/utils/'
import App from '../App';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
