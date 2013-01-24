Ext.application({
    name:"SenchaNote",

    models:['mainViewModel', 'bookDetailsModel'],
    stores:['mainViewStore', 'bookDetailsStore'],
    controllers: ['mainViewController'],
    views:["mainView","bookDetails"],

    launch:function(){
        Ext.Viewport.add(Ext.create('SenchaNote.view.mainView'));
    }
});