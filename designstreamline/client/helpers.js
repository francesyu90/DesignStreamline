Template.navbar.helpers({
    
    'projectName': function() {
    	return "Design Streamline";
    }

});


Template.footer.helpers({
    
    'year': function() {
    	return new Date().getFullYear();
    }

});

Template.catalog.helpers({

	'productList': function() {
		var productList = Products.find().fetch();
		if(productList.length == 0)
			return;
		var products = [];
		for(var i = 0; i < productList.length; i++) {

			var prod = productList[i];
			var componentId = prod.componentID;
			var featureId = prod.featureID;

			var component = Components.findOne({"_id": componentId});
			var feature = Features.findOne({"_id": featureId});

			var product = {
				"productName": prod.productName,
				"productID": prod._id,
				"featureID": featureId,
				"componentID": componentId,
				"componentName": component != undefined ? component.componentName : "NA",
				"featureName": feature != undefined ? feature.featureName : "NA"
			}
			products.push(product);
		}
		return products;
	}

});

Template.form.helpers({

	'hideLifeCyclePicker': function() {
		return Session.get("hideLifeCyclePicker");
	},

	'hideGallery': function() {
		return Session.get("hideGallery");
	},

	'projects': function() {
		return Projects.find({
			"seasonName": {$exists: true, $ne: ""}
		});
	},

	'filteredProjectsBySeasonName': function() {
		var selectedProject = Session.get("selectedProject");
		return Projects.find( {"seasonName": selectedProject} );
	}

});

Template.gallery.helpers({

	'projectsBySeasonNameAndLifeCycle': function() {
		var selectedProject = Session.get("selectedProject");
		var selectedLifeCycle = Session.get("selectedLifeCycle");
		var projects = Projects.find( {
			"seasonName": selectedProject,
			"lifeCycle": selectedLifeCycle
		}).fetch();

		var productKeys = [];
		for(var i = 0; i < projects.length; i++) {
			productKeys.push(projects[i].productID);
		}

		return Products.find({
			"_id": {$in: productKeys}
		});

	}

});

