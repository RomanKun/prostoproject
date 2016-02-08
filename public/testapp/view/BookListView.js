(function() {

	// "use strict";

	console.log("-- Start BookListView.js ");

	Ext.define("TestApp.view.BookListView", {
		extend: "Ext.grid.Panel",
		alias: "widget.bookListView",
		title: "Library",
		store: "BooksStore",
		initComponent: initBookListView
	});


	function initBookListView() {
		console.log("-- initBookListView. ");
		this.columns = [{
			header: "Title",
			dataIndex: "name",
			flex: 1
		},
		{
			header: "Author",
			dataIndex: "author",
			flex: 1
		},
		{
			header: "Year",
			dataIndex: "year",
			flex: 1
		}];
		this.callParent(arguments);
	}
	
})();