const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Set publicPath for GitHub Pages subdirectory deployment
// This ensures all asset URLs are prefixed with /belajar-indonesia/
if (process.env.NODE_ENV === "production") {
  config.transformer = config.transformer || {};
  config.transformer.publicPath = "/belajar-indonesia/";
}

module.exports = withNativeWind(config, {
  input: "./global.css",
  // Force write CSS to file system instead of virtual modules
  // This fixes iOS styling issues in development mode
  forceWriteFileSystem: true,
});
