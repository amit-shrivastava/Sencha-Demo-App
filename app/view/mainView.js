Ext.define('SenchaNote.view.mainView',{
    extend: 'Ext.List', 
    xtype: 'mainview',
    requires: [
        'Ext.dataview.List',
        'Ext.field.Search',
        'Ext.Toolbar',
    ],
    alias: "widget.mainView",

    config: {
        layout: {
            type: 'fit'
        },
        xtype: 'list',
        itemId:"booksList",
        itemTpl: '<div>{volumeInfo.title}</div>',
        onItemDisclosure: true,
        emptyText: 'test',
        store: "mainViewStore",
        items: [{
            xtype: "toolbar",
            title: "Books",
            docked: "top",
        }, {  
            xtype:'toolbar',
            docked:'bottom',
            items:[{
                xtype: 'searchfield',
                width: '90%',
                itemId:'books_search',
                id:'books_search',
                placeHolder: 'Search Books'  
            }]
        }],
        listeners: [{
            delegate: "#booksList",
            event: "disclose",
            fn: "onBooksListDisclose"
        }, {
            delegate: "#books_search",
            event: "keyup",
            fn: "onSearchTextInput"
        }],
    },

    onBooksListDisclose: function (list, record, target, index, evt, options) {
        console.log('clicked');
        var id = record.data.id;
        this.fireEvent('getBookDetails', this, id);
    },

    onSearchTextInput : function(field) {
        var value = field.getValue();
        this.fireEvent('searchInputReceived', this, value);
    }
});