module.exports = function getNotificationEmail(
  ownerName,
  functionName,
  UserAddress,
  amount
) {
  const emailTemplate = `\
          \
          <strong> Dear ${ownerName}, </strong>\
          I trust this message finds you well. I am writing to inform you of an important event related to your smart contract on the Ethereum blockchain. \ <br><br>
          The function '${functionName}' in your contract has been triggered, and our monitoring system has detected potential vulnerability to reentrancy or flash loan attacks. This event has triggered a notification to ensure you are promptly informed. \ <br><br>
          Event Details: \ <br><br>
          - Contract Owner: ${ownerName} \ <br>
          - Function Name: ${functionName} \ <br><br>
          - UserAddress : ${UserAddress} \ <br><br>
          - Transfer Amount : ${amount} Wei \ <br><br>
          Please review the recent activity on your contract and take appropriate measures to address any potential security concerns. \ <br><br>
          \
          \
          \
          `;

  return emailTemplate;
};
