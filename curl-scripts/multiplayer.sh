curl "https://tic-tac-toe-wdi-multiplayer.herokuapp.com/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  data: ${}
