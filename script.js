function reverse_string(str) {
    let reversedString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    document.write(reversedString)
}
reverse_string('hello')