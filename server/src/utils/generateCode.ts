export const generateCode = () => {
    const min = 1111
    const max = 9999

    return Math.floor(Math.random() * (max - min + 1) + min)
}
