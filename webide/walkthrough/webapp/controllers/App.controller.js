sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"/*,
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"*/
], function(Controller, MessageToast) {
	return Controller.extend("sap.ui.demo.walkthrough.controllers.App", {
		/*onInit: function(){
			var i18nModel = new ResourceModel({
            	bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
        	});
        	this.getView().setModel(i18nModel, "i18n");
        	var modelData = {
				receipient : {
					name: "World"
				},
				descriptionMessage: i18nModel.getResourceBundle().getText("helloMsg", ["World"])
			};	
			var model = new JSONModel(modelData);
			this.getView().setModel(model);
		},*/
		onShowHello: function(){
			MessageToast.show(this.buildDescriptionMessage());
		},
		onLiveChange: function(oEvent) {
			this.getView().getModel().setProperty("/descriptionMessage", this.buildDescriptionMessage());
		},
		buildDescriptionMessage: function() {
			var bundler = this.getView().getModel("i18n").getResourceBundle();
			var sReceipient = this.getView().getModel().getProperty("/receipient/name");
			return bundler.getText("helloMsg", [sReceipient]);
		}
	});	
});