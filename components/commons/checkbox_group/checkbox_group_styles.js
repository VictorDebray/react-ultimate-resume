"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -spacing
    },
    checkboxField: {
      margin: spacing
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  };
};

exports.styles = styles;