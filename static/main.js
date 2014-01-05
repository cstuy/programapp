

var LoginView = Backbone.View.extend({
    el:'#content',
    template : _.template($("#login_page_template").html()),
    render: function(){
	this.$el.html(this.template());
    }
})
var loginView = new LoginView();


var NewUserView = Backbone.View.extend({
    el:'#content',
    template : _.template($("#newuser_page_template").html()),
    render: function(data) {
	console.log(data);
	if (data==null) {
	    data={'error':''};
	}
	this.$el.html(this.template(data));
    },
    events: {
	'click .back' : function() { appRouter.navigate("/",{trigger:true});
				     return false;}
    }
    
})
var newuserView = new NewUserView();

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

