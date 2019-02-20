import { useContext, useEffect, useState } from 'react';
import { Context } from 'react-redux';

export const useRedux = () => {
  const store = useContext(Context);
  const [reduxState, setReduxState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setReduxState(store.getState()));
    return () => unsubscribe();
  });

  return [reduxState, store.dispatch];
};

const obj = () => ({});
const merge = (a = {}, b = {}, c = {}) => ({ ...c, ...a, ...b });

export const useConnect = (
  props,
  mapStateToProps = obj,
  mapDispatchToProps = obj,
  mergeProps = merge,
) => {
  // TODO memo
  const [state, dispatch] = useRedux();
  const stateProps = mapStateToProps(state, props);
  const dispatchProps = mapDispatchToProps(dispatch, props);
  const mergedProps = mergeProps(stateProps, dispatchProps, props);
  return mergedProps;
};
