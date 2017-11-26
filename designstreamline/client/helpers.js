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

			var product = {
				"productName": productList[i].productName,
				"_id": productList[i]._id,
				"componentName": Components.findOne({"_id": productList[i].componentID}).componentName,
				"featureName": Features.findOne({"_id": productList[i].featureID}).featureName
			}
			products.push(product);
		}
		return products;
	}

});
