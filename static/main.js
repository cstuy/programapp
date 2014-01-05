console.log("HELLO");


var AppRouter = Backbone.Router.extend({
    routes : {
	'' 	  : 'home',
	'newuser' : 'newuser'
    },
    home : function() {
	alert("home");
    },
    newuser : function() {
	alert("newuser");
    }
    
})

var appRouter= new AppRouter();

Backbone.history.start()

