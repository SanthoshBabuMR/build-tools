module.exports = function( grunt ) {

    // grunt config
    grunt.initConfig({
        connect: {
            server: {
                // server begin
                options: {
                    hostname: "localhost",
                    port: 62341,
                    keepalive: true
                }            
                // server begin
            }
        }
    });

    // load task(s)
    grunt.loadNpmTasks( "grunt-contrib-connect" );

    // register task(s)
    grunt.registerTask( "startServer", "connect:server" );

};
