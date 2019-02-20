"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnect = exports.useRedux = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useRedux = function useRedux() {
  var store = (0, _react.useContext)(_reactRedux.Context);

  var _useState = (0, _react.useState)(store.getState()),
      _useState2 = _slicedToArray(_useState, 2),
      reduxState = _useState2[0],
      setReduxState = _useState2[1];

  (0, _react.useEffect)(function () {
    var unsubscribe = store.subscribe(function () {
      return setReduxState(store.getState());
    });
    return function () {
      return unsubscribe();
    };
  });
  return [reduxState, store.dispatch];
};

exports.useRedux = useRedux;

var obj = function obj() {
  return {};
};

var merge = function merge() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread({}, c, a, b);
};

var useConnect = function useConnect(props) {
  var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;
  var mapDispatchToProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : obj;
  var mergeProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : merge;

  // TODO memo
  var _useRedux = useRedux(),
      _useRedux2 = _slicedToArray(_useRedux, 2),
      state = _useRedux2[0],
      dispatch = _useRedux2[1];

  var stateProps = mapStateToProps(state, props);
  var dispatchProps = mapDispatchToProps(dispatch, props);
  var mergedProps = mergeProps(stateProps, dispatchProps, props);
  return mergedProps;
};

exports.useConnect = useConnect;