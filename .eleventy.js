const { DateTime } = require('luxon');
const Card = require('./src/_includes/components/Card');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets/');

    eleventyConfig.addShortcode('Card', Card);

    // eleventyConfig.addCollection('posts', function(collectionApi) {
    //     return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md')
    // })

    // // to format dates
    // eleventyConfig.addFilter('postDate', (dateObj) => {
    //     return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    // });

    // // to create excerpts
    // eleventyConfig.setFrontMatterParsingOptions({
    //     excerpt: true,
    //     excerpt_alias: 'post_excerpt',
    //     excerpt_separator: '<!-- excerpt -->'
    // })

    // // asset img shortcode
    // eleventyConfig.addNunjucksShortcode('asset_img', (filename, alt) => {
    //     return `<img class="" src="/assets/img/posts/${filename}" alt="${alt}" />`
    // })

    return {
    dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    };
}