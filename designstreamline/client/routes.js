
Router.route("/",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("home",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/create",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("create",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/catalog",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("catalog",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/search",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("search",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/test",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("test",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

