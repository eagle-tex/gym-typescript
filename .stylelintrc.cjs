module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends'],
      },
    ],
    'block-no-empty': null,
    'declaration-property-value-no-unknown': true,
    // 'unit-allowed-list': ["%","deg", 'px', 'rem', "ms", 's'],

    // stylelint-order rules
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
  },
};
