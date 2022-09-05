module.exports = {
  ".badge": {
    "position": "relative",
    "display": "inline-flex",
    "alignItems": "center",
    "whiteSpace": "nowrap",
    "borderRadius": "9999px",
    "paddingTop": "0.14285714rem",
    "paddingBottom": "0.14285714rem",
    "paddingLeft": "0.71428571rem",
    "paddingRight": "0.71428571rem",
    "verticalAlign": "baseline",
    "fontSize": "1.000undefined",
    "fontWeight": "400",
    "lineHeight": "1.5"
  },
  ".badge-sm": {
    "paddingLeft": "0.57142857rem",
    "paddingRight": "0.57142857rem",
    "fontSize": "NaNundefined"
  },
  ".badge-sm.badge-avatar": {
    "paddingRight": "0.14285714rem"
  },
  ".badge-sm.badge-close-button": {
    "paddingLeft": "0.14285714rem"
  },
  ".badge-lg": {
    "paddingLeft": "0.85714286rem",
    "paddingRight": "0.85714286rem",
    "paddingTop": "0.28571429rem",
    "paddingBottom": "0.28571429rem"
  },
  ".badge-lg.badge-avatar": {
    "paddingRight": "0.42857143rem"
  },
  ".badge-lg.badge-close-button": {
    "paddingLeft": "0.42857143rem"
  },
  ".badge-dot::before": {
    "content": "\"\"",
    "marginLeft": "0.42857143rem",
    "display": "block",
    "height": "0.42857143rem",
    "width": "0.42857143rem",
    "borderRadius": "9999px",
    "backgroundColor": "currentColor",
    "opacity": "0.6"
  },
  ".badge-avatar": {
    "paddingRight": "0.28571429rem"
  },
  ".badge-avatar > img": {
    "marginLeft": "0.42857143rem",
    "height": "1.1428571rem",
    "width": "1.1428571rem",
    "borderRadius": "9999px",
    "OObjectFit": "cover",
    "objectFit": "cover"
  },
  ".badge-icon > .icon, \n    .badge-icon > svg": {
    "marginLeft": "0.42857143rem",
    "height": "0.85714286rem",
    "width": "0.85714286rem",
    "fill": "currentColor",
    "opacity": "0.6"
  },
  ".badge-icon--left > .icon, \n      .badge-icon--left > svg": {
    "order": "9999",
    "marginLeft": "0px",
    "marginRight": "0.42857143rem"
  },
  ".badge-close-button": {
    "paddingLeft": "0.28571429rem"
  },
  ".badge-close-button > button": {
    "position": "relative",
    "marginRight": "0.14285714rem",
    "display": "flex",
    "height": "1.1428571rem",
    "width": "1.1428571rem",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "9999px",
    "borderStyle": "none",
    "backgroundColor": "rgb(29 41 57 / var(--tw-bg-opacity))",
    "-TwBgOpacity": "0",
    "transitionProperty": [
      "color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter",
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter"
    ],
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
  },
  ".badge-close-button > button > svg": {
    "height": "0.85714286rem",
    "width": "0.85714286rem",
    "fill": "currentColor",
    "color": "currentColor"
  },
  ".badge-close-button > button:hover": {
    "-TwBgOpacity": "0.1"
  },
  ".badge-gray": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(242 244 247 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(52 64 84 / var(--tw-text-opacity))"
  },
  ".badge-primary": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(224 231 255 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(67 56 202 / var(--tw-text-opacity))"
  },
  ".badge-danger": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(254 226 226 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(185 28 28 / var(--tw-text-opacity))"
  },
  ".badge-warning": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(254 243 199 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(180 83 9 / var(--tw-text-opacity))"
  },
  ".badge-success": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(209 250 229 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(4 120 87 / var(--tw-text-opacity))"
  },
  ".badge-info": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(219 234 254 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(29 78 216 / var(--tw-text-opacity))"
  },
  ".button-group": {
    "position": "relative",
    "display": "inline-flex",
    "verticalAlign": "middle"
  },
  ".button-group > .button": {
    "position": "relative"
  },
  ".button-group > .button:focus:not(:disabled, .disabled),  .button-group > .button:hover:not(:disabled, .disabled),  .button-group > .button:active:not(:disabled, .disabled)": {
    "zIndex": "1"
  },
  ".button-group > .button:not(:last-child)": {
    "borderTopLeftRadius": "0px",
    "borderBottomLeftRadius": "0px"
  },
  ".button-group > .button:not(:first-child)": {
    "marginRight": "-1px",
    "borderTopRightRadius": "0px",
    "borderBottomRightRadius": "0px"
  },
  ".button-group-vertical": {
    "position": "relative",
    "display": "inline-flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "justifyContent": "center",
    "verticalAlign": "middle"
  },
  ".button-group-vertical.align-buttons-right > .button": {
    "justifyContent": "flex-start"
  },
  ".button-group-vertical.align-buttons-left > .button": {
    "justifyContent": "flex-end"
  },
  ".button-group-vertical.align-buttons-center > .button": {
    "justifyContent": "center"
  },
  ".button-group-vertical > .button": {
    "position": "relative",
    "width": "100%"
  },
  ".button-group-vertical > .button:focus:not(:disabled, .disabled),  .button-group-vertical > .button:hover:not(:disabled, .disabled),  .button-group-vertical > .button:active:not(:disabled, .disabled)": {
    "zIndex": "1"
  },
  ".button-group-vertical > .button:not(:last-child)": {
    "borderBottomRightRadius": "0px",
    "borderBottomLeftRadius": "0px"
  },
  ".button-group-vertical > .button:not(:first-child)": {
    "marginTop": "-1px",
    "borderTopLeftRadius": "0px",
    "borderTopRightRadius": "0px"
  },
  ".button": {
    "boxSizing": "border-box",
    "display": "inline-flex",
    "cursor": "pointer",
    "justifyContent": "center",
    "whiteSpace": "nowrap",
    "borderRadius": "0.5rem",
    "borderWidth": "1px",
    "paddingTop": "0.71428571rem",
    "paddingBottom": "0.71428571rem",
    "paddingLeft": "1.1428571rem",
    "paddingRight": "1.1428571rem",
    "textAlign": "center",
    "fontWeight": "500",
    "lineHeight": "1.5",
    "transitionProperty": [
      "color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter",
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter"
    ],
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "200ms"
  },
  ".button.disabled, \n  .button:disabled": {
    "cursor": "not-allowed"
  },
  ".button-sm": {
    "paddingTop": "0.57142857rem",
    "paddingBottom": "0.57142857rem",
    "paddingLeft": "1.0000000rem",
    "paddingRight": "1.0000000rem",
    "fontSize": "NaNundefined"
  },
  ".button-lg": {
    "paddingTop": "0.71428571rem",
    "paddingBottom": "0.71428571rem",
    "paddingLeft": "1.2857143rem",
    "paddingRight": "1.2857143rem"
  },
  ".button-xl": {
    "paddingTop": "0.85714286rem",
    "paddingBottom": "0.85714286rem",
    "paddingLeft": "1.4285714rem",
    "paddingRight": "1.4285714rem"
  },
  ".button-2xl": {
    "paddingTop": "1.1428571rem",
    "paddingBottom": "1.1428571rem",
    "paddingLeft": "2.0000000rem",
    "paddingRight": "2.0000000rem"
  },
  ".button-icon > .icon, \n    .button-icon > svg": {
    "marginLeft": "0.57142857rem",
    "height": "1.4285714rem",
    "width": "1.4285714rem",
    "alignItems": "center",
    "fill": "currentColor"
  },
  ".button-icon.button": {
    "paddingRight": "0.85714286rem"
  },
  ".button-icon.button-sm": {
    "paddingRight": "0.71428571rem"
  },
  ".button-icon.button-sm > .icon, \n      .button-icon.button-sm > svg": {
    "height": "1.1428571rem",
    "width": "1.1428571rem"
  },
  ".button-icon.button-lg": {
    "paddingRight": "1.0000000rem"
  },
  ".button-icon.button-xl": {
    "paddingRight": "1.1428571rem"
  },
  ".button-icon.button-2xl": {
    "paddingRight": "1.7142857rem"
  },
  ".button-icon.button-2xl > .icon, \n      .button-icon.button-2xl > svg": {
    "marginLeft": "0.85714286rem",
    "height": "1.7142857rem",
    "width": "1.7142857rem"
  },
  ".button-icon--left > .icon, \n    .button-icon--left > svg": {
    "order": "9999",
    "marginLeft": "0px",
    "marginRight": "0.57142857rem"
  },
  ".button-icon--left.button": {
    "paddingLeft": "0.85714286rem",
    "paddingRight": "1.1428571rem"
  },
  ".button-icon--left.button-sm": {
    "paddingLeft": "0.71428571rem",
    "paddingRight": "1.0000000rem"
  },
  ".button-icon--left.button-lg": {
    "paddingLeft": "14px",
    "paddingRight": "18px"
  },
  ".button-icon--left.button-xl": {
    "paddingLeft": "1.1428571rem",
    "paddingRight": "1.4285714rem"
  },
  ".button-icon--left.button-2xl": {
    "paddingLeft": "1.7142857rem",
    "paddingRight": "2.0000000rem"
  },
  ".button-icon--left.button-2xl > .icon, \n      .button-icon--left.button-2xl > svg": {
    "marginRight": "0.85714286rem",
    "marginLeft": "0px"
  },
  ".button-icon--only > .icon, \n    .button-icon--only > svg": {
    "margin": "0px"
  },
  ".button-icon--only.button": {
    "paddingLeft": "0.71428571rem",
    "paddingRight": "0.71428571rem"
  },
  ".button-icon--only.button-sm": {
    "paddingLeft": "0.57142857rem",
    "paddingRight": "0.57142857rem"
  },
  ".button-icon--only.button-lg": {
    "paddingLeft": "0.71428571rem",
    "paddingRight": "0.71428571rem"
  },
  ".button-icon--only.button-xl": {
    "paddingLeft": "0.85714286rem",
    "paddingRight": "0.85714286rem"
  },
  ".button-icon--only.button-2xl": {
    "paddingLeft": "1.1428571rem",
    "paddingRight": "1.1428571rem"
  },
  ".button-icon--only.button-2xl > .icon, \n      .button-icon--only.button-2xl > svg": {
    "margin": "0px"
  },
  ".button-primary": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(99 102 241 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(99 102 241 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ".button-primary.active, \n    .button-primary:active, \n    .button-primary:hover": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(79 70 229 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(79 70 229 / var(--tw-bg-opacity))"
  },
  ".button-primary:focus": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(99 102 241 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(99 102 241 / var(--tw-bg-opacity))",
    "-TwRingOffsetShadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "-TwRingShadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "-TwRingOpacity": "1",
    "-TwRingColor": "rgb(224 231 255 / var(--tw-ring-opacity))"
  },
  ".button-primary.disabled, \n    .button-primary:disabled": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(165 180 252 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(165 180 252 / var(--tw-bg-opacity))"
  },
  ".button-primary--naked": {
    "borderColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(67 56 202 / var(--tw-text-opacity))"
  },
  ".button-primary--naked.active, \n    .button-primary--naked:active, \n    .button-primary--naked:hover": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(238 242 255 / var(--tw-bg-opacity))"
  },
  ".button-primary--naked:focus": {
    "backgroundColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(67 56 202 / var(--tw-text-opacity))"
  },
  ".button-primary--naked.disabled, \n    .button-primary--naked:disabled": {
    "backgroundColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(208 213 221 / var(--tw-text-opacity))"
  },
  ".button-gray": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(208 213 221 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(52 64 84 / var(--tw-text-opacity))",
    "-TwShadow": "0px 1px 2px rgba(16, 24, 40, 0.05)",
    "-TwShadowColored": "0px 1px 2px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  },
  ".button-gray.active, \n    .button-gray:active, \n    .button-gray:hover": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(249 250 251 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(29 41 57 / var(--tw-text-opacity))"
  },
  ".button-gray:focus": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(52 64 84 / var(--tw-text-opacity))",
    "-TwRingOffsetShadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "-TwRingShadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "-TwRingOpacity": "1",
    "-TwRingColor": "rgb(242 244 247 / var(--tw-ring-opacity))"
  },
  ".button-gray.disabled, \n    .button-gray:disabled": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(234 236 240 / var(--tw-border-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(208 213 221 / var(--tw-text-opacity))"
  },
  ".button-gray.disabled.active, \n      .button-gray.disabled:active, \n      .button-gray.disabled:hover, \n      .button-gray:disabled.active, \n      .button-gray:disabled:active, \n      .button-gray:disabled:hover": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(234 236 240 / var(--tw-border-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(208 213 221 / var(--tw-text-opacity))"
  },
  ".button-gray--naked": {
    "borderColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(102 112 133 / var(--tw-text-opacity))"
  },
  ".button-gray--naked.active, \n    .button-gray--naked:active, \n    .button-gray--naked:hover": {
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(249 250 251 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(71 84 103 / var(--tw-text-opacity))"
  },
  ".button-gray--naked:focus": {
    "backgroundColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(102 112 133 / var(--tw-text-opacity))"
  },
  ".button-gray--naked.disabled, \n    .button-gray--naked:disabled": {
    "backgroundColor": "transparent",
    "-TwTextOpacity": "1",
    "color": "rgb(208 213 221 / var(--tw-text-opacity))"
  },
  ".button-success": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(25 249 113 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(25 249 113 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ".button-success.active, \n    .button-success:active, \n    .button-success:hover": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(2 242 103 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(2 242 103 / var(--tw-bg-opacity))"
  },
  ".button-success:focus": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(25 249 113 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(25 249 113 / var(--tw-bg-opacity))",
    "-TwRingOffsetShadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "-TwRingShadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "-TwRingOpacity": "1",
    "-TwRingColor": "rgb(140 255 179 / var(--tw-ring-opacity))"
  },
  ".button-success.disabled, \n    .button-success:disabled": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(55 252 128 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(55 252 128 / var(--tw-bg-opacity))"
  },
  ".button-danger": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(239 68 68 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(239 68 68 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ".button-danger.active, \n    .button-danger:active, \n    .button-danger:hover": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(220 38 38 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(220 38 38 / var(--tw-bg-opacity))"
  },
  ".button-danger:focus": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(239 68 68 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(239 68 68 / var(--tw-bg-opacity))",
    "-TwRingOffsetShadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "-TwRingShadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "-TwRingOpacity": "1",
    "-TwRingColor": "rgb(254 226 226 / var(--tw-ring-opacity))"
  },
  ".button-danger.disabled, \n    .button-danger:disabled": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(252 165 165 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(252 165 165 / var(--tw-bg-opacity))"
  },
  ".button-warning": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(253 222 103 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(253 222 103 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(210 107 0 / var(--tw-text-opacity))"
  },
  ".button-warning.active, \n    .button-warning:active, \n    .button-warning:hover": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(250 193 29 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(250 193 29 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(169 71 0 / var(--tw-text-opacity))"
  },
  ".button-warning:focus": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(253 222 103 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(253 222 103 / var(--tw-bg-opacity))",
    "-TwRingOffsetShadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "-TwRingShadow": "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "-TwRingOpacity": "1",
    "-TwRingColor": "rgb(255 248 210 / var(--tw-ring-opacity))"
  },
  ".button-warning.disabled, \n    .button-warning:disabled": {
    "-TwBorderOpacity": "1",
    "borderColor": "rgb(254 239 166 / var(--tw-border-opacity))",
    "-TwBgOpacity": "1",
    "backgroundColor": "rgb(254 239 166 / var(--tw-bg-opacity))",
    "-TwTextOpacity": "1",
    "color": "rgb(250 193 29 / var(--tw-text-opacity))"
  }
};