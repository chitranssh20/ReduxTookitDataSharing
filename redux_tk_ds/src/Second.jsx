import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Second = () => {

  const selectA = state => state.datareducer.a;
  const value = useSelector(selectA);
  console.log(value);
  // const [dummyState, setDummyState] = React.useState(0);

  const [displayValue, setDisplayValue] = React.useState(value); 
  React.useEffect(() => {
    console.log(value);
    setDisplayValue(value);
  }, [value]);

  return (
    <>
      <div>Second</div>
     <h2>  {displayValue} </h2>
    </>
  );
};
const mapStateToProps = (state) => ({
  value: state.datareducer.a,
});

export default connect(mapStateToProps)(Second);
