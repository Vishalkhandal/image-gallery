import { Client, Storage, ID } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68283cff0023035f535c');

const storage = new Storage(client)

export {storage, ID}