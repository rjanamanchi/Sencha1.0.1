Ext.create('Ext.form.Panel', {
    fullscreen: true,
    xtype:'loginScreen'
    items: [
        {
            xtype: 'textfield',
            name: 'name',
            label: 'Name'
        },
        {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email'
        },
        {
            xtype: 'passwordfield',
            name: 'password',
            label: 'Password'
        },
        {
            xtype: 'button',
            name: 'submit',
            label: 'Submit'
        }
    ]
});