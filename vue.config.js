// vue_app/vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const fs = require("fs");
module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    host: "0.0.0.0",
    port: 8080,
  },
};
