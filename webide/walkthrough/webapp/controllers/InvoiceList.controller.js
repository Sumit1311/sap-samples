sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/models/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controllers.InvoiceList", {
		formatter: formatter,
		onInit: function(){
			var oViewModel = new JSONModel({
				currency: "EUR"	
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices: function(oEvent){
			var query = oEvent.getParameter("newValue");
			var listControl = this.byId("invoicesList");
			listControl.getBinding("items").filter([new Filter("ProductName", FilterOperator.Contains, query)]);
		},
		onPress: function(oEvent) {
			//var router = sap.ui.core.UIComponent.getRouterFor(this);
			this.getOwnerComponent().getRouter().navTo("detail");
			//this.getOwnerComponent().getRouter().getTargets().display("detail");
		}
	});
});