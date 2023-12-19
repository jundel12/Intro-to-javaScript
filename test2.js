//get the frequency
function getFrequency(arr) { //function to get the frequency of each element

    var result = {}; //purpose ani is to store the frequency of each element

    arr.forEach(function (element) {
        //the use of forEach method to iterate each element in the input array.
        //

        result[element] = (result[element] || 0) + 1;
        //the result[element] gina acces niya ang current element object which is the result
        //the (result[element] || 0) + 1 purpose ani is to update the frequency count of a specific element within the result
        //if the current element is not present in the result object
        //then it will be added to the result object
        //if the current element is present in the result object
        //then it will be incremented by 1
    });

    return result;
    //basically is to return the current result object
}
console.log(getFrequency(['A', 'B', 'A', 'A', 'A']));
console.log(getFrequency([1, 2, 3, 3, 2]));
console.log(getFrequency(['true', 'false', 'true', 'false', 'false']));
console.log(getFrequency([]));