/* global describe it cy beforeEach require afterEach*/

var helper = require('../../common/helper');
var mobileHelper = require('../../common/mobile_helper');
var writerMobileHelper = require('./writer_mobile_helper');

describe('Insert formatting mark via insertion wizard.', function() {
	var testFileName = 'insert_formatting_mark.odt';

	beforeEach(function() {
		mobileHelper.beforeAllMobile(testFileName, 'writer');

		// Click on edit button
		mobileHelper.enableEditingMobile();

		mobileHelper.openInsertionWizard();

		// Open formatting marks
		cy.contains('.menu-entry-with-icon.flex-fullwidth', 'Formatting Mark')
			.click();

		cy.get('.ui-content.level-0.mobile-wizard')
			.should('be.visible');
	});

	afterEach(function() {
		helper.afterAll(testFileName);
	});

	it('Insert non-breaking space.', function() {
		cy.contains('.menu-entry-with-icon', 'Non-breaking space')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u00a0');
	});

	it('Insert non-breaking hyphen.', function() {
		cy.contains('.menu-entry-with-icon', 'Non-breaking hyphen')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u2011');
	});

	it('Insert soft hyphen.', function() {
		cy.contains('.menu-entry-with-icon', 'Soft hyphen')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u00ad');
	});

	it('Insert no-width optional break.', function() {
		cy.contains('.menu-entry-with-icon', 'No-width optional break')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u200b');
	});

	it('Insert no-width no break.', function() {
		cy.contains('.menu-entry-with-icon', 'No-width no break')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u2060');
	});

	it('Insert left-to-right mark.', function() {
		cy.contains('.menu-entry-with-icon', 'Left-to-right mark')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u200e');
	});

	it('Insert right-to-left mark.', function() {
		cy.contains('.menu-entry-with-icon', 'Right-to-left mark')
			.click();

		writerMobileHelper.selectAllMobile();

		cy.get('#copy-paste-container p')
			.should('contain.text', '\u200f');
	});
});
