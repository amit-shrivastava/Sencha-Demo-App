Ext.define('SenchaNote.model.mainViewModel', {
    extend: 'Ext.data.Model',
    config : {
        //fields: ['id', 'volumeInfo'],
        fields: [
           // {name: 'volumeInfo', type: 'string'},
           {name: 'id', type: 'string'},
            {name: 'volumeInfo', convert: 
            function(value, record) {
                //console.log(value)

                console.log(value.title)
                return value.title;
            }
        }
        ],
    }
});


/*Ext.define('SenchaNote.model.mainViewModel', {
    extend: 'Ext.data.Model',
    config : {
        fields: [
            {name: 'volumeInfo', type: 'string'},
        ],
        hasOne: {
            associationKey: 'volumeInfo',
            model: 'SenchaNote.model.titleModel'
        },
    }
});


Ext.define("SenchaNote.model.titleModel", {
    extend: 'Ext.data.Model',
    uses: [
        'SenchaNote.model.mainViewModel'
    ],
    config: {
        fields: [
            {
                name: 'title'
            }
        ],
        belongsTo: {
            model: 'MyApp.model.mainViewModel'
        }
    }
});*/