export function styleRow(row, styleFunctions) {
    let finalColor;
    styleFunctions.forEach(func => {
        finalColor = func(row);
    })

    return finalColor
}