//Fileio.js contains the overall file variable, it looks like this:
//var file = {channel_graph: [[], []], helix_list: [], t_list: [], cross_list: []};

var CursorModeEnum = {

	PLACE: {
		CHANNEL: 'PLACE.CHANNEL',
		HELIX: 'PLACE.HELIX',
		T_JUNCT: 'PLACE.T_JUNCT',
		CROSS_JUNCT: 'PLACE.CROSS_JUNCT',
		VERTEX: 'PLACE.VERTEX'
	},

	SELECT: {
		POINTER: 'SELECT.POINTER',
		BOX: 'SELECT.BOX'
	},

	OPERATE: {
		MOVE: 'OPERATE.MOVE'
	}

};


function move_handler(event){

	if (!isEquivalent(new Collection(), selectedCollection)){
		cursorMode = CursorModeEnum.OPERATE.MOVE;
		document.getElementById("canvasDiv").style.cursor = "move";
	}
	else
	{
		console.log("Nothing to move!");
	}
}

function pointer_select_handler(event){
	cursorMode = CursorModeEnum.SELECT.POINTER;
	document.getElementById("canvasDiv").style.cursor = "auto";
}

function box_select_handler(event){
	cursorMode = CursorModeEnum.SELECT.BOX;
	document.getElementById("canvasDiv").style.cursor = "auto";
}

function channel_handler(event){
	//If we were already in this mode, toggle out of it
	if(cursorMode == CursorModeEnum.PLACE.CHANNEL){
		cursorMode = CursorModeEnum.SELECT.POINTER;
	}
	//If we weren't already in this mode
	else{
		//Start a new channel
		firstInChannel = true;

		//Toggle into the PLACE CHANNEL mode
		cursorMode = CursorModeEnum.PLACE.CHANNEL;
		document.getElementById("canvasDiv").style.cursor = "url('channel'), auto";
		img.src = 'channel';
	}
}

function helical_mixer(event){
	cursorMode = CursorModeEnum.PLACE.HELIX;
	document.getElementById("canvasDiv").style.cursor = "url('helical_mixer'), auto";
	img.src = 'helical_mixer';
}

function t_junction(event){
	cursorMode = CursorModeEnum.PLACE.T_JUNCT;
	document.getElementById("canvasDiv").style.cursor = "url('t_junct'), auto";
	img.src = 't_junct';
}

function cross_junction(event){
	cursorMode = CursorModeEnum.PLACE.CROSS_JUNCT;
	document.getElementById("canvasDiv").style.cursor = "url('cross_junct'), auto";
	img.src = 'cross_junct';
}
