sap.ui.define([
	"sap/ui/core/mvc/Controller"/*,
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"*/
], function(Controller) {
	return Controller.extend("sap.ui.demo.walkthrough.controllers.App", {
		onOpenDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		}
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
	});	
});