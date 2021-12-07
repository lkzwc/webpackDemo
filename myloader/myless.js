// loader 就是一个函数
// less=>css

const less = require("less");
module.exports = function (source) {
  less.render(source, (err, { css }) => {
    this.callback(err, css);
  });
};
