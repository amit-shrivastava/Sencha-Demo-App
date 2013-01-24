Ext.define("SenchaNote.store.mainViewStore",{
    extend: "Ext.data.Store",
    config: {
        autoLoad: true,
        model: 'SenchaNote.model.mainViewModel',
        proxy: {
            type: 'ajax',
            url: 'https://www.googleapis.com/books/v1/volumes?q=test',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
    },
});