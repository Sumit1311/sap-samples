sap.ui.define([
	"sap/ui/core/mvc/XMLView"	
], function(XMLView) {
	"use strict";
	XMLView.create({
		viewName : "sap.ui.demo.walkthrough.views.App"
	}).then(function(view) {
		view.placeAt("content");	
	});
});