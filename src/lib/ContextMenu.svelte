<script>
  export let context;
  export let menu;
  export let selectedRows;
  export let rows;
  export let columns;

  import { fade } from "svelte/transition";

  function getTableText(data) {
    let columnNames = columns.map((col) =>
      col.display ? col.display : col.dataName,
    );
    let th = columnNames.join("\t");
    data = data.map((td) => td.data);
    let td = data.map((item) => Object.values(item).join("\t")).join("\n");

    return `${th}\n${td}`;
  }

  async function copy(amount) {
    switch (amount) {
      case "cell":
        await navigator.clipboard.writeText(
          context.row.data[context.column.dataName],
        );
        break;
      case "row":
        await navigator.clipboard.writeText(getTableText([context.row]));
        break;
      case "selected":
        await navigator.clipboard.writeText(getTableText(selectedRows));
        break;
      case "all":
        await navigator.clipboard.writeText(getTableText(rows));
        break;
    }

    menu = false;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="context-menu"
  transition:fade={{ duration: 100 }}
  style="top: {context.y + 20}px; left: {context.x + 20}px;"
>
  <div class="option" on:click={() => copy("cell")}>Copy this cell</div>
  <div class="option" on:click={() => copy("row")}>Copy this row</div>
  {#if selectedRows.length > 0}
    <div class="option" on:click={() => copy("selected")}>
      Copy selected rows
    </div>
  {/if}
  <div class="option" on:click={() => copy("all")}>Copy all data</div>
</div>

<style>
  .context-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    border: 1px solid #0003;
    box-shadow: 2px 2px 5px 0px #0002;
    background: white;
    z-index: 999999;
  }

  .option {
    padding: 6px 15px;
    cursor: default;
    font-size: 14px;
    display: flex;
    align-items: center;
    grid-gap: 5px;
    white-space: nowrap;
  }
  .option:hover {
    cursor: pointer;
    background: #0002;
  }
</style>
