Ext.define("Sencha1.0.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
                title: 'Welcome',
                fullscreen: true,
                layout: 'card',
                activeItem: 0,

                items: {
                    xtype: 'loginScreen',
                }
    }
});