module.exports = {
  // your community or team name to display on join page.
  community: 'taoxanh-team',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: 'taoxanh-team.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: 'xoxp-109564067586-110239156438-108858103616-14ae2b96c18a48aa52e884a084a2bb65',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: null,

  locale: "en",
};
