Ext.define('SenchaNote.view.mainView',{
    //extend: 'Ext.Container',
    extend: 'Ext.List', 
    xtype: 'mainview',
    requires: [
        'Ext.dataview.List',
    ],
    alias: "widget.mainView",
    
    config: {
        layout: {
            type: 'fit'
        },
        itemTpl: '<div>{volumeInfo.title}</div>',
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
                itemId:'books_search',
                id:'books_search',
                placeHolder: 'Search Books'  
            }]
        }
        ],
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