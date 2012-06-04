Ext.define("Sencha1.0.view.Main", {
    extend: 'Ext.tab.Panel',
       
        title : 'My Login Form', 
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

        app.authenticate(values);
    }
});