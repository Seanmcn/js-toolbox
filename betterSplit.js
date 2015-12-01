/*
 * Description: Function to split a string and add the remainder to the last element of the array.
 * Example: split('1.0233.4123.2', '.' ,2) would return ["1", "0233", "4123.2"]
 * Note: counts from zero
 */
function split(string, separator, limit) {
    string = string.split(separator);
    if (string.length <= limit) return string;

    var array = string.splice(0, limit);
    array.push(string.join(separator));

    return array;
}
