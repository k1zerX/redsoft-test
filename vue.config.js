const PosthtmlBem = require('posthtml-bem');

const PosthtmlLoader = {
  loader: 'posthtml-loader',
  options: {
    parser: 'posthtml-pug',
    plugins: [
      PosthtmlBem(),
    ],
    sync: false,
  },
};

const PosthtmlRule = {
  test: /\.pug$/,
  oneOf: [
    {
      resourceQuery: /\?vue/,
      use: [
        PosthtmlLoader,
      ],
    },
    {
      use: [
        PosthtmlLoader,
      ],
    },
  ],
};

module.exports = {
  configureWebpack({ module }) {
    const i = module.rules.findIndex(elem => elem.test.toString() === PosthtmlRule.test.toString());
    if (i >= 0) {
      module.rules[i] = PosthtmlRule;
    } else {
      module.rules.push(PosthtmlRule);
    }
  },
}
