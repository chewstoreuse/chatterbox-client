// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    App.fetch(MessagesView.render);
  },

  render: function () {
    // TODO: Render _all_ the messages.
    var messages = '';
    var count = 25;
    for (var i = 0; i < count; i++) {
      if (!Messages._data[i].username || !Messages._data[i].text) {
        count++;
        continue;
      }

      messages += MessageView.render({
        'username': Messages._data[i].username,
        'text': Messages._data[i].text
      });
    }

    MessagesView.$chats.append(messages);
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    var m = MessageView.render({
      'username': message.username,
      'text': message.text
    });

    MessagesView.$chats.append(m);
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};