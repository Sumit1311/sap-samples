sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/controllers/HelloDialog"/*,
	"sap/ui/model/resource/ResourceModel"	*/
], function( UIComponent , JSONModel, HelloDialog) {
	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
		metadata : {
        	/*rootView: {
	            "viewName": "sap.ui.demo.walkthrough.views.App",
	            "type": "XML",
	            "async": true,
	            "id": "app"
        	}*/
        	manifest : "json"
    	},
		init : function () {
        	// call the init function of the parent
        	UIComponent.prototype.init.apply(this, arguments);
        	/*var i18nModel = new ResourceModel({
            	bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
        	});
        	this.setModel(i18nModel, "i18n");*/
        	var modelData = {
				receipient : {
					name: "World"
				},
				descriptionMessage: this.getModel("i18n").getResourceBundle().getText("helloMsg", ["World"])
			};	
			var model = new JSONModel(modelData);
			this.setModel(model);
			this._helloDialog = new HelloDialog(this.getRootControl());
    	},


		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function (id) {
			this._helloDialog.open();
		}
	});
});