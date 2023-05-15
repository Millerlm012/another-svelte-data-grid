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