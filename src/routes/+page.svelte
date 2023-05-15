<script>
    import DataGrid from '$lib/DataGrid.svelte';
    // import Wrapper from '$lib/Wrapper.svelte';

    function styleRows(row) {
        switch(row.data.fruitColor) {
            case 'Red':
                return 'red';
            case 'Blue':
                return 'blue';
        }
    }

    let columns = [
        {
            display: 'Fruit Name',
            dataName: 'fruitName',
            width: 300
        },
        {
            display: 'Color',
            dataName: 'fruitColor',
            width: 600,
            styleFunc: styleRows
        }
    ];
    let rows = [
        {
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        },{
            fruitName: 'Apple',
            fruitColor: 'Red'
        },
        {
            fruitName: 'Blueberry',
            fruitColor: 'Blue'
        },
        {
            fruitName: 'Tomato',
            fruitColor: 'Red'
        }
    ];
</script>

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

<div class="page">
    <div class="grid">
        <DataGrid rows={rows} columns={columns} selectable={true} />
    </div>
</div>