const equalParan = (str)  => {
    let openBracket = 0
    let closingBracket = 0
    for (i=0; i<str.length;i++){
        if (str[i]==')'){
        closingBracket++
        }
        else if (str[i]=='('){
        openBracket++
    }}

    if (openBracket !== closingBracket || (str.split('').findIndex(el => el =')') < str.split('').findIndex(el => el ='('))){
        return false
    } 
    return true
    }



str = '"(Oh Noes!))"'
hello = equalParan(str)
console.log(hello)