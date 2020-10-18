const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

const translateMonth = (month) => {
    let translatedMonth = -1;

    MONTHS.forEach((element,index) => {
        if(element === month){
            translatedMonth =  index + 1;
        }
    });

    return translatedMonth;
};

export const timeConverter = (date) => {
    return {
            day: ("0" + date.day).slice(-2), 
            month: MONTHS[date.month - 1], 
            year: date.year
        };
};
export const calcDateDiff = (startDate,endDate) => {
    const firstDate = new Date(`${startDate.year}/${translateMonth(startDate.month)}/${startDate.day}`);
    const lastDate = new Date(`${endDate.year}/${translateMonth(endDate.month)}/${endDate.day}`);

    return ((Math.abs(firstDate - lastDate) * (8.64 * (10**7)) / (1000*60*60*24)) % 7);
};