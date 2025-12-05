//1
const containsChar = (str, char) =>{
return str.match(char) !== null;
}

//2
const reverse = (str) => {
    return str.split('').reverse().join('');
}
//3
const wordsToRegister = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
        return result;
    }
}
//4
const sumOfDigitsInString = (str) => {
    return str.split('').reduce((sum, char) => {
        if (char >= '0' && char <= '9') {
            return sum + parseInt(char);
        }
        return sum;
    }, 0);
}
//5
const checkChars = (str, target, replacement) => {
    if (!str.includes(target)) {
        return 'Error';
    }
    return str.replaceAll(target, replacement);
}