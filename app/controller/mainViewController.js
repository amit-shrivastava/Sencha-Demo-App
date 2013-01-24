Ext.define('SenchaNote.controller.mainViewController',{
    extend: 'Ext.app.Controller',

    requires: [
        'SenchaNote.store.bookDetailsStore',
    ],

    config: {
        refs: {
            mainView: 'mainView',
            bookDetails: 'bookDetails',
        },
        control: {
            mainView: {
                getBookDetails: "onGetBookDetails",
            },
            bookDetails: {
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