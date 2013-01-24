Ext.define('SenchaNote.view.mainView',{
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
        'Ext.dataview.List',
    ],
    alias: "widget.mainView",
    
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: "toolbar",
            title: "Books",
            docked: "top",
        }, {
            xtype: "list",
            store: "mainViewStore",
            itemId:"booksList",
            loadingText: "Loading Books...",
            emptyText: "<div>No books found.</div>",
            onItemDisclosure: true,
            itemTpl: '<div>{volumeInfo.title}</div>',       
        }],
        listeners: [{
            delegate: "#booksList",
            event: "disclose",
            fn: "onBooksListDisclose"
        }],
    },

    onBooksListDisclose: function (list, record, target, index, evt, options) {
        var id = record.data.id;
        this.fireEvent('getBookDetails', this, id);
    }
});