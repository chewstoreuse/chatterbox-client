// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRooms: function () {
    var count = 25;
    for (var i = 0; i < count; i++) {
      if (!Messages._data[i].username || !Messages._data[i].text) {
        count++;
        continue;
      }

      if (Rooms._data.indexOf(Messages._data[i].roomname) === -1 && Messages._data[i].roomname !== null) {
        Rooms._data.push(Messages._data[i].roomname);
      }
    }
  },

  markRoomSelected: function () {

  }

};