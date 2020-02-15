require('dotenv').config();

exports.config = {
	//
	// ==================
	// Specify Test Files
	// ==================
	// Define which test specs should run. The pattern is relative to the directory
	// from which `wdio` was called. Notice that, if you are calling `wdio` from an
	// NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
	// directory is where your package.json resides, so `wdio` will be called from there.
	//
	specs: [
		 './features/*.feature'
	],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	//
	// ============
	// Capabilities
	// ============
	// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
	// time. Depending on the number of capabilities, WebdriverIO launches several test
	// sessions. Within your capabilities you can overwrite the spec and exclude options in
	// order to group specific specs to a specific capability.
	//
	// First, you can define how many instances should be started at the same time. Let's
	// say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
	// set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
	// files and you set maxInstances to 10, all spec files will get tested at the same time
	// and 30 processes will get spawned. The property handles how many capabilities
	// from the same test should run tests.
	//
	maxInstances: 10,
	//
	// If you have trouble getting all important capabilities together, check out the
	// Sauce Labs platform configurator - a great tool to configure your capabilities:
	// https://docs.saucelabs.com/reference/platforms-configurator
	//
	capabilities: [
		{
			// maxInstances can get overwritten per capability. So if you have an in-house Selenium
			// grid with only 5 firefox instances available you can make sure that not more than
			// 5 instances get started at a time.
			browserName: 'chrome',
			build: "opendoor",
			name: 'chrome-opendoor',
			parentTunnel: 'optumtest',
			tunnelIdentifier: 'Optum-Prd'
		}
		,
		{

			browserName: 'firefox',
			build: "opendoor",
			name: 'firefox-opendoor',
			parentTunnel: 'optumtest',
			tunnelIdentifier: 'Optum-Prd'
		}
		,
		{
			browserName: 'internet explorer',
			build: "opendoor",
			name: 'internet-explorer-opendoor',
			parentTunnel: 'optumtest',
			tunnelIdentifier: 'Optum-Prd'
		}
		,
		{

			browserName: 'safari',
			build: "opendoor",
			name: 'safari-opendoor',
			parentTunnel: 'optumtest',
			tunnelIdentifier: 'Optum-Prd'
		}
	],
	//
	// ===================
	// Test Configurations
	// ===================
	// Define all options that are relevant for the WebdriverIO instance here
	//
	// By default WebdriverIO commands are executed in a synchronous way using
	// the wdio-sync package. If you still want to run your tests in an async way
	// e.g. using promises you can set the sync option to false.
	sync: true,
	//
	// Level of logging verbosity: silent | verbose | command | data | result | error
	logLevel: 'silent',
	//
	// Enables colors for log output.
	coloredLogs: true,
	//
	// Warns when a deprecated command is used
	deprecationWarnings: true,
	//
	// If you only want to run your tests until a specific amount of tests have failed use
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,
	//
	// Saves a screenshot to a given path if a command fails.
	screenshotPath: './errorShots/',
	//
	// Set a base URL in order to shorten url command calls. If your `url` parameter starts
	// with `/`, the base url gets prepended, not including the path portion of your baseUrl.
	// If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
	// gets prepended directly.
	baseUrl: 'http://localhost',
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 20000,
	//
	// Default timeout in milliseconds for request
	// if Selenium Grid doesn't send response
	connectionRetryTimeout: 90000,
	//
	// Default request retries count
	connectionRetryCount: 3,
	//
	// Initialize the browser instance with a WebdriverIO plugin. The object should have the
	// plugin name as key and the desired plugin options as properties. Make sure you have
	// the plugin installed before running any tests. The following plugins are currently
	// available:
	// WebdriverCSS: https://github.com/webdriverio/webdrivercss
	// WebdriverRTC: https://github.com/webdriverio/webdriverrtc
	// Browserevent: https://github.com/webdriverio/browserevent
	// plugins: {
	//     webdrivercss: {
	//         screenshotRoot: 'my-shots',
	//         failedComparisonsRoot: 'diffs',
	//         misMatchTolerance: 0.05,
	//         screenWidth: [320,480,640,1024]
	//     },
	//     webdriverrtc: {},
	//     browserevent: {}
	// },
	//
	// Test runner services
	// Services take over a specific job you don't want to take care of. They enhance
	// your test setup with almost no effort. Unlike plugins, they don't add new
	// commands. Instead, they hook themselves up into the test process.\
	services: ['sauce'],
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	sauceConnect: true,
	// Framework you want to run your specs with.
	// The following are supported: Mocha, Jasmine, and Cucumber
	// see also: http://webdriver.io/guide/testrunner/frameworks.html
	//
	// Make sure you have the wdio adapter package for the specific framework installed
	// before running any tests.
	framework: 'cucumber',
	//
	// Test reporter for stdout.
	// The only one supported by default is 'dot'
	// see also: http://webdriver.io/guide/reporters/dot.html
	reporters: ['multiple-cucumber-html', 'dot', 'spec', 'cucumber-snippet'],
	reporterOptions: {
		htmlReporter: {
			jsonFolder: './tmp',
			reportFolder: './tmp/reports',
			removeFolders: true
		},
		//outputDir: __dirname + '/test/reports',
		//combined: true
	},
	// If you are using Cucumber you need to specify the location of your step definitions.
	cucumberOpts: {
		require: ['./features/step-definitions/*.js'],        // <string[]> (file/dir) require files before executing features
		backtrace: false,   // <boolean> show full backtrace for errors
		compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		dryRun: false,      // <boolean> invoke formatters without executing steps
		failFast: false,    // <boolean> abort the run on first failure
		format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
		colors: true,       // <boolean> disable colors in formatter output
		snippets: true,     // <boolean> hide step definition snippets for pending steps
		source: true,       // <boolean> hide source uris
		profile: [],        // <string[]> (name) specify the profile to use
		strict: false,      // <boolean> fail if there are any undefined or pending steps
		tags: ['test'],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
		timeout: 200000,     // <number> timeout for step definitions
		ignoreUndefinedDefinitions: true, // <boolean> Enable this config to treat undefined definitions as warnings.
	},

	//
	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.
	/**
	 * Gets executed once before all workers get launched.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 */
	// onPrepare: function (config, capabilities) {
	// },
	/**
	 * Gets executed just before initialising the webdriver session and test framework. It allows you
	 * to manipulate configurations depending on the capability or spec.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	beforeSession: function (config, capabilities, specs) {
		capabilities.name = specs ? specs[0].split('/').pop() : undefined;
	},
	/**
	 * Gets executed before test execution begins. At this point you can access to all global
	 * variables like `browser`. It is the perfect place to define custom commands.
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	// before: function (capabilities, specs) {
	// },
	/**
	 * Runs before a WebdriverIO command gets executed.
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 */
	// beforeCommand: function (commandName, args) {
	// },

	/**
	 * Runs before a Cucumber feature
	 * @param {Object} feature feature details
	 */
	// beforeFeature: function (feature) {
	// },
	/**
	 * Runs before a Cucumber scenario
	 * @param {Object} scenario scenario details
	 */
	// beforeScenario: function (scenario) {
	// },
	/**
	 * Runs before a Cucumber step
	 * @param {Object} step step details
	 */
	// beforeStep: function (step) {
	// },
	/**
	 * Runs after a Cucumber step
	 * @param {Object} stepResult step result
	 */
	// afterStep: function (stepResult) {
	// },
	/**
	 * Runs after a Cucumber scenario
	 * @param {Object} scenario scenario details
	 */
	afterScenario: function (scenario) {
		if (scenario.tags !== undefined && scenario.tags.length !== 0) {
			if (scenario.tags[0].name === "@CleanUp"){
				if (process.env.account && process.env.idToDelete){
					// Check which account to delete from
					if (process.env.account === "National Account"){
						xhrRequest("national", process.env.idToDelete);
					} else if (process.env.account === "Key Account") {
						xhrRequest("key", process.env.idToDelete);
					}
					process.env.account = "";
					process.env.idToDelete = "";
				}
			}
		}
	},
	/**
	 * Runs after a Cucumber feature
	 * @param {Object} feature feature details
	 */
	// afterFeature: function (feature) {
	// },

	/**
	 * Runs after a WebdriverIO command gets executed
	 * @param {String} commandName hook command name
	 * @param {Array} args arguments that command would receive
	 * @param {Number} result 0 - command success, 1 - command error
	 * @param {Object} error error object if any
	 */
	// afterCommand: function (commandName, args, result, error) {
	// },
	/**
	 * Gets executed after all tests are done. You still have access to all global variables from
	 * the test.
	 * @param {Number} result 0 - test pass, 1 - test fail
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// after: function (result, capabilities, specs) {
	// },
	/**
	 * Gets executed right after terminating the webdriver session.
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that ran
	 */
	// afterSession: function (config, capabilities, specs) {
	// 	config.sauceConnect = false;
	// }
	/**
	 * Gets executed after all workers got shut down and the process is about to exit.
	 * @param {Object} exitCode 0 - success, 1 - fail
	 * @param {Object} config wdio configuration object
	 * @param {Array.<Object>} capabilities list of capabilities details
	 */
	// onComplete: function(exitCode, config, capabilities) {
	// }
}

function xhrRequest(account, id){
    // Open HTTP connection to delete the record that was posted
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", process.env.REACT_APP_ENROLLMENT_URL + "/api/enrollment/" + account + "/" + id, false);
    xhr.onload = function() {
        if(xhr.status === 204) {
            console.log("Succesfully deleted " + account + " record with id: " + id);
        } else if (xhr.status !== 204){
            console.log("Something went wrong deleting " + account + " record with id: " + id);
        }
    };
    xhr.send();
}
