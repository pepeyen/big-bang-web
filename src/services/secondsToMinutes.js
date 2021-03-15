const secondsToMinutes = (valueInSeconds) => {
    const minutes = Math.floor(valueInSeconds / 60),
          seconds = Math.floor(valueInSeconds - (minutes * 60));

    return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}`: seconds);
};

export default secondsToMinutes;