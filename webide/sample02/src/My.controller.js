sap.ui.define([
   "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("Quickstart.My", {
   	onPress: function() {
   		MessageToast.show("Hello World");
   		this.byId("app").to(this.byId("first"));
   	},
   	onInit: function() {
   		this.getView().setModel(new JSONModel({
					features: [
						"Enterprise-Ready Web Toolkit",
						"Powerful Development Concepts",
						"Feature-Rich UI Controls",
						"Consistent User Experience",
						"Free and Open Source",
						"Responsive Across Browsers and Devices"
					]
				})
			);	
   	},
   	onChange: function (event) {
   		var bState = event.getParameter("state");
		this.byId("ready").setVisible(bState);
   	}
   });
});