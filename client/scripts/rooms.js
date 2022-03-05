// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRooms: function () {
    for (var i = 0; i < Messages._data.length; i++) {
      if (!Messages._data[i].username || !Messages._data[i].text) {
        continue;
      }

      if (Messages._data[i].roomname) {
        Rooms._data.add(Messages._data[i].roomname);
      }
    }
  },

  add: function (newRoom) {
    Rooms._data.add(newRoom);
  }

};