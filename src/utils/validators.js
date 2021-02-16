export const requered = value => {
    if (!value)
        return "Reqiered field";
}

export const maxLength = length => value => {
    if (value.length > length)
        return `Must be ${length} characters or less`
}

export const minLength = length => value => {
    if (value.length < length)
        return `Must be ${length} characters or more`
}