function snapMouseCoord(mousePos, gridSize)
{
	return gridSize*Math.round(mousePos/gridSize);
}

function channelClickListener(e){
	var gridSize = 20; //TODO: set globally and import so it can be dynamically changed
	var mouseX = snapMouseCoord(e.pageX-canvas.offsetLeft, gridSize);
	var mouseY = snapMouseCoord(e.pageY-canvas.offsetTop, gridSize);
	paint = true;
	addVertex(mouseX, mouseY); //arguments: the inputs you put into a function (addClick). addClick is currently being called. 
	redraw(); //command to update the function
}

function helixClickListener(e){	
		
	context.drawImage(tempCanvas, e.pageX-canvas.offsetLeft, e.pageY-canvas.offsetTop);
	collection.helix_list.push(new Helix(e.pageX, e.pageY, rotateAngle));
}

function tJunctClickListener(e){
	var tempCanvas = document.createElement('canvas');
	tempCanvas.setAttribute('id', 'canvas');
	if(typeof G_vmlCanvasManager != 'undefined') {
		tempCanvas = G_vmlCanvasManager.initElement(tempCanvas);
	}
	tempContext = tempCanvas.getContext("2d");
	tempContext.rotate(rotateAngle);
	tempContext.drawImage(img, 0,0);
	context.drawImage(tempCanvas, e.pageX-canvas.offsetLeft, e.pageY-canvas.offsetTop);
	collection.t_list.push(new T_Junction(e.pageX, e.pageY, rotateAngle));
}

function crossJunctClickListener(e){
	var tempCanvas = document.createElement('canvas');
	tempCanvas.setAttribute('id', 'canvas');
	if(typeof G_vmlCanvasManager != 'undefined') {
		tempCanvas = G_vmlCanvasManager.initElement(tempCanvas);
	}
	tempContext = tempCanvas.getContext("2d");
	tempContext.rotate(rotateAngle);
	tempContext.drawImage(img, 0, 0);
	context.drawImage(tempCanvas, e.pageX-canvas.offsetLeft, e.pageY-canvas.offsetTop);
	collection.cross_list.push(new Cross_Junction(e.pageX, e.pageY, rotateAngle));
}
