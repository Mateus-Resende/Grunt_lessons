module.exports = {
    dist: {
        src: [
            '/scripts/**/*.js',
            '/styles/**/*.css'
        ],
        exclude: ['bootstrap.js'],
        options: {
            bowerrc: '.bowerrc'
        }
    }
}
