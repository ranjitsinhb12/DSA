/// Factorial

const factorial = (n)=>{
    if(n == 0){
        return 1
    }
    return n * factorial(n-1)
}
//console.log(factorial(5))

/// Reverse a string

// Iterative with while loop
const reverseStringWhile = (string)=>{
    let reverseString = ""
    let length = string.length - 1
    while(length >= 0){
        reverseString = reverseString + string[length]
        length = length - 1
    }
    return reverseString
}

//console.log(reverseStringWhile("Ranjitsinh"))

// Iterative with for loop
const reverseStringFor = (string) => {
    let reverseString = ""
    let length = string.length - 1
    for(i=length; i>=0; --i){
        reverseString = reverseString + string[i]
    }

    return reverseString
}
//console.log(reverseStringFor('Ranjit'))

// Recursive Reverse string
const recursiveReverseString = (string)=>{
    if(string === ""){
        return string
    }

    return string[string.length - 1] + recursiveReverseString(string.substring(0 , string.length -1))
}
//console.log(recursiveReverseString("ranjit"))


//// Count vowels 
const isVowels = (character)=>{
    let vowels = "aeiou"
    let lowerCharacter = character.toLowerCase()
    if(vowels.indexOf(lowerCharacter) != -1){
        return true
    }else{
        return false
    }
}

function countVowels(string){
    let count = 0;
    for(i = 0; i< string.length; i++){
        if(isVowels(string[i])){
            count += 1
        }
    }
    return count
}

//console.log(countVowels("Ranjit"))
// Recursive Count vowels
const recursiveCountVowels = (string, stringLen)=>{
    if(stringLen == 1){
        return Number(isVowels(string[0]))
    }

    return recursiveCountVowels(string, stringLen - 1) + isVowels(string[stringLen -1])
}
let myName = "ranjit"
console.log(recursiveCountVowels(myName, myName.length))