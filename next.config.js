const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withFonts],
  [withImages],
  [
    withPWA,
    {
      pwa: {
        dest: 'public'
      }
    }
  ]
]);
