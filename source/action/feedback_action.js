const SendFeedBackEffect = (props) => [
  function (dispatch, props) {
    Email.send({
      SecureToken: "5f7a7469-6555-4c48-a853-54dacecfd95c",
      To: "mitatoto1997@gmail.com",
      From: "mitatoto1997@gmail.com",
      Subject: "Another Writing Application Feedback",
      Body: props.feedback,
    })
      .then(function (message) {
        alert(message);
      })
      .finally(() => dispatch(props.action));
  },
  props,
];

const sendFeedback = (state, feedback) => [
  state,
  SendFeedBackEffect({
    feedback: feedback,
    action: (state) => state,
  }),
];

module.exports.FeedbackActions = {
  SendFeedback: sendFeedback,
};
