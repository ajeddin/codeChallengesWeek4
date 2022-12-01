// Write your solution below:
arr = 'smllmsmslsmsl'

empty= []
const tshirtOrganizer=(arr) =>{
    arr = arr.split('')
if (arr.findIndex(el => el = 's')>=0){
    index= arr.findIndex(el => el = 's')
    empty.push(index)
    arr.splice(index,1)
}else if(arr.findIndex(el => el = 'm')>=0){
    index= arr.findIndex(el => el = 'm')
    empty.push(index)
    arr.splice(index,1)
    }else if(arr.findIndex(el => el = 'l')>=0){
    index= arr.findIndex(el => el = 'l')
    empty.push(index)
    arr.splice(index,1)
    }
empty = empty.join('')
}
// orga = tshirtOrganizer(arr)
// console.log(orga);

// const tShirt
// const counts = {};
// const sizer = [smllmsmslsmsl];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)

const sorter = arr => {
    return arr.split('').sort().reverse().join('')
}
orga2 = sorter(arr)
console.log(orga2)