module.exports = function (eleventyConfig) {

	// Force browserSync Reload for parcel
	eleventyConfig.setBrowserSyncConfig({ watch: true });

	// Copy all images to dist folder
	eleventyConfig.addPassthroughCopy('src/images')


	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: "_includes",
			data: '_data'
		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	}
}