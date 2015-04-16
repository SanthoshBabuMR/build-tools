module.exports = function( grunt ) {

    // grunt config
    grunt.initConfig({
        connect: {
            CORSServer: {
            // CORSServer begin
                options: {
                      hostname: "localhost"
                    , base: '.'
                    , port: 43241
                    , keepalive: true
                    , middleware:   function (connect, options) {
                                        return [
                                            function (req, res, next) {
                                              res.setHeader('Access-Control-Allow-Origin', '*');
                                              res.setHeader('Access-Control-Allow-Methods', '*');
                                              next();
                                            }
                                            // Serve static files.
                                            , connect.static('.')
                                            // Make empty directories browsable.
                                            , connect.directory('.')
                                        ];
                                    }
                }
            // CORSServer end
            }
        }
    });

    // load task(s)
    grunt.loadNpmTasks( "grunt-contrib-connect" );

    // register task(s)
    grunt.registerTask( "startCORSServer", "connect:CORSServer" );

};
