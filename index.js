'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toGetType = function toGetType(item) {
    return Object.prototype.toString.call(item).slice(8, -1);
};
var toCheckClassName = function toCheckClassName() {
    return (0, _from2.default)(arguments).filter(function (item) {
        return !!item;
    }).join(' ');
};

var toHandleParamType = function toHandleParamType(param, type_array, other) {
    var type_array_type = toGetType(type_array);
    if (type_array_type === 'Function') {
        other = type_array;
        type_array = [];
    }
    if (!param || toGetType(type_array) !== "Array") {
        if (!!other) {
            return other(param);
        } else {
            return '';
        }
    }
    var type = param.$$typeof || toGetType(param);
    var param_func = (0, _lodash.find)(type_array, { type: type.toString() });
    if (!!param_func) {
        return param_func.action(param);
    } else if (!!other) {
        return other(param);
    } else {
        return '';
    }
};

function HList(props) {
    var className = props.className,
        datas = props.datas,
        children = props.children,
        renderItem = props.renderItem;

    datas = toHandleParamType(datas, [{ type: "Array", action: function action(data) {
            return data;
        } }], function () {
        return [];
    });
    return _react2.default.createElement(
        'div',
        { id: 'hdz-list-view', className: toCheckClassName(className) },
        !!children ? children : datas.map(renderItem)
    );
}

function Item(_ref) {
    var className = _ref.className,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-item ' + toCheckClassName(className) },
        children
    );
}

function Image(_ref2) {
    var className = _ref2.className,
        image = _ref2.image,
        radius = _ref2.radius;

    var radiusClassName = !!radius ? 'hdz-list-image-raidus' : '';
    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-image ' + toCheckClassName(className, radiusClassName) },
        _react2.default.createElement('img', { src: image, alt: className })
    );
}

function Content(_ref3) {
    var className = _ref3.className,
        children = _ref3.children;

    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-content ' + toCheckClassName(className) },
        children
    );
}

function Action(_ref4) {
    var className = _ref4.className,
        datas = _ref4.datas;

    datas = toHandleParamType(datas, [{ type: "Array", action: function action(datas) {
            return datas;
        } }], function () {
        return [];
    });
    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-action ' + toCheckClassName(className) },
        datas.map(function (data, i) {
            return _react2.default.createElement(
                'span',
                { className: 'hdz-list-extra-block', onClick: data.action, key: i },
                data.text
            );
        })
    );
}

function Title(_ref5) {
    var className = _ref5.className,
        children = _ref5.children;

    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-title ' + toCheckClassName(className) },
        children
    );
}

function Tags(_ref6) {
    var className = _ref6.className,
        tags = _ref6.tags;

    tags = toHandleParamType(tags, [{ type: "Array", action: function action(data) {
            return data;
        } }], function () {
        return [];
    });
    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-tags ' + toCheckClassName(className) },
        tags.map(function (item, i) {
            return _react2.default.createElement(
                'span',
                { key: i, style: { color: item.color, borderColor: item.color } },
                item.text
            );
        })
    );
}

function Highlight(_ref7) {
    var className = _ref7.className,
        highlight = _ref7.highlight,
        lowlight = _ref7.lowlight,
        color = _ref7.color;

    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-highlight ' + toCheckClassName(className) },
        _react2.default.createElement(
            'span',
            { style: { color: color } },
            highlight
        ),
        _react2.default.createElement(
            'span',
            null,
            lowlight
        )
    );
}
function Counter(_ref8) {
    var className = _ref8.className,
        onChange = _ref8.onChange;

    var _useState = (0, _react.useState)({
        value: 1
    }),
        _useState2 = (0, _slicedToArray3.default)(_useState, 2),
        thisState = _useState2[0],
        setThisState = _useState2[1];

    var toHandleChange = function toHandleChange(e) {
        var value = e.target.value.replace(/[^\d]/g, '');
        if (thisState.value === value) return;
        onChange(value);
        setThisState({ value: value });
    };
    var toHandleClick = function toHandleClick(type) {
        return function () {
            if (type === 'sub') {
                if (!thisState.value) return;
                var value = thisState.value * 1 - 1;
                setThisState({ value: value });
                onChange(value);
            } else if (type === 'plus') {
                var _value = thisState.value * 1 + 1;
                setThisState({ value: _value });
                onChange(_value);
            }
        };
    };
    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-counter ' + toCheckClassName(className) },
        _react2.default.createElement(
            'div',
            { className: 'hdz-counter' },
            _react2.default.createElement(
                'div',
                { className: 'hdz-counter-sub', onClick: toHandleClick('sub') },
                '-'
            ),
            _react2.default.createElement(
                'div',
                { className: 'hdz-counter-show' },
                _react2.default.createElement('input', { type: 'text', placeholder: '', onChange: toHandleChange, value: thisState.value })
            ),
            _react2.default.createElement(
                'div',
                { className: 'hdz-counter-plus', onClick: toHandleClick('plus') },
                '+'
            )
        )
    );
}

function Extra(_ref9) {
    var className = _ref9.className,
        children = _ref9.children;

    return _react2.default.createElement(
        'div',
        { className: 'hdz-list-extra ' + toCheckClassName(className) },
        children
    );
}

HList['Item'] = Item;
HList['Item']['Image'] = Image;
HList['Item']['Content'] = Content;
HList['Item']['Content']['Title'] = Title;
HList['Item']['Content']['Tags'] = Tags;
HList['Item']['Content']['Highlight'] = Highlight;
HList['Item']['Content']['Counter'] = Counter;
HList['Item']['Content']['Extra'] = Extra;
HList['Item']['Action'] = Action;
exports.default = HList;
