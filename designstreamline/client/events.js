Template.form.events({

	'change #projectPicker'(event, instance) {
	   	var selectedProject = event.target.value;
	   	if(selectedProject != "") {
	   		Session.set("selectedProject", selectedProject);
    		Session.set("hideLifeCyclePicker", false);
	   	} else {
	   		Session.set("selectedProject", null);
    		Session.set("hideLifeCyclePicker", true);
    		Session.set("selectedLifeCycle", null);
    		Session.set("hideGallery", true);
	   	}
    	
	},

	'change #lifeCyclePicker'(event, instance) {
	   	var selectedLifeCycle = event.target.value;
	   	if(selectedLifeCycle != "") {
	   		Session.set("selectedLifeCycle", selectedLifeCycle);
    		Session.set("hideGallery", false);
	   	} else {
	   		Session.set("selectedProject", null);
    		Session.set("hideLifeCyclePicker", true);
    		Session.set("selectedLifeCycle", null);
    		Session.set("hideGallery", true);
	   	}
    	
	}



});

Template.pill.events({

	'click .nav-link'(event, instance) {
		$(".nav-link").removeClass('active');
		$(".tab-pane").removeClass('active');
		$(".tab-pane").removeClass('show');
		$(this).addClass('active');
		$(event.target).addClass('active');
		$(event.target).addClass('show');

	}

});

Template.createFeature.events({

	'submit .js-create-feature'(event, instance) {
		var featureName = event.target.featureName.value;
		var feature = {
			"name": featureName
		}
		var featureID = Features.insert(feature);
		if(featureID) {
			alert("Feature " + featureName + " successfully inserted!");
		}
	}

});

Template.createComponent.events({

	'change #riskPicker'(event, instance) {
		var componentRiskValue = event.target.value;
		Session.set("componentRiskValue", componentRiskValue);
	},

	'submit .js-create-component'(event, instance) {
		var componentName = event.target.componentName.value;
		var imageUrl = event.target.imageUrl.value;
		var componentRiskValue = Session.get("componentRiskValue");
		var component = {
			"componentName": componentName,
			"url": imageUrl,
			"risk": componentRiskValue
		}
		var componentID = Components.insert(component);
		if(componentID) {
			alert("Component " + componentName + " successfully inserted!");
		}
	}

});


Template.createProduct.events({

	'change #featureMulPicker'(event, instance) {
		var selectedFeatures = $("#featureMulPicker").val();
		Session.set("selectedFeatureIDs", selectedFeatures);
	},

	'change #componentMulPicker'(event, instance) {
		var selectedComponents = $("#componentMulPicker").val();
		Session.set("selectedComponentIDs", selectedComponents);
	},

	'change #productRiskPicker'(event, instance) {
		var productRiskValue = event.target.value;
		Session.set("productRiskValue", productRiskValue);
	},

	'submit .js-create-product'(event, instance) {
		var productName = event.target.productName.value;
		var productImageUrl = event.target.productImageUrl.value;
		var selectedFeatureIDs = Session.get("selectedFeatureIDs");
		var selectedComponentIDs = Session.get("selectedComponentIDs");
		var productRiskValue = Session.get("productRiskValue");
		var product = {
			"productName": productName,
			"url": productImageUrl,
			"featureIDs": selectedFeatureIDs,
			"componentIDs": selectedComponentIDs,
			"risk": productRiskValue
		}
		var productID = Products.insert(product);
		if(productID) {
			alert("Product " + productName + " successfully inserted!");
		}
	}

});

Template.createProject.events({

	'change #productMulPicker'(event, instance) {
		var productIDs = $("#productMulPicker").val();
		Session.set("selectedProductIDs", productIDs);
	},

	'change #lifeCyclePicker'(event, instance) {
		var lifeCycle = event.target.value;
		Session.set("selectedLifeCycleI", lifeCycle);
	},

	'change #projectRiskPicker'(event, instance) {
		var projectRiskValue = event.target.value;
		Session.set("projectRiskValue", projectRiskValue);
	},

	'submit .js-create-project'(event, instance) {
		var seasonName = event.target.seasonName.value;
		var productIDs = Session.get("selectedProductIDs");
		var lifeCycle = Session.get("selectedLifeCycleI");
		var projectRiskValue = Session.get("projectRiskValue");
		var project = {
			"seasonName": seasonName,
			"productIDs": productIDs,
			"lifeCycle": lifeCycle,
			"risk": projectRiskValue
		}
		var projectID = Projects.insert(project);
		if(projectID) {
			alert("Project " + seasonName + " successfully inserted!");
		}
	}

});

























