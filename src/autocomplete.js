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
          name: "Clt reported",
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
        {
          id: 4,
          name: "Clt acknowledged",
          type: "contact",
        },
        {
          id: 5,
          name: "Clt agreed",
          type: "contact",
        },
        {
          id: 6,
          name: "Clt denied",
          type: "contact",
        },
        {
          id: 7,
          name: "Clt expressed",
          type: "contact",
        },
        {
          id: 8,
          name: "They reported",
          type: "contact",
        },
        {
          id: 8,
          name: "Therapist explained",
          type: "contact",
        },
        {
          id: 9,
          name: "but maintained that",
          type: "contact",
        },
        {
          id: 10,
          name: "Clt requested",
          type: "contact",
        },
        {
          id: 11,
          name: "Clt did not want",
          type: "contact",
        },
        {
          id: 12,
          name: "Clt was unsure",
          type: "contact",
        },
        {
          id: 13,
          name: "Clt became emotional in the session",
          type: "contact",
        },
        {
          id: 14,
          name: "Clt decided",
          type: "contact",
        },
        {
          id: 15,
          name: "Clt did not understand",
          type: "contact",
        },
        {
          id: 16,
          name: "Clt disagreed",
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
