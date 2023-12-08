<script>
  import DataGrid from "$lib/DataGrid.svelte";
  import rows from "../example_data/movies_metadata.json";

  let columns = [
    {
      display: "Adult",
      dataName: "adult",
    },
    {
      display: "Budget",
      dataName: "budget",
    },
    {
      display: "Homepage",
      dataName: "homepage",
    },
    {
      display: "ID",
      dataName: "id",
    },
    {
      display: "IMDB ID",
      dataName: "imdb_id",
    },
    {
      display: "OG Language",
      dataName: "original_language",
    },
    {
      display: "OG Title",
      dataName: "original_title",
    },
    {
      display: "Overview",
      dataName: "overview",
    },
    {
      display: "Popularity",
      dataName: "popularity",
    },
    {
      display: "Poster Path",
      dataName: "poster_path",
    },
    {
      display: "Release Date",
      dataName: "release_date",
    },
    {
      display: "Revenue",
      dataName: "revenue",
    },
    {
      display: "Runtime",
      dataName: "runtime",
    },
    {
      display: "Status",
      dataName: "status",
    },
    {
      display: "Tagline",
      dataName: "tagline",
    },
    {
      display: "Title",
      dataName: "title",
    },
    {
      display: "Video",
      dataName: "video",
    },
    {
      display: "Vote Avg.",
      dataName: "vote_average",
    },
    {
      display: "Vote Count",
      dataName: "vote_count",
    },
  ];
</script>

<div class="page">
  <div class="header">
    <h1>Data Grid Demo</h1>
    <h4>45,572 rows</h4>
  </div>
  <div class="grid">
    <DataGrid {rows} {columns} selectable={true} />
  </div>
</div>

<style>
  .page {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .header {
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 10px;
  }

  .grid {
    width: 80%;
    height: 80%;
    border: 1px solid black;
  }
</style>
