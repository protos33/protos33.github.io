function pointerSelectHoverListener(e){

	//Check if there are any nodes or edges within thresh of the mouse
	nearestNode = findNearestNode(mouseX, mouseY);
	nearestEdge = findNearestEdge(mouseX, mouseY);

	//If you're near a node or edge, display a cell cursor
	if(nearestNode != null || nearestEdge != null) {
		document.getElementById("canvasDiv").style.cursor = "cell";
	}
	//If you're not near anything, display a normal cursor
	else{
		document.getElementById("canvasDiv").style.cursor = "auto";
	}	
}

function pointerSelectClickListener(e){

	//Check if there are any nodes or edges within thresh of the mouse
	nearestNode = findNearestNode(mouseX, mouseY);
	nearestEdge = findNearestEdge(mouseX, mouseY);

	//If you're near a node:
	if(nearestNode != null) {
		console.log("Selecting node:" + nearestNode);
		console.log(selectedCollection);
		selectedCollection.channel.nodes.push(nearestNode);
	}
	//If you're not near a node, but you are near an edge:
	else if (nearestEdge != null)
	{
		console.log("Selecting edge:" + nearestEdge);
		selectedCollection.channel.edges[nearestEdge.u].push(nearestEdge);
		selectedCollection.channel.edges[nearestEdge.v].push(nearestEdge);
		selectedCollection.channel.edges.push(nearestEdge);
	}
}

function boxSelectMouseDownListener(e){

	nearestNode = findNearestNode(mouseX, mouseY);
	nearestEdge = findNearestEdge(mouseX, mouseY);

	//If you're near a node:
	if(nearestNode != null) {
		console.log("Selecting node:" + nearestNode);
	}
	//If you're not near a node, but you are near an edge:
	else if (nearestEdge != null)
	{
		console.log("Selecting edge:" + nearestEdge);
	}
	//If you're not near anything
	else{
	}
}
