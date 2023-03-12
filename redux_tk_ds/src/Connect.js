import { connect } from 'react-redux';
import First from './First';
import Second from './Second';

const mapStateToProps = state => {
  return {
    myState: state.myState
  };
};

export const FirstContainer = connect(mapStateToProps)(First);
export const SecondContainer = connect(mapStateToProps)(Second);
