Template.create.events({

    'submit .createProject'(event, instance) {
    	event.preventDefault();
	   	var seasonName = event.target.seasonName.value;
	   	var lifeCycle = event.target.lifeCycle.value;
	   	var re = /\s*;\s*/;
	   	var productList = event.target.products.value.split(re);
	   	var featureList = event.target.features.value.split(re);
	   	var componentList = event.target.components.value.split(re);

	   	var featureKeyList = [];

	   	for(var i = 0; i < featureList.length; i++) {

	   		var feature = {
	   			"featureName": featureList[i]
	   		};

	   		var featureKey = Features.insert(feature);
	   		featureKeyList.push(featureKey);
	   	}

	   	var componentKeyList = [];

	   	for(var i = 0; i < componentList.length; i++) {

	   		var component = {
	   			"componentName": componentList[i]
	   		}
	   		var componentKey = Components.insert(component);
	   		componentKeyList.push(componentKey);

	   	}

	   	var productKeyList = [];

	   	for(var i = 0; i < productList.length; i++) {


	   		for(var x = 0; x < featureKeyList.length; x++) {


	   			for(var y = 0; y < componentKeyList.length; y++) {

	   				var product = {
	   					"productName": productList[i],
	   					"featureID": featureKeyList[x],
	   					"componentID": componentKeyList[y]
	   				}

	   				var productKey = Products.insert(product);
	   				productKeyList.push(productKey);

	   			}

	   		}

	   	}

	   	for(var i = 0; i < productKeyList.length; i++) {

	   		var project = {
	   			"seasonName": seasonName,
	   			"lifeCycle": lifeCycle,
	   			"productID": productKeyList[i]
	   		};

	   		Projects.insert(project);
	   	}

	}
});