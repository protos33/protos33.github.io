class Channel{
	constructor(){ //Adjacency list representation
		this.nodes = []; //At index i in the array, there is an x position, a y position, and a rotation angle for the node
		this.edges = []; //At index i in the array, has a list of indices that node i in this.nodes is connected to
	}
}

class Node{
	//Add color and type later
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

}

class Edge{
	constructor(u, v, weight, type){
		this.u = u;
		this.v = v;
		this.weight = weight; //Weight of the edge (channel thickness)
		this.type = type; //Type of edge (straight channel, mixer, etc)
	}

}

class Helix{
	constructor(x, y, theta){
		this.x = x;
		this.y = y;
		this.theta = theta;
	}
}

class T_Junction{
	constructor(x, y, theta){
		this.x = x;
		this.y = y;
		this.theta = theta;
	}
}


class Cross_Junction{
	constructor(x, y, theta){
		this.x = x;
		this.y = y;
		this.theta = theta;
	}
}

class Collection{
	
	constructor(){
		this.channel = new Channel();
		this.helix_list = [];
		this.t_list = [];
		this.cross_list = [];
	}

}


