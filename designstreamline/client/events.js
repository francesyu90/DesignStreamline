Template.create.events({

    'submit .createProject'(event, instance) {
    	event.preventDefault();
	   	var seasonName = event.target.seasonName.value;
	   	var lifeCycle = event.target.lifeCycle.value;
	   	var featureList = event.target.features.value.split(";");
	   	var componentList = event.target.components.value.split(";");
	}
});