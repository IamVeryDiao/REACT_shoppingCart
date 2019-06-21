export default (state , action)=>{
	 
	if(state == undefined){
		state = {
			"cart" : [
				{
					"name" : "laptop",
					"price" : 3000,
					"amount" : 0
				},
				{
					"name" : "fridge",
					"price" : 2000,
					"amount" : 0
				},
				{
					"name" : "TV",
					"price" : 5000,
					"amount" : 0
				}
			],
			"a" : 1,
			"b" : 2
		}
	}

 	if(action.type == "ADD"){
 		return  {
 			...state,
 			"cart" : state.cart.map(function(item,index){
 				return index == action.index ? {...item,"amount" : item.amount + 1} : item;
 			})
 		};
 	}


 	 if(action.type == "MINUS"){
 		var s = {
 			...state,
 			"cart" : state.cart.map(function(item,index){
 				return index == action.index ? {...item,"amount" : item.amount - 1} : item;
 			})
 		};
 		return s;
 	}

 	 

	return state;
}