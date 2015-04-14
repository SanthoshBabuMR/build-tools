/**
* @fileOverview RequireJS Configuration Object
* @author Santhosh Babu <html5webster@gmail.com>
* @version 0.0.1
*/

( function ( ) {

	/**
	* Requirejs configuration object specification 
	* @namespace settings
	* @property {string} baseUrl root path for script file(s) directory
	* @property {object} paths path of js file(s) / js module(s) relative to baseUrl
	* @property {object} shim dependencies and exports for non-AMD compilant modules
	* @property {string} shim.exports reference for non-AMD compilant module
	* @property {array}  shim.deps array of dependency modules to load prior to shimed module loading
	* @property {string} urlArgs cache busting with timestamp
	*/
	var settings =  {
		  baseUrl: "/public/script"
		, paths : {

			// lib
			"requireLib"			:	"lib/requirejs/require"
			, "async"				:	"lib/requirejs/plugin/async"
			, "text"				:	"lib/requirejs/plugin/text"
			, "i18n"				:	"lib/requirejs/plugin/i18n"
			, "domReady"			:	"lib/requirejs/plugin/domReady"
			, "jquery"				:	"lib/jquery/jquery"
			, "_"					:	"lib/underscore/underscore"
			, "bootstrap"           : 	"lib/bootstrap/bootstrap"

			// modules
			, "main"				: 	"modules/main"
			, "fixedHeaderTable"	: 	"modules/fixedHeaderTable"

		  }
		, shim: {
			"_"						:	{
				exports				:	"_"
			},
			"bootstrap": {
				deps: [ "jquery" ]
			}
		  }
		, urlArgs : "bust=" + ( new Date() ).getTime()

	};

	requirejs.config( settings );
	
	return settings;

} )( );
