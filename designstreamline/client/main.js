import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import '../lib/collections.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);

//     Projects.insert({ name: "Project1", desc: "Description1" });
//   },
// });

// Template.create.events({

//     'submit .createProject'(event, instance) {
// 	   	var seasonName = event.target.seasonName.value;
// 	   	var lifeCycle = event.target.lifeCycle.value;
// 	   	var re = /\s*;\s*/;
// 	   	var productList = event.target.products.value.split(re);
// 	   	var featureList = event.target.features.value.split(re);
// 	   	var componentList = event.target.components.value.split(re);

// 	   	var featureKeyList = [];

// 	   	for(var i = 0; i < featureList.length; i++) {

// 	   		var feature = {
// 	   			"featureName": featureList[i]
// 	   		};

// 	   		var featureKey = Features.insert(feature);
// 	   		featureKeyList.push(featureKey);
// 	   	}

// 	   	var componentKeyList = [];

// 	   	for(var i = 0; i < componentList.length; i++) {

// 	   		var component = {
// 	   			"componentName": componentList[i]
// 	   		}
// 	   		var componentKey = Components.insert(component);
// 	   		componentKeyList.push(componentKey);

// 	   	}

// 	   	var productKeyList = [];

// 	   	for(var i = 0; i < productList.length; i++) {


// 	   		for(var x = 0; x < featureKeyList.length; x++) {


// 	   			for(var y = 0; y < componentKeyList.length; y++) {

// 	   				var product = {
// 	   					"productName": productList[i],
// 	   					"featureID": featureKeyList[x],
// 	   					"componentID": componentKeyList[y]
// 	   				}

// 	   				var productKey = Products.insert(product);
// 	   				productKeyList.push(productKey);

// 	   			}

// 	   		}

// 	   	}

// 	   	for(var i = 0; i < productKeyList.length; i++) {

// 	   		var project = {
// 	   			"seasonName": seasonName,
// 	   			"lifeCycle": lifeCycle,
// 	   			"productID": productKeyList[i]
// 	   		};

// 	   		Projects.insert(project);
// 	   	}

// 	}
// });
