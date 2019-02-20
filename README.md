# use-connect

The replacement of react-redux.connect.

```javascript
// from
import { connect } from 'react-redux';
connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component);

// to
import { useConnect } from 'use-connect';
const Component = (props) => {
  const {...} = useConnect(props, mapStateToProps, mapDispatchToProps, mergeProps);
  return ...
}

// or
import { useRedux } from 'use-connect';
const Component = () => {
  const [state, dispatch] = useRedux();
  return ...
}
```

Update react-redux@6 before use this.

Inspired by [use-redux](https://github.com/flepretre/use-redux)
