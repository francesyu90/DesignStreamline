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
