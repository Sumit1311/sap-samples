sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";
	
	XMLView.create({
		viewName: "Quickstart.My"
	})
	.then(function (view) {
		view.placeAt("content");
	});
});