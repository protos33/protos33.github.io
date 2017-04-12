//Distance to segment block from:
//	https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x),
                    y: v.y + t * (w.y - v.y) });
}
function distToEdge(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }


//Basic distance function
function dist(x1, y1, x2, y2){
	var d = Math.sqrt(Math.pow((y2-y1), 2) + Math.pow((x2-x1), 2));
	//console.log("distance is: " + d);
	return d;
}

//Check if there's a node withing thresh of the mouse
function findNearestNode(x, y){

	var nearestNodeDist = thresh;

	//Iterates through the graph's nodes
	for (var i = 0; i < collection.channel.nodes.length; i++){
		currNode = collection.channel.nodes[i];
		currNodeDist = dist(x, y, currNode.x, currNode.y);
	
		if(currNodeDist <= nearestNodeDist ){
			nearestNodeDist = currNodeDist;
			nearestNode = currNode;
		}
	}

	if(nearestNodeDist < thresh){
		return nearestNode;	
	}
	else{
		return null;
	}

}

//Check if there's an edge within thresh of the mouse
function findNearestEdge(x, y){

	var nearestEdgeDist = thresh;

	//Iterates through the graph's nodes
	for (var i = 0; i < collection.channel.nodes.length; i++){
		for (var j = 0; j < collection.channel.edges[i].length; j++){ //For each edge connected to the node u
			var currEdge = collection.channel.edges[i][j]; //edge object itself. An edge from u to v with weight w and type t is expressed as Edge(v, weight, type) stored at index u of the edges list. 
			var u = collection.channel.nodes[currEdge.u];
			var v = collection.channel.nodes[currEdge.v]; //Index of the edge vertex
			
			currEdgeDist = distToEdge({x: x, y: y}, u, v);

			if(currEdgeDist <= nearestEdgeDist){
				nearestEdgeDist = currEdgeDist;
				nearestEdge = currEdge;
			}
		}
	}
	if(nearestEdgeDist < thresh){
		return nearestEdge;
	}
	else{
		return null;
	}
}

//Compare equality for two arbitrary objects
// edited to be recursive, so we hit all layers of objects
// from http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (!isEquivalent(a[propName], b[propName])) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
