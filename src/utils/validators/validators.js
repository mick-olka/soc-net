
export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "Field is required!";
    // throw new SubmissionError({
    //     _error: 'Field is required!'
    // });
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length>maxLength) {
        return `Max length is ${maxLength} chars`;
        // throw new SubmissionError({
        //     _error: `Max length is ${maxLength} chars`
        // });
    }
    return undefined;
}
