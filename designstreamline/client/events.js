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

Template.navbar.events({

	'click .nav-item'(event, instance) {
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).siblings.removeClass('active');
		} 
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
		event.preventDefault();
		var componentName = event.target.componentName.value;
		var imageUrl = event.target.imageUrl.value;
		var componentRiskValue = Session.get("componentRiskValue");
		var component = {
			"name": componentName,
			"url": imageUrl,
			"risk": componentRiskValue
		}
		var componentID = Components.insert(component);
		if(componentID) {
			alert("Component " + componentName + " successfully inserted!");
		}
	}

});