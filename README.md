# gatsby-remark-remove-comments

[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

This is a plugin for [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) that removes HTML comments from the processed output.

It's just the Gatsby version of [`remark-remove-comments`](https://github.com/alvinometric/remark-remove-comments).

## Install

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install gatsby-remark-remove-comments
```

In `gatsby-config.js`, add:

```diff
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-transformer-remark',
        options: {
+         plugins: [
+           'gatsby-remark-remove-comments',
+         ],
        },
      },
    ],
  };
```

## Usage with MDX

If you're using [Gatsby with MDX](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/), you don't need this plugin. You can use [`remark-remove-comments`](https://github.com/alvinometric/remark-remove-comments) and pass it directly as an option in the [`remarkPlugins`](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#remark-plugins) array.

## Use

By default, in Remark, HTML comments in Markdown will appear in the output, this plugin removes them.

For the following Markdown file:

```markdown
# Hello World

This is a markdown file, with text in it.

<!-- But in this file there's a comment, like "TODO: fix 😅",
  I don't want this to appear in the HTML output, it's just for me -->
```

**Before adding the plugin**

```html
<h1>Hello World</h1>
<p>This is a markdown file, with text in it.</p>
<!-- But in this file there's a comment, like "TODO: fix 😅",
  I don't want this to appear in the HTML output, it's just for me -->
```

**After adding the plugin**

```html
<h1>Hello World</h1>
<p>This is a markdown file, with text in it.</p>
```

## License

[MIT](LICENSE) © https://alvin.codes/

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/gatsby-remark-remove-comments.svg
[downloads]: https://www.npmjs.com/package/gatsby-remark-remove-comments
[size-badge]: https://img.shields.io/bundlephobia/minzip/gatsby-remark-remove-comments.svg
[size]: https://bundlephobia.com/result?p=gatsby-remark-remove-comments
