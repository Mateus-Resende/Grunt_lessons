module.exports = grunt => {
    "use strict";

    // time how long grunt tasks are taking
    require('time-grunt')(grunt);

    // load grunt tasks
    // aliases.yaml -> tasks
    // *.js -> configs
    require('load-grunt-config')(grunt);
};
