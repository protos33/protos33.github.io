
function drawGrid(canvas, gridSize){
	var context = canvas.getContext("2d");
	context.strokeStyle = "#a9a9a9";
	for (var i = 0; i < canvas.width; i+=gridSize){
		for (var j = 0; j < canvas.height; j+=gridSize){
			context.fillRect(i, j, 1, 1);		
		}
	}
}

function redraw(collection, color){
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clears
	var gridSize = 20;
	drawGrid(canvas, gridSize);
	context.strokeStyle = color;
  	context.lineJoin = "round";
  	context.lineWidth = 5;
	
	//Iterates through the graph's nodes, then iterates through all nodes' neighbors to draw each edge. 
	for (var i = 0; i < collection.channel.nodes.length; i++){
		if (collection.channel.edges[i].length == 0){ //Just draw a dot if there are no edges connected to the node
			context.beginPath();
			context.moveTo(collection.channel.nodes[i].x-1, collection.channel.nodes[i].y-1); //TODO: use fillRect() like in the drawGrid() function to clean this up
			context.lineTo(collection.channel.nodes[i].x, collection.channel.nodes[i].y);
			context.closePath();
			context.stroke();
		} else { //Assuming there are edges connected to the node
			for (var j = 0; j < collection.channel.edges[i].length; j++){ //For each edge connected to the node u
				var edge = collection.channel.edges[i][j]; //edge object itself. An edge from u to v with weight w and type t is expressed as Edge(u, v, weight, type) stored at index u of the edges list. 
				var u = collection.channel.nodes[edge.u];
				var v = collection.channel.nodes[edge.v]; //Index of the edge vertex
				context.beginPath();
				context.moveTo(u.x, u.y);
				context.lineTo(v.x, v.y);
				context.closePath();
				context.stroke();			
			}
		}
	}
	/* TODO: remove outdated console.log s
	console.log("channel");
	console.log(collection.channel);
	console.log("lengths");
	console.log("helix" + collection.helix_list.length);
	console.log("T" + collection.t_list.length);
	console.log("X" + collection.cross_list.length);
	console.log(collection);
	*/

	for (var i = 0; i < collection.helix_list.length; i++){
		console.log("helix list");
		var h = collection.helix_list[i];
		var img = new Image();
		img.src = 'helical_mixer';
		var tempCanvas = document.createElement('canvas');
		tempCanvas.setAttribute('id', 'canvas');
		if(typeof G_vmlCanvasManager != 'undefined') {
			tempCanvas = G_vmlCanvasManager.initElement(tempCanvas);
		}
		tempContext = tempCanvas.getContext("2d");
		tempContext.rotate(rotateAngle);
		tempContext.drawImage(img, 0,0);
		context.drawImage(tempCanvas, h.x-canvas.offsetLeft, h.y-canvas.offsetTop);
	}
	for (var i = 0; i < collection.t_list.length; i++){
		console.log("t list");
		var t = collection.t_list[i];
		var img = new Image();
		img.src = 't_junct';
		var tempCanvas = document.createElement('canvas');
		tempCanvas.setAttribute('id', 'canvas');
		if(typeof G_vmlCanvasManager != 'undefined') {
			tempCanvas = G_vmlCanvasManager.initElement(tempCanvas);
		}
		tempContext = tempCanvas.getContext("2d");
		tempContext.rotate(rotateAngle);
		tempContext.drawImage(img, 0,0);
		context.drawImage(tempCanvas, t.x-canvas.offsetLeft, t.y-canvas.offsetTop);
		console.log(t[0]);
	}
	for (var i = 0; i < collection.cross_list.length; i++){
		console.log("cross list");
		var x = collection.cross_list[i];
		var img = new Image();
		img.src = 'cross_junct';
		var tempCanvas = document.createElement('canvas');
		tempCanvas.setAttribute('id', 'canvas');
		if(typeof G_vmlCanvasManager != 'undefined') {
			tempCanvas = G_vmlCanvasManager.initElement(tempCanvas);
		}
		tempContext = tempCanvas.getContext("2d");
		tempContext.rotate(rotateAngle);
		tempContext.drawImage(img, 0,0);
		context.drawImage(tempCanvas, x.x-canvas.offsetLeft, x.y-canvas.offsetTop);
	}
}

function redrawAll(){
	redraw(collection, "#df4b26");
	for (c in selectedCollections){
		redraw(c, "#dddddd");
	}
}



