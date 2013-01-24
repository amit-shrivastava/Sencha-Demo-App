Ext.define("SenchaNote.store.localBookDetailsStore",{
	extend: "Ext.data.Store",
	config: {
        model: 'SenchaNote.model.bookDetailsModel',
		autoLoad: false,
		proxy: {
			type: 'localstorage',
        }
	}
});