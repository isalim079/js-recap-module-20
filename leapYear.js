function leapYear(nameOfYear) {
    let yearList = [];
    for(let i = 0; i < nameOfYear.length; i++) {
        let elements = nameOfYear[i];
        // console.log(elements);
        
        if (elements % 4 == 0 || elements % 400 != 0 || elements % 100 != 0) {
            let leapCheck = yearList.push(elements);
            console.log(leapCheck);  
        }
        else {
            
        }
    }
}
let years = [1433, 1632, 1560, 1900, 1940, 2002, 2008, 2012];
leapYear(years);

