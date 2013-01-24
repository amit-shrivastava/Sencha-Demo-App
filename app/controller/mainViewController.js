Ext.define('SenchaNote.controller.mainViewController',{
    extend: 'Ext.app.Controller',

    requires: [
        'SenchaNote.store.bookDetailsStore',
    ],

    config: {
        refs: {
            // We're going to lookup our views by xtype.
            mainView: 'mainView',
            bookDetails: 'bookDetails',
            //booksList: "#booksList"
        },
        control: {
            mainView: {
                // The commands fired by the notes list container.
                getBookDetails: "onGetBookDetails",
            },
            bookDetails: {
                // The commands fired by the notes list container.
                backButtonClicked: "onBackButtonClicked",
            },
        },
    },

    onGetBookDetails : function(list, id) {
        var dataStore = Ext.getStore('bookDetailsStore');
        dataStore.load({
            url: 'https://www.googleapis.com/books/v1/volumes/' + id,
            callback: function(records, operation, success) {
            },
            scope: this
        });
        dataStore.on({
            load: 'onStoreLoad',
            scope: this
        });
    },
    onStoreLoad : function() {
        var bookDetailsView = Ext.create('SenchaNote.view.bookDetails');
        Ext.Viewport.setActiveItem(bookDetailsView);
    },
    
    onBackButtonClicked: function() {
        var mainView = Ext.create('SenchaNote.view.mainView');
        Ext.Viewport.setActiveItem(mainView);
    },
});