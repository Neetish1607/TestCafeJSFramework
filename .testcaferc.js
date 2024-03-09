let os = require("os"); // Import the 'os' module

module.exports = {
    src: "tests/", // Test files
    browsers: ["chrome", "firefox"], // Browsers
    qrCode: true,
    //browsers: ["firefox:headless", "chrome:emulation:device=iphone X"],
    //baseUrl: "https://devexpress.github.io/testcafe/example/", // Website URL
    baseUrl: "https://demo.nopcommerce.com/", // Website URL

    skipJsErrors: true, // Skip JavaScript errors
    hostname: os.hostname(),
    reporter: [
        {
            "name": "spec"
        },
        {
            "name": "json",
            "output": "reports/report.json"
        }
    ],
    screenshots: {
        //"takeOnFails": true,
        //"pathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"
        pathPatternOnFails: "${DATE}_${TIME}/failedTests/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png"

    },
    disableNativeAutomation: true,
    disablePageCaching: true,

    /*videoPath: "reports/screen-captures",
    videoOptions: {
        "singleFile": true,
        "failedOnly": true,
        "pathPattern": "${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4"
    }, */
    quarantineMode: true,
    selectorTimeout: 3000,
    assertionTimeout: 1000,
    pageLoadTimeout: 1000,
    ajaxRequestTimeout: 40000,
    pageRequestTimeout: 8000,
    browserInitTimeout: 180000,
    testExecutionTimeout: 180000,
    runExecutionTimeout: 180000
}