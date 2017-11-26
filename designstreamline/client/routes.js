
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

Router.route("/projectCatalog",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("projectCatalog",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/product/:id",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("product",{
		to:"main",
		data: function() {
			var product = Products.findOne({_id:this.params.id});
			return product;
		}
	});
	this.render("footer",{
		to:"footer"
	});
});


