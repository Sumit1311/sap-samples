sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/base/strings/formatMessage",
	"sap/ui/core/Fragment"
], function(Controller, MessageToast, formatMessage, Fragment){
	return Controller.extend("sap.ui.demo.walkthrough.controllers.HelloPanel", {
		onOpenDialog: function(){
			var oView = this.getView();
			// create dialog lazily
			if (!this.byId("helloDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.views.HelloDialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}
		},
		onCloseDialog: function(){
			// create dialog lazily
			if (this.byId("helloDialog")) {
				this.byId("helloDialog").close();
			}
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