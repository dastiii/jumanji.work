module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Jumanji - Dein Karriereportal";
      return args;
    });
  },
  pwa: {
    name: "Jumanji - Dein Karriereportal",
    themeColor: "#e2b007",
    msTileColor: "#e2b007",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  }
};
