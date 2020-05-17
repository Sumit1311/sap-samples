sap.ui.define([
	"sap/ui/core/ComponentContainer"	
], function(ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");	
});

/*sap.ui.define([
	"sap/ui/core/mvc/XMLView"	
], function(XMLView) {
	"use strict";
	XMLView.create({
		viewName : "sap.ui.demo.walkthrough.views.App"
	}).then(function(view) {
		view.placeAt("content");	
	});
});*/