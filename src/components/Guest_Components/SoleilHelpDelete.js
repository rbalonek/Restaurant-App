const axios = require('axios');
// this is where your POST url goes return
const { AIRTABLE_API_KEY } = process.env;
const BASE_URL = "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill/recknMpNPq7Vqy2r4/"

const yeetAirtable = () => {
  // get our bills
  const billEntries = ['rec109238', 'rec123894yr7y8ef'];
  const post = setInterval(async () => {
    // grabbing our current id
    const id = billEntries.pop();
    // assess how many are left for our console log
    const remaining = billEntries.length;
    // this guy stops the interval in case there are no more entries
    if (!id) {
      clearInterval(post);
    }
    // make an axios request to the delete endpoint for entry with id ${id}
    await axios.delete(`${BASE_URL}${id}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
    // nice lil log
    console.table(id);
    console.log(`Above entry just deleted. ${remaining} entries left!`);
  }, 250);
};
yeetAirtable();