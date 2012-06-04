Ext.define("Sencha1.0.view.LoginForm", {
	extend: "Ext.form.Panel",
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