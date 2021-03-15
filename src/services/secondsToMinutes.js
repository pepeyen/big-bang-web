/**
 * Convert the given seconds to minutes and seconds.
 * 
 * @param {number} valueInSeconds Target value in seconds.
 * @returns {string} Minutes and seconds following the MM:SS formatting.
 */
const secondsToMinutes = (valueInSeconds) => {
    const minutes = Math.floor(valueInSeconds / 60),
          seconds = Math.floor(valueInSeconds - (minutes * 60));

    return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}`: seconds);
};

export default secondsToMinutes;