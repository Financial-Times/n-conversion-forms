module.exports = {
	"presets": ["@babel/preset-env", "@babel/preset-react"],
	"plugins": ["@babel/plugin-transform-runtime"],
  // As we are using a mix of commonJS and ESM files we need to tell babel this
  // More info: https://babeljs.io/docs/options#sourcetype
  "sourceType": "unambiguous"
};
