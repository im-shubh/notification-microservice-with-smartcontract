# Vulnerable Smart Contract and Notification Microservice

This involves creating a vulnerable smart contract susceptible to Reentrancy or flash loan attacks, incorporating Ownable and Pausable functionalities. Additionally, a notification microservice is implemented to send alerts when the vulnerable function is called.

## Vulnerable Smart Contract

## Environment Variables

Create a `.env` file in the root of your project with the following environment variables:

```env
ALCHEMY_API_KEY=your_alchemy_api_key
PRIVATE_KEY=your_private_key
```

### Installation and Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/im-shubh/notification-microservice-with-smartcontract
    ```

2. Navigate to the project directory:

    ```bash
    cd notification-microservice-with-smartcontract/Vulnerable-Smart-Contract
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Deploy the vulnerable smart contract to a testnet:

   ```bash
   npm run contract-deploy
   ```

### Smart Contract Details

The vulnerable smart contract is implemented in Solidity and can be found in the `contracts` directory. It includes Reentrancy or flash loan vulnerabilities, Ownable, and Pausable functionalities inspired by OpenZeppelin contracts.




## Notification Microservice

## Environment Variables

Create a `.env` file in the root of your project with the following environment variables:

```env
ALCHEMY_API_KEY=your_alchemy_api_key
PRIVATE_KEY=your_private_key
OWNER_NAME=John
OWNER_EMAIL=example@gmail.com

HOST=smtp.example.com
PORT=465
SENDER_EMAIL_ID=sender@shorts-ai.in
SENDER_EMAIL_AUTH=example@123
CONTRACT_ADDRESS=0x00000000000000000000
```

### Installation and Setup

1. Navigate to the project directory:

   ```bash
   cd ../notification-microservice
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
**Note:** Update the CONTRACT_ADDRESS in .env from Vulnerable-Smart-Contract/ContractAdress.json file
 


### Microservice Details

The notification microservice is implemented using Node.js. It listens for events emitted by the vulnerable smart contract and sends an email notification when the vulnerable function is called.

## Usage

1. Start the notification microservice:

   ```bash
   npm start
   ```

2. Interact with the vulnerable smart contract, calling the function :

   Run command in Vulnerable-Smart-Contract root directory

    ````bash
    cd ../Vulnerable-Smart-Contract
    npm run contract-test
    ```
````
