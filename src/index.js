module.exports = function toReadable (number) {
  let numberPlasesArray = [
    [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'],
    ['', ' twenty', ' thirty', ' forty' , ' fifty', ' sixty', ' seventy', ' eighty',' ninety'],
    [' one hundred', ' two hundred', ' three hundred', ' four hundred', ' five hundred', ' six hundred', ' seven hundred', ' eight hundred', ' nine hundred']
    ];

  let numberPlasesTeenArray = [' ten', 'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let readableNumber = "";
  let stringNumber = number.toString();
  let length = stringNumber.length;

    if (number >= 20){
        for (let i = 0; i< length; i+=1){
            for(let j = 0; j < 9; j+=1){
                if( stringNumber[length-1-i] === (j+1).toString()){
                    readableNumber = numberPlasesArray[i][j] + readableNumber;
                }
            }
        }
    }
    if (length === 3 && stringNumber[1] === '1'){
        if (stringNumber[2] !== '0') {
            let words = readableNumber.split(' ');
            words[words.length - 1] = '';
            readableNumber = words.join(' ');
        }
        for (let i = 0; i <= 9; i+=1){
            if( stringNumber[2] === (i).toString()){
                readableNumber = readableNumber + numberPlasesTeenArray[i];
            }
        }
    }

    if (length === 2 && stringNumber[0] === '1'){
        for (let i = 0; i <= 9; i+=1){
            if( stringNumber[1] === (i).toString()){
                readableNumber = readableNumber + numberPlasesTeenArray[i];
            }
        }
    }
    if(number < 10){ readableNumber = numberPlasesArray[0][number-1];}
    if(number === 0){readableNumber = 'zero';}

    return(readableNumber.trim());

}
