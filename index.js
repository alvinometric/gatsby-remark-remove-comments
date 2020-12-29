const transformer = require('remark-remove-comments/transformer');

module.exports = ({ markdownAST }, pluginOptions) => {
  transformer(markdownAST);

  return markdownAST;
};
