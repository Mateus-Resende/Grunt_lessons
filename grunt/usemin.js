module.exports = {
  useminPrepare: {
    html: 'index.html',
    options: {
      flow: {
        steps: {
          js: ['uglify']
        },
        post: {
          js: [{
            name: 'uglify',
            createConfig: (context, block) => {
              var generated = context.options.generated;
              generated.options: {
                
              }
            }
          }]
        }
      }
    }
  }
}
