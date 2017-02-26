let api = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  getPosts() {
    return fetch(this.url, {method: 'GET'}).then((res) => res.json());
  },
  deletePost(rowData) {
    fetch(this.url + '/' + rowData.id, {method: 'DELETE'}).done(()=>{
      console.log(rowData.title + ' with id: ' + rowData.id + ' have been deleted!');
    });
  }
}
module.exports = api;
