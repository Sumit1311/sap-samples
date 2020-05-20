sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/models/formatter"
], function(Controller, JSONModel, formatter) {
	return Controller.extend("sap.ui.demo.walkthrough.controllers.InvoiceList", {
		formatter: formatter,
		onInit: function(){
			var oViewModel = new JSONModel({
				currency: "EUR"	
			});
			this.getView().setModel(oViewModel, "view");
		}	
	});
});