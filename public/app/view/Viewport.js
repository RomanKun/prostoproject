(function() {
	
	// "use strict";

	console.log("-- Start Viewport.js ");

	Ext.define("App01.view.Viewport", {
		extend: "Ext.container.Viewport",
		requires: [
		"App01.view.NewStationView",
		"App01.view.SongControlsView",
		"App01.view.StationsListView",
		"App01.view.RecentlyPlayedScrollerView",
		"App01.view.SongInfoView"
		],
		layout: "fit",
		initComponent: initViewport
	});


	function initViewport() {
		
		console.log("-- initViewport. ");

		this.items = getItems();
		this.callParent();

	}


	function getItems() {

		console.log("-- initItems");

		var contentItems = getContentItems();

		var thisDockedItems = getDockedItems();

		var initItems = {
			xtype: "panel",
			layout: {
				type: "hbox",
				align: "stretch"
			},
			dockedItems: thisDockedItems,
			items: contentItems
		}

		return initItems;

	}


	function getDockedItems() {

		console.log("-- getDockedItems");

		var dockedItems = [{
			dock: "top",
			xtype: "toolbar",
			heigth: 80,
			items: [{
				xtype: "newstation",
				width: 150
			},
			{
				xtype: "songcontrols",
				heigth: 70,
				flex: 1
			},
			{
				xtype: "component",
				html: "prostofm<br>prosto internet radio"
			}]
		}];

		return dockedItems;

	}


	function getContentItems() {

		console.log("-- getContentItems. ");

		var innerContentItems = getInnerContentItems();

		var contentItems = [{
			width: 250,
			xtype: "panel",
			id: "west-region",
			layout: {
				type: "vbox",
				align: "stretch"
			},
			items: innerContentItems
		}];

		return contentItems;

	}
	

	function getInnerContentItems() {

		console.log("-- getInnerContentItems");

		var  innerContentItems = [{
			xtype: "stationslist",
			flex: 1
		},
		{
			html: "Ad",
			heigth: 250,
			xtype: "panel"
		},
		{
			xtype: "container",
			flex: 1,
			layout: {
				type: "vbox",
				align: "stretch"
			},
			items: [{
				xtype: "recentlyplayedscroller",
				heigth: 250
			},
			{
				xtype: "songinfo",
				flex: 1
			}]
		}];

		return innerContentItems;
	}

})();