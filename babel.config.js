module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      [
          'module-resolver',
          {
              extensions: [
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx',
                  '.android.js',
                  '.android.tsx',
                  '.ios.js',
                  '.ios.tsx',
              ],
              root: ['./src'],
              alias: {
                  '@scenes': './src/scenes',
                  '@components': './src/components',
                  '@containers': './src/containers',
                  '@services': './src/services',
                  '@common': './src/common',
                  '@pages': './src/pages',
              },
          },
      ],
  ],
};
