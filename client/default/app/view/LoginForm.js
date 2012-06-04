Ext.create('Ext.form.Panel', {
    fullscreen: true,
    xtype:'loginScreen',
	requires: [
    "Ext.form.FieldSet",
    "Ext.field.Text",
    "Ext.field.Password",
    "Ext.Img"],
	config:{
		items: [
        {
            xtype: 'textfield',
            name: 'name',
            label: 'Name'
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
	}
});