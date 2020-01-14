function getGodData(data, god){
	return new Promise( (resolve, reject) => {
		return resolve(_.find(data, { 'name' : god }));
	}) 
}

function changeRole(god, role, value) {
	god.roles[role] = value;		
}

function changeMatchup(data, god, god_against, value) {

	// First Step
	let changeStep1 = god.matchups.map((item) => {
		if(item.god == god_against) {
			return item.against = value; 
		}
	})

	// Mirror from step 1
	if(changeStep1) {
		getGodData(data, god_against).then((resp) => {
			resp.matchups.map((item) => {
				if(item.god == god.name) {
					return item.against = 100 - value;
				}
			})
		})
	} else {
		return false
	}
}

function changeTeammate(data, god, god_teammate, value) {

	// First Step
	let changeStep1 = god.matchups.map((item) => {
		if(item.god == god_teammate) {
			return item.teammate = value; 
		}
	})

	// Mirror from step 1
	if(changeStep1) {
		getGodData(data, god_teammate).then((resp) => {
			resp.matchups.map((item) => {
				if(item.god == god.name) {
					return item.teammate = value;
				}
			})
		})
	} else {
		return false
	}		

}