console.log("hello");
console.log(Redux);


///////////////////////////////////////////////////////////////////////////
////////////////////////// COUNTER EXERCICES /////////////////////////////
/////////////////////////////////////////////////////////////////////////


// THE REDUCER //
// the redcuer is a function
// the function reducer always tech a state and an action 
// the reducer ll return the new state in that specific case ll return a number

var reducer = function(state = 0, action){ // we pass to the function the state (wich need to be initialised) and an action wich is an object wich have a .type property 

	switch (action.type) { // we chech the the property type of the object action (action.type) if it s egale to INCREMENT or DECREMENT to change the state
		case "INCREMENT":
			return state + 1;
			
		case "DECREMENT":
			return state -1;
			
		default:
			return state;
	}
}




// THE STORE //
// Then I create the store made from REdux and pass it the reducer we juste crete
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
