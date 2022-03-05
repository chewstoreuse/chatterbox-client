// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.
  $username: $('#chats'),

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  initialize: function () {
    Friends.$username.on('click', '.username', Friends.handleClick);
    console.log(Friends.$username.children());
  },

  isFriend: function (username) {
    return Friends._data.has(username);
  },

  handleClick: function (event) {
    var friend = $(event.target).data('username');
    Friends._data.add(friend);
  },
};