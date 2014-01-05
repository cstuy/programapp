

var LoginView = Backbone.View.extend({
    el		:'#content',
    template	: _.template($("#login_page_template").html()),
    render	: function(){
	this.$el.html(this.template());
    }
})
var loginView = new LoginView();


var NewUserView = Backbone.View.extend({
    el:'#content',
    template : _.template($("#newuser_page_template").html()),
    render: function(data) {
	if (data==null) {
	    data={'error':''};
	}
	this.$el.html(this.template(data));
    },
    events: {
	'click .back' : function(e) { 
	    e.preventDefault();
	    appRouter.navigate("",{trigger:true});
	},
	'click .register' : function(e) {
	    e.preventDefault();
	    var formdata = $("#newuserform").serializeObject();
	    if (formdata['password'] != formdata['confirmpassword']) {
		this.render({'error':"Passwords don't match"});
	    } else {
	    // Try to create a new user
	    var user = new UserModel();
	    user.save(formdata,{success: function(d) {console.log('z',d);}});
	    }
	}
    }
});

var newuserView = new NewUserView();


var UserModel = Backbone.Model.extend({
    urlRoot : "/user",
    defaults: {
	first : '',
	last : '',
	email : '',
	password : ''
    }
}) // Model



var AppRouter = Backbone.Router.extend({
    routes : {
	'' 	  : 'home',
	'newuser' : 'newuser'
    },
    home : function() {
	loginView.render();
    },
    newuser : function() {
	newuserView.render();
    }
    
})

var appRouter= new AppRouter();

Backbone.history.start()

