const expect = require('chai').expect;
const {Given, Then, } = require('cucumber');

Given(/^I go to Google$/, () => {
    browser.url('https://www.google.com/');
});

Given(/^I am brought to the Google website$/, () => {
    expect($('#gsr').isVisible()).to.be.true;
});
