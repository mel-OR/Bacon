exports.config = {
	runner: 'local',
	path: '/',
	protocol: 'https',
	specs: [ './specs/browser/*.ts' ],
	suites: {
		e2e: [ './specs/browser/*.ts' ]
	},
	maxInstances: 1, //change this to run more tests in parallel
	services: [
		[
			'selenium-standalone',
			{
				installArgs: {
					drivers: {
						chrome: { version: '92.0.4515.43' }
						//firefox: { version: "0.26.0" },
					}
				},
				args: {
					drivers: {
						chrome: { version: '92.0.4515.43' }
						//firefox: { version: "0.26.0" },
					}
				},
				logPath: './logs'
			}
		]
	],
	capabilities: [
		{
			browserName: 'chrome',
			'goog:chromeOptions': {
				args: [ '--ignore-certificate-errors', '--enable-javascript' ]
			},
			//browserName: "firefox",
			acceptInsecureCerts: true
		}
	],
	logLevel: 'info',
	//
	// Set specific log levels per logger if you need to troubleshoot
	// loggers:
	// - webdriver, webdriverio
	// - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
	// - @wdio/mocha-framework, @wdio/jasmine-framework
	// - @wdio/local-runner, @wdio/lambda-runner
	// - @wdio/sumologic-reporter
	// - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	// logLevels: {
	//     webdriver: 'trace',
	//     webdriverio: 'trace',s
	// },
	bail: 0,
	baseUrl: 'https://google.com',
	waitforTimeout: 100000,
	connectionRetryTimeout: 100000,
	connectionRetryCount: 3,
	framework: 'jasmine',
	jasmineNodeOpts: {
		defaultTimeoutInterval: 100000,
		helpers: [ require.resolve('@babel/register') ],
		requires: [ 'ts-node/register' ]
	},
	reporters: [ 'spec' ]
};
