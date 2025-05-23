import { Client, Storage, ID } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_PROJECT_ID);

const storage = new Storage(client)

export {storage, ID}