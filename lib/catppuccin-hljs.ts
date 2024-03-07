"use strict";

import {CSSProperties} from "react";

const theme : Record<string, CSSProperties> =  {
    "hljs": {
        "display": "block",
        "overflowX": "auto",
        "padding": "0.5em",
        // "color": "#c6d0f5",
        "color": "#ffffff",
        "background": "#303446"
    },
    "hljs-comment": {
        "color": "#626880",
        "fontStyle": "italic"
    },
    "hljs-quote": {
        "color": "#a6d189",
        "fontStyle": "italic"
    },
    "hljs-doctag": {
        "color": "#e78284"
    },
    "hljs-keyword": {
        "color": "#ca9ee6"
    },
    "hljs-formula": {
        "color": "#81c8be"
    },
    "hljs-section": {
        "color": "#8caaee"
    },
    "hljs-name": {
        "color": "#ca9ee6"
    },
    "hljs-selector-tag": {
        "color": "#e5c890"
    },
    "hljs-deletion": {
        "color": "#e78284",
        "background": "rgba(231,130,132,.15)"
    },
    "hljs-subst": {
        "color": "#a5adce"
    },
    "hljs-literal": {
        "color": "#ef9f76"
    },
    "hljs-string": {
        "color": "#a6d189"
    },
    "hljs-regexp": {
        "color": "#f4b8e4"
    },
    "hljs-addition": {
        "color": "#a6d189",
        "background": "rgba(166,209,137,.15)"
    },
    "hljs-attribute": {
        "color": "#a6d189"
    },
    "hljs-meta-string": {
        "color": "#ef9f76"
    },
    "hljs-built_in": {
        "color": "#e78284"
    },
    "hljs-class .hljs-title": {
        "color": "#e5c890"
    },
    "hljs-attr": {
        "color": "#8caaee"
    },
    "hljs-variable": {
        "color": "#ca9ee6"
    },
    "hljs-template-variable": {
        "color": "#eebebe"
    },
    "hljs-type": {
        "color": "#e5c890"
    },
    "hljs-selector-class": {
        "color": "#81c8be"
    },
    "hljs-selector-attr": {
        "color": "#ca9ee6"
    },
    "hljs-selector-pseudo": {
        "color": "#81c8be"
    },
    "hljs-number": {
        "color": "#ef9f76"
    },
    "hljs-symbol": {
        "color": "#eebebe"
    },
    "hljs-bullet": {
        "color": "#81c8be"
    },
    "hljs-link": {
        "color": "#85c1dc",
        "textDecoration": "underline",
        "fontStyle": "italic"
    },
    "hljs-meta": {
        "color": "#ef9f76"
    },
    "hljs-selector-id": {
        "color": "#8caaee"
    },
    "hljs-title": {
        "color": "#8caaee"
    },
    "hljs-emphasis": {
        "color": "#e78284",
        "fontStyle": "italic"
    },
    "hljs-strong": {
        "color": "#e78284",
        "fontWeight": "bold"
    }
};

export default theme;