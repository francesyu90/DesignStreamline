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

	'productsBySeasonNameAndLifeCycle': function() {
		var selectedProject = Session.get("selectedProject");
		var selectedLifeCycle = Session.get("selectedLifeCycle");
		var project = Projects.findOne( {
			"seasonName": selectedProject,
			"lifeCycle": selectedLifeCycle
		});

		var productKeys = project.productIDs;

		return Products.find({
			"_id": {$in: productKeys}
		});

	}

});

Template.createComponent.helpers({

	'risks': function() {
		return getRisks();
	}
});

Template.createProduct.helpers({

	'features': function() {
		return Features.find({});
	},

	'components': function() {
		return Components.find({});
	},

	'risks': function() {
		return getRisks();
	}

});

Template.createProject.helpers({

	'lifeCycles': function() {
		return getLifeCycles();
	},

	'products': function() {
		return Products.find({
			"productName": {$exists: true, $ne: ""}
		});
	},

	'risks': function() {
		return getRisks();
	}


});

Template.productDetails.helpers({

	'defaultRisk': function() {
		return getRisks()[0];
	},

	'features': function() {
		if(!Session.get("selectedProduct")) {
			return;
		}
		var featureIDs = Session.get("selectedProduct").featureIDs;
		if(!featureIDs) 
			return;
		return Features.find({
			"_id": {$in: Object.values(featureIDs)}
		});
	}

});

Template.components.helpers({

	'components': function() {
		if(!Session.get("selectedProduct")) {
			return;
		}
		var componentIDs = Session.get("selectedProduct").componentIDs;
		if(!componentIDs) 
			return;
		return Features.find({
			"_id": {$in: Object.values(componentIDs)}
		});
	}

});

var getLifeCycles = function() {
	var lifeCycles = ["Design", "Development", "Production"];
	var lifeCycleValues = ["des", "dev", "prod"];
	var lifeCycleObjs = [];
	for (var i = 0; i < lifeCycles.length; i++) {
		var lifeCycle = {
			"value": lifeCycleValues[i],
			"status":lifeCycles[i]
		}
		lifeCycleObjs.push(lifeCycle);
	}
	return lifeCycleObjs;
}

var getRisks = function() {
	var risks = ["Low", "Middle", "High"];
	var riskValues = ["low", "middle", "high"];
	var riskObjs = [];
	for(var i = 0; i < risks.length; i++) {
		var risk = {
			"value": riskValues[i],
			"level": risks[i]
		}
		riskObjs.push(risk);
	}
	return riskObjs;
}

