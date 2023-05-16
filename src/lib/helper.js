export function checkType(val) {
    let floatVal = parseFloat(val);
    let dateVal = Date.parse(val);
    if (dateVal) {
        return 'date'
    } else if (floatVal) {
        return 'number'
    }

    return 'string'
}

export function orderByString(rows, colName, asc) {
    rows = rows.sort(function(a, b) {
        let la = a[colName] ? a[colName].toLowerCase() : a[colName];
        let lb = b[colName] ? b[colName].toLowerCase() : b[colName];

        // nulls sort after everything else
        if (la === null) {
            return 1;
        }
        if (lb === null) {
            return -1;
        }

        if (asc) {
            if (la < lb) {
                return -1;
            }
            if (la > lb) {
                return 1;
            }
        } else {
            if (la > lb) {
                return -1;
            }
            if (la < lb) {
                return 1;
            }
        }
        return 0;
    })

    return rows
}

export function orderByNumber(rows, colName, asc) {
    rows.sort((a, b) => {
        if (asc) {
            return a[colName] - b[colName]
        }
        return b[colName] - a[colName]
    })

    return rows
}

export function orderByDate(rows, colName, asc) {
    rows.sort((a, b) => {
        if (asc) {
            return new Date(a[colName]) - new Date(b[colName]);
        }
        return new Date(b[colName]) - new Date(a[colName]);
    })

    return rows
}

export function selectRows(row, rows, selectedRows, e) {
    if (e.ctrlKey) {
        if (!selectedRows.includes(row)) {
            selectedRows.push(row);
        } else {
            let i = selectedRows.indexOf(row);
            selectedRows.splice(i, 1);
        }
    } else if (e.shiftKey) {
        if (selectedRows.length > 0) {
            let lastSelectedI = selectedRows.at(-1).i;
            let i = row.i;
            lastSelectedI < i ? selectedRows = rows.slice(lastSelectedI, i+1) : selectedRows = rows.slice(i, lastSelectedI+1);
        }
    } else {
        if (selectedRows.includes(row)) {
            selectedRows = [];
        } else {
            if (selectedRows.length > 0) {
                selectedRows = [];
            }

            selectedRows.push(row);
        }
    }

    return selectedRows
}

export function checkSelectedRows(row, selectedRows) {
    if (selectedRows.some((r) => r.i === row.i)) {
        return true
    }

    return false
}