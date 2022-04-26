const convertTimestamp = (timestamp: number) => {
    const now = Date.now();
    const difference = now - timestamp;

    const ONE_SECOND = 1000;
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_MONTH = ONE_DAY * 30;
    const ONE_YEAR = ONE_DAY * 365;

    let outputString = "";

    if (difference > ONE_YEAR) {
        outputString = "> one year"
    } else if (difference > ONE_MONTH && difference <= ONE_YEAR) {
        const months = Math.floor(difference / ONE_MONTH);
        outputString = `${months} month${months !== 1 ? "s" : ""}`
    } else if (difference > ONE_DAY && difference <= ONE_MONTH) {
        const days = Math.floor(difference / ONE_DAY);
        outputString = `${days} day${days !== 1 ? "s" : ""}`
    } else if (difference > ONE_HOUR && difference <= ONE_DAY) {
        const hours = Math.floor(difference / ONE_HOUR);
        outputString = `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else if (difference > ONE_MINUTE && difference <= ONE_HOUR) {
        const minutes = Math.floor(difference / ONE_MINUTE);
        outputString = `${minutes} minute${minutes !== 1 ? "s" : ""}`
    } else if (difference > ONE_SECOND * 10 && difference <= ONE_MINUTE) {
        const seconds = Math.floor(difference / ONE_SECOND);
        outputString = `${seconds} second${seconds !== 1 ? "s" : ""}`
    } else {
        outputString = "a few seconds"
    }

    return outputString;
}

export default convertTimestamp;