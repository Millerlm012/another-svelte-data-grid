export function rowColorCase(row, colorCases) {
    let finalColor;
    colorCases.forEach((colCase, i) => {
        if (Object.keys(colCase).length > 0) {
            if (row.data[colCase.column] == colCase.case) {
                finalColor = colCase.color;
            }
        }
    })
    return finalColor;
}