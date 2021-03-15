//Services
import { translateMonth } from '.';

const timeConverter = (dateString) => {
    const date = new Date(dateString);

    return {
        day: ("0" + date.getDate()).slice(-2), 
        month: translateMonth(date.getMonth()), 
        year: date.getFullYear()
    };
};

export default timeConverter;