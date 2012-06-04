Ext.define("Sencha1.0.view.Main", {
    extend: 'Ext.tab.Panel',
        
    config: {
        refs: {
            loginForm: 'formpanel'
        },
        control: {
            'formpanel button': {
                tap: 'doLogin'
            }
        }
    },

    doLogin: function() {
        var form   = this.getLoginForm(),
            values = form.getValues();

        Sencha1.0.authenticate(values);
    }
});