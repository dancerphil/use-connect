# use-connect

The replacement of react-redux.connect.

## Notice

This is not for long-term usage. It is used in case that you are rewrite your component in hooks and thinking:

> Oh, I will just leave this connect method here and migrate the react part. I will do it later after react-redux introduce its own api.

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
