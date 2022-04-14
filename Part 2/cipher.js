
const cipher = (phrase) => {
    const consonants = [`b`,`c`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`m`,`n`,`p`,`q`,`r`,`s`,`t`,`v`,`w`,`x`,`z`]
    const vowels = [`a`,`e`,`i`,`o`,`u`,`y`]
    let spaces = 0
    let newphrase = []
    phraseArr = phrase.split("")
    for (i=0; i<phrase.length;i++) {
        if (vowels.includes(phraseArr[i])){
            newphrase.push(`_${vowels.indexOf(`${phraseArr[i]}`)+1}`)
        } 
        else if (consonants.includes(phraseArr[i])) {
            newphrase.push(`/${consonants.indexOf(`${phraseArr[i]}`)+1}`)
        } else if (phraseArr[i] === " ") {
            spaces ++
            newphrase.push(`.${spaces}`)
        } else {
            newphrase.push(phrase[i])
        }
    }
    return newphrase.join("")
}
// console.log(cipher('i love cryptography!'))
   

const decipher = phrase => {
    console.log(phrase)
    const consonants = [`b`,`c`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`m`,`n`,`p`,`q`,`r`,`s`,`t`,`v`,`w`,`x`,`z`]
    const vowels = [`a`,`e`,`i`,`o`,`u`,`y`]
    let spaces = 0
    let newphrase = []
    for (i=0; i<phrase.length; i++) {
        if (phrase[i] == "_") {
            newphrase.push(vowels[phrase[i+1]-1])
        } else if (phrase[i] == "/" && !Number(phrase[i+2]-1)) {
            newphrase.push(consonants[phrase[i+1]-1])
        } else if (phrase[i] == "/" && Number(phrase[i+2]-1)) {
            let laterLetterNumber = phrase.slice(i+1,i+3)
            newphrase.push(consonants[laterLetterNumber-1])
        } else if (phrase[i] == ".") {
            newphrase.push(" ")
        } else if (!+phrase[i]) {
           newphrase.push(phrase[i])
        }
        
       

    }
    return newphrase.join("")
}

console.log(decipher(cipher('i love cryptography!')))
