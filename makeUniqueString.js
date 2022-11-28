let word = 'iwanttoclimbamountain'
let word2 = 'helloworld'
// // iwantoclmbu

function withoutFor(word){
    const newSet = new Set(word.split(''))
    let wordNoRepeats = [...newSet].join('')
    return wordNoRepeats
}

newWord = withoutFor(word)
console.log(newWord);

function withFor(word){
    emptyArray = []
    for (i=0;i<word.length;i++){
        if (!emptyArray.includes(word[i])){
            emptyArray.push(word[i])
        }
    }
    emptyArray= emptyArray.join('')
    return emptyArray
}

newWordTwo = withFor(word)
console.log(newWordTwo);


function repeats(word){
    emptyArray = []
    word.split('').forEach(element => { 
        !emptyArray.includes(element) ? emptyArray.push(element) : null;});
    emptyArray= emptyArray.join('')
    return emptyArray
    
}
newWordT = repeats(word)
console.log(newWordT);