sap.ui.define([
	"sap/ui/demo/walkthrough/models/formatter",
	"sap/ui/model/resource/ResourceModel"
	], function(formatter, ResourceModel) {
		"use strict";
		QUnit.module("Formatting Functions", {
			beforeEach: function() {
				this._oResourceModel = new ResourceModel({
					bundleUrl : sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
				});
			},
			afterEach: function(){
				this._oResourceModel.destroy();
			}
		});
		
		QUnit.test("Should return the translated texts", function(assert) {
			var oViewStub = {
				getModel : this.stub().withArgs("i18n").returns(this._oResourceModel)
			};
			
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)
			};
			
			var isolatedFormatter = formatter.statusText.bind(oControllerStub);
			
			// Assert
			assert.strictEqual(isolatedFormatter("A"), "New", "The long text for status A is correct");
	
			assert.strictEqual(isolatedFormatter("B"), "In Progress", "The long text for status B is correct");
	
			assert.strictEqual(isolatedFormatter("C"), "Done", "The long text for status C is correct");
	
			assert.strictEqual(isolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
		});
	});