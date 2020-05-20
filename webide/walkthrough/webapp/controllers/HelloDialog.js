sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/base/strings/formatMessage"
	], function(ManagedObject, Fragment, formatMessage){
		"use strict";
		return ManagedObject.extend("sap.ui.demo.walkthrough.controllers.HelloDialog", {
			constructor: function(view) {
				this._view = view;
			},
			exit: function() {
				delete this._view;
			},
			open: function (){
				var id = "helloDialog";
				var oView = this._view;
				// create dialog lazily
				if (!oView.byId(id)) {
					var oFragmentController = {
						onCloseDialog: function () {
							oView.byId(id).close();
						},
						formatMessage: formatMessage
					};
					// load asynchronous XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sap.ui.demo.walkthrough.views.HelloDialog",
						controller: oFragmentController     
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					oView.byId(id).open();
				}
			}	
		});
	});