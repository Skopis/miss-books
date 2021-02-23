
export default {
    name: 'book-add',
    template: `
    <section class="book-add">
        <h1>Add book from Gogle Books</h1>
        <input type="text" placeholder="search by book name or author" @input="updateData" v-model="searchStr">
        <pre v-if="searchResults">{{searchResults}}</pre>
    </section>
    `,
    data() {
        return {
            searchStr: 'temp',
            googleBook: null,
            searchResults: 'no results'
        }
    },
    methods: {
        updateData() {
            fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.searchStr}%20javascript`)
                .then(results => results.json())
                .then(formattedResults => {
                    const { saleInfo } = formattedResults.items[0]
                    console.log('saleInfo', saleInfo)
                    this.searchResults = saleInfo;
                })
        },
    },
    created() {

    },
}
