"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _overlay = _interopRequireDefault(require("@alifd/next/lib/overlay"));

var _box = _interopRequireDefault(require("@alifd/next/lib/box"));

var _button = _interopRequireDefault(require("@alifd/next/lib/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _componentRiilIcon = _interopRequireDefault(require("@riil-frontend/component-riil-icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IconSelect = /*#__PURE__*/(0, _react.forwardRef)(function (props, _ref) {
  var onChange = props.onChange,
      value = props.value,
      iconList = props.iconList,
      defaultValue = props.defaultValue,
      buttonProps = props.buttonProps,
      overlayProps = props.overlayProps,
      iconSize = props.iconSize;

  var _useState = (0, _react.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = (0, _react.useState)(value || defaultValue),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (value) {
      setCurrent(value);
    }
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_button["default"], (0, _extends2["default"])({
    className: "icon-select-btn",
    iconSize: iconSize,
    ref: ref,
    onClick: function onClick() {
      setVisible(!visible);
    }
  }, buttonProps), /*#__PURE__*/_react["default"].createElement(_componentRiilIcon["default"], {
    type: current,
    size: iconSize
  })), /*#__PURE__*/_react["default"].createElement(_overlay["default"], (0, _extends2["default"])({
    wrapperClassName: "IconSelect",
    visible: visible,
    target: function target() {
      return ref.current;
    },
    safeNode: function safeNode() {
      return ref.current;
    },
    onRequestClose: function onRequestClose() {
      setVisible(false);
    }
  }, overlayProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon-select-content"
  }, /*#__PURE__*/_react["default"].createElement(_box["default"], {
    spacing: 12,
    wrap: true,
    direction: "row"
  }, iconList.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_button["default"], {
      iconSize: iconSize,
      key: item,
      onClick: function onClick() {
        onChange && onChange(item);

        if (!('value' in props)) {
          setCurrent(item);
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_componentRiilIcon["default"], {
      type: item,
      size: iconSize
    }));
  })))));
});
IconSelect.propTypes = {
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  iconList: _propTypes["default"].array,
  buttonProps: _propTypes["default"].any,
  overlayProps: _propTypes["default"].any,
  iconSize: _propTypes["default"].string
};
IconSelect.defaultProps = {
  iconSize: 'xl'
};
var _default = IconSelect;
exports["default"] = _default;