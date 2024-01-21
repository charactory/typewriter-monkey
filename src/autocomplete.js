$(function () {
  $("textarea.mention").mentionsInput({
    triggerChar: "/",
    showAvatars: false,
    minChars: 1,
    allowRepeat: true,
    onDataRequest: function (mode, query, callback) {
      var data = [
        {
          id: 1,
          name: "Client reported",
          type: "contact",
        },
        {
          id: 2,
          name: "Therapist suggested",
          type: "contact",
        },
        {
          id: 3,
          name: "partner",
          type: "contact",
        },

      ];

      data = _.filter(data, function (item) {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });

      callback.call(this, data);
    },
  });
});
