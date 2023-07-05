function getUserViaFetch() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      debugger;
      return response.json();
    })
    .then((user) => {
      debugger;
      console.log('User via fetch: ', user);
    });
}
