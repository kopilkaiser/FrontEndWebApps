module.exports = {
     server:{
        baseDir : "./",
        index : "index.html"
     },
     files:["./*.css", "./*.js", "./*.html"],
     watchOptions:{
        ignored : "node_modules"
     },
     logLevel: "info",
     notify: true
}