sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/base/strings/formatMessage"
], function(Controller, MessageToast, formatMessage){
	return Controller.extend("sap.ui.demo.walkthrough.controllers.HelloPanel", {
		onOpenDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		},
		onShowHello: function(){
			MessageToast.show(this.buildDescriptionMessage());
		},
		/*onLiveChange: function(oEvent) {
			this.getView().getModel().setProperty("/descriptionMessage", this.buildDescriptionMessage());
		},*/
		buildDescriptionMessage: function() {
			var bundler = this.getView().getModel("i18n").getResourceBundle();
			var sReceipient = this.getView().getModel().getProperty("/receipient/name");
			return bundler.getText("helloMsg", [sReceipient]);
		},
		formatMessage: formatMessage
	});
});