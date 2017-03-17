console.log("hello");
console.log(Redux);


///////////////////////////////////////////////////////////////////////////
////////////////////////// COUNTER EXERCICES /////////////////////////////
/////////////////////////////////////////////////////////////////////////


// THE REDUCER //
var reducer = function(state = 0, action){ 

	switch (action.type) { 
		case "INCREMENT":
			return state + 1;
			
		case "DECREMENT":
			return state -1;
			
		default:
			return state;
	}
}




// THE STORE //
var store = Redux.createStore(reducer);
store.subscribe(render);  //IMPORTANT// WE CALL THE METHODE SUBSCRIBER
//this methode expect a function has parameter and it s going to call the function each time the state changing
// it s listeneing all the time and if the state change it s calling the render methode to rerender the ui.




// RENDER METHODE //
function render(){
	var element = document.getElementById("displayNumber");
	element.innerHTML = store.getState(); // we use the methode of the store getState();	
}




// LISTENER//
document.getElementById("increment").addEventListener("click", function(){
	store.dispatch({type: "INCREMENT"});
   
});

document.getElementById("decrement").addEventListener("click", function(){
	store.dispatch({type: "DECREMENT"});
   
});
