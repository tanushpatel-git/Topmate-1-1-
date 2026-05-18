import { StreamVideoClient } from "@stream-io/video-react-sdk";

let client;

export const initStreamClient = async ({
  apiKey,
  user,
  token,
}) => {

  if (client?.user?.id === user.id) {
    return client;
  }

  if (client) {
    await client.disconnectUser();
  }

  client = new StreamVideoClient({
    apiKey,
    user,
    token,
  });

  return client;
};

export const disconnectStreamClient = async () => {
  if (client) {
    await client.disconnectUser();
    client = null;
  }
};