import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import DevTools from '../DevTools';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    }),
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
