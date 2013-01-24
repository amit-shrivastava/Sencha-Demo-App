Ext.define("SenchaNote.store.bookDetailsStore",{
    extend: "Ext.data.Store",
    config: {
        autoLoad: false,
        model: 'SenchaNote.model.bookDetailsModel',
        proxy: {
            type: 'ajax',
			pageParam: false,
			startParam: false,
			limitParam: false,
			noCache: false,
            reader: {
                type: 'json',
                //rootProperty: 'items'
            }
        },
    },
});