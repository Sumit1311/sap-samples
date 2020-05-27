sap.ui.define([
	"sap/ui/demo/walkthrough/localService/mockserver"
], function(MockServer) {
	MockServer.init();
	
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});