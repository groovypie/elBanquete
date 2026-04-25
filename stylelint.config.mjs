/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "declaration-property-unit-allowed-list": {
      "/^border/": ["px", "rem"],
      "/^padding|^gap/": ["px", "rem"]
    },
   "unit-allowed-list": ["%", "deg", "px", "rem", "ms"]
  }
};
