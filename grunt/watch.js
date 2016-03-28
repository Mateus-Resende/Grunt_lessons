module.exports = {
    files: ['scripts/**/*.js', 'styles/**/*.scss'],
    tasks: ['newer:jshint', 'newer:compass', 'newer:jscs', 'wiredep']
}
