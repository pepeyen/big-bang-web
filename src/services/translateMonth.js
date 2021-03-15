/**
 * Returns a detailed romanized version from a given month.
 * 
 * @param {number} month Target month value.
 * @returns {string} Value of the romanized version from the month.
 */
const translateMonth = (month) => {
    const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    let translatedMonth = -1;

    MONTHS.forEach((element,index) => {
        if(index === month){
            translatedMonth = element;
        };
    });

    return  translatedMonth;
};

export default translateMonth;