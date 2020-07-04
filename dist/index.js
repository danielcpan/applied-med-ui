'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');

var useDelayedRender = function (delay) {
    var _a = React.useState(true), delayed = _a[0], setDelayed = _a[1];
    React.useEffect(function () {
        var timeout = setTimeout(function () { return setDelayed(false); }, delay);
        return function () { return clearTimeout(timeout); };
    }, []);
    return function (fn) { return !delayed && fn(); };
};

var DelayedRender = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 200 : _b, children = _a.children;
    return useDelayedRender(delay)(function () { return children; });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Loading = function (_a) {
    var _b = _a.isFullPageCenter, isFullPageCenter = _b === void 0 ? false : _b, _c = _a.message, delay = _a.delay, restProps = __rest(_a, ["isFullPageCenter", "message", "delay"]);
    var theme = styles.useTheme();
    return (React__default.createElement(DelayedRender, { delay: delay },
        React__default.createElement(core.Grid, { container: true, justify: "center", alignItems: "center", style: {
                height: '100%',
                textAlign: 'center',
                marginTop: isFullPageCenter ? theme.spacing(-8) : 'auto'
            }, spacing: 2 },
            React__default.createElement(core.Grid, { item: true },
                React__default.createElement(core.CircularProgress, null)))));
};

var render = function (Comp, props) {
    return isReactComponent(Comp) ? React__default.createElement(Comp, __assign({}, props)) : Comp;
};
var isReactComponent = function (component) {
    return (isClassComponent(component) || typeof component === 'function' || isExoticComponent(component));
};
var isClassComponent = function (component) {
    return (typeof component === 'function' &&
        (function () {
            var proto = Object.getPrototypeOf(component);
            return proto.prototype && proto.prototype.isReactComponent;
        })());
};
var isExoticComponent = function (component) {
    return (typeof component === 'object' &&
        typeof component.$$typeof === 'symbol' &&
        ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description));
};

var StyledMuiBackdrop = styles.withStyles(function (theme) { return ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
}); })(core.Backdrop);
var LoadingOverlay = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 200 : _b, children = _a.children, restProps = __rest(_a, ["delay", "children"]);
    var theme = styles.useTheme();
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(DelayedRender, { delay: delay },
            React__default.createElement(StyledMuiBackdrop, { open: true },
                React__default.createElement(core.CircularProgress, { style: { marginLeft: theme.spacing(9) } }))),
        render(children, restProps)));
};

exports.DelayedRender = DelayedRender;
exports.Loading = Loading;
exports.LoadingOverlay = LoadingOverlay;
//# sourceMappingURL=index.js.map
