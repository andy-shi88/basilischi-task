let api = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  getPosts() {
    return fetch(this.url, {method: 'GET'}).then((res) => res.json());
  },
  deletePost(rowData) {
    fetch(this.url + '/' + rowData.id, {method: 'DELETE'}).done(()=>{
      console.log(rowData.title + ' with id: ' + rowData.id + ' have been deleted!');
    });
  },
  updatePost(rowData) {
    fetch(this.url + '/' + rowData.id,
          {method: 'PUT'},
          data: {
            title: rowData.title,
            body: rowData.body
          }
        ).done(()=>{
      console.log('POST with id: ' + rowData.id + ' have been UPDATED!');
    });
  },
  createPost(rowData) {
    fetch(this.url + '/' + rowData.id,
          {method: 'POST'},
          data: {
            id: rowData.id,
            userId: rowData.userId,
            title: rowData.title,
            body: rowData.body
          }
        ).done(()=>{
      console.log(rowData.title + ' with id: ' + rowData.id + ' have been POSTED  !');
    });
  }
}
module.exports = api;
