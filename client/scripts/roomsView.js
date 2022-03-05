// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  roomName: null,
  currRoom: null,

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    App.fetch(Rooms.addRooms);
    App.fetch(RoomsView.render);

  },

  render: function () {
    // TODO: Render out the list of rooms.
    for (var i = 0; i < Rooms._data.length; i++) {
      if (Rooms._data[i].roomname) {
        RoomsView.$select.append(`<option>${Rooms._data[i].roomname}</option>`);
      }
    }
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option>${roomname}</option>`);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.currRoom = prompt('Room name?');
    Rooms.addRooms(RoomsView.currRoom);
  }

};

// $('button').on('click', function () {
//   var roomName = prompt('Room name?');
//   $('select').append(`<option>${roomName}</option>`);
// });

