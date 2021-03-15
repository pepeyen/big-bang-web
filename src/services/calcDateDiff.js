const calcDateDiff = (startDate,endDate) => {
    const firstDate = new Date(startDate),
          lastDate = new Date(endDate);

    return Math.round(Math.abs(firstDate - lastDate) / (8.64 * (10**7))) + 1;
};

export default calcDateDiff;