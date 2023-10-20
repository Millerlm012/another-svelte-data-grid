<script>
  import DataGrid from "$lib/DataGrid.svelte";

  let columns = [
    {
      display: "Adult",
      dataName: "adult",
    },
    {
      display: "Collection",
      dataName: "belongs_to_collection",
    },
    {
      display: "Budget",
      dataName: "budget",
    },
  ];
  let rows = [
    {
      fruitName: "Apple",
      fruitColor: null,
    },
    {
      fruitName: "Blueberry",
      fruitColor: 0,
    },
    {
      fruitName: "Tomato",
      fruitColor: "0",
    },
    {
      fruitName: "Apple",
      fruitColor: "",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
    {
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitName: "Blueberry",
      fruitColor: "Blue",
    },
    {
      fruitName: "Tomato",
      fruitColor: "Red",
    },
  ];
</script>

<div class="page">
  <div class="grid">
    <DataGrid {rows} {columns} selectable={true} />
  </div>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: grey;
  }

  .grid {
    width: 80%;
    height: 80%;
  }
</style>
