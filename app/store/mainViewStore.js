Ext.define("SenchaNote.store.mainViewStore",{
    extend: "Ext.data.Store",
    config: {
        autoLoad: true,
        model: 'SenchaNote.model.mainViewModel',
        proxy: {
            type: 'ajax',
            pageParam: false,
			startParam: false,
			limitParam: false,
			noCache: false,
            url: 'https://www.googleapis.com/books/v1/volumes?q=random',
            params: {
                'q' : 'random'  
            },
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
    },
});