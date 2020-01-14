import gods from '/store/gods.js';
import ToolsToStore from '/components/ToolsToStore.js';

const { getGodData, changeMatchup } = ToolsToStore;

getGodData(gods, 'Agni')
.then((this_god) => {
	return changeMatchup(gods, this_god, 'Anubis', 10)
});