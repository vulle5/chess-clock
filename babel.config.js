module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@assets": "./assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
