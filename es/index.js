import _Overlay from "@alifd/next/es/overlay";
import _Box from "@alifd/next/es/box";
import _Button from "@alifd/next/es/button";
import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useState, useEffect, forwardRef } from 'react';
import RiilIcon from '@riil-frontend/component-riil-icon';
import PropTypes from 'prop-types';
import './index.scss';
var IconSelect = /*#__PURE__*/forwardRef(function (props, _ref) {
  var onChange = props.onChange,
      value = props.value,
      iconList = props.iconList,
      defaultValue = props.defaultValue,
      buttonProps = props.buttonProps,
      overlayProps = props.overlayProps,
      iconSize = props.iconSize;

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = useState(value || defaultValue),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var ref = useRef();
  useEffect(function () {
    if (value) {
      setCurrent(value);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, _extends({
    className: "icon-select-btn",
    iconSize: iconSize,
    ref: ref,
    onClick: function onClick() {
      setVisible(!visible);
    }
  }, buttonProps), /*#__PURE__*/React.createElement(RiilIcon, {
    type: current,
    size: iconSize
  })), /*#__PURE__*/React.createElement(_Overlay, _extends({
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
  }, overlayProps), /*#__PURE__*/React.createElement("div", {
    className: "icon-select-content"
  }, /*#__PURE__*/React.createElement(_Box, {
    spacing: 12,
    wrap: true,
    direction: "row"
  }, iconList.map(function (item) {
    return /*#__PURE__*/React.createElement(_Button, {
      iconSize: iconSize,
      key: item,
      onClick: function onClick() {
        onChange && onChange(item);

        if (!('value' in props)) {
          setCurrent(item);
        }
      }
    }, /*#__PURE__*/React.createElement(RiilIcon, {
      type: item,
      size: iconSize
    }));
  })))));
});
IconSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  iconList: PropTypes.array,
  buttonProps: PropTypes.any,
  overlayProps: PropTypes.any,
  iconSize: PropTypes.string
};
IconSelect.defaultProps = {
  iconSize: 'xl'
};
export default IconSelect;