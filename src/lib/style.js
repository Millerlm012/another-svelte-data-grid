import { checkSelectedRows } from "./helper.js";

export function styleRowBackground(
  row,
  styleFunctions,
  selectedColor,
  selectedTextColor,
  selectedRows,
) {
  if (checkSelectedRows(row, selectedRows)) {
    return `background-color: ${selectedColor}; color: ${selectedTextColor};`;
  }

  let finalColor;
  styleFunctions.forEach((func) => {
    finalColor = func(row);
  });

  return `background-color: ${finalColor};`;
}
