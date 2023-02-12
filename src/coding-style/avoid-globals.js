// With Global Variables
const WELCOME = 'Hello!';
const GOODBYE = 'Good bye, have a nice day!';

function casualConversation() {
  console.log(WELCOME);
  // Some gossiping
  console.log(GOODBYE);
}

// With Local Variables
function casualConversation() {
  const WELCOME = 'Hello!';
  console.log(WELCOME);
  // Some gossiping
  const GOODBYE = 'Good bye, have a nice day!';
  console.log(GOODBYE);
}
