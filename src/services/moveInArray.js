/**
 * Returns a array after changing an element position inside the array.
 * 
 * @param {any[]} arr Target array.
 * @param {any} from Target element current position.
 * @param {any} to Target element desired position.
 * @returns {any[]} Array after the element position changes.
 */
const moveInArray = function (arr, from, to){
	if(Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	};

	const item = arr.splice(from, 1);

	if(!item.length){
		throw new Error('There is no item in the array at index ' + from);
	};

	arr.splice(to, 0, item[0]);
};

export default moveInArray;