module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // Add this line
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
