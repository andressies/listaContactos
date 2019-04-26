const getState = ({ getStore, setStore }) => {
	return {
		store: {
			listContact:[]
			
			//Your data structures, A.K.A Entities
		},
		actions: {
			setListContacts: list => {
				var tempStore = getStore();
				tempStore.listContacts = list;
				setStore({ tempStore });
				
			}
		
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


