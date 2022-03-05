// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  roomName: null,

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    App.fetch(Rooms.addRooms);
    App.fetch(RoomsView.render);

    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function () {
    // TODO: Render out the list of rooms.
    Rooms._data.forEach((room) => {
      RoomsView.$select.append(`<option>${room}</option>`);
    });
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option>${roomname}</option>`);
  },

  handleChange: function () {
    // TODO: Handle a user selecting a different room.
    // console.log(RoomsView.$select.val());
    if (RoomsView.$select.val() === 'All Rooms') {
      MessagesView.render();
      return;
    }

    MessagesView.$chats.empty();
    var messages = '';
    var count = 25;
    for (var i = 0; i < count; i++) {
      if (!Messages._data[i].username || !Messages._data[i].text) {
        count++;
        continue;
      }

      if (Messages._data[i].roomname === RoomsView.$select.val()) {
        messages += MessageView.render({
          'username': Messages._data[i].username,
          'text': Messages._data[i].text
        });
      }
    }

    MessagesView.$chats.append(messages);
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var currRoom = prompt('Room name?');
    Rooms.add(currRoom);
  }

};