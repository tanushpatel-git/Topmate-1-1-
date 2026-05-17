import {
  StreamCall,
  StreamTheme,
  StreamVideo,
  SpeakerLayout,
  CallControls,
} from "@stream-io/video-react-sdk";

import "@stream-io/video-react-sdk/dist/css/styles.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axiosInstance from "../../utility/axios";

import { initStreamClient } from "../../utility/Stream";

function VideoCallPage() {

  const { callId } = useParams();

  const [client, setClient] = useState(null);

  const [call, setCall] = useState(null);

  useEffect(() => {

    let currentCall;

    const init = async () => {

      try {

        const res = await axiosInstance.get("/chat/token");

        const {
          token,
          apiKey,
          userId,
          userName,
          userImage,
        } = res.data;

        const streamClient = await initStreamClient({
          apiKey,
          token,
          user: {
            id: userId,
            name: userName,
            image: userImage,
          },
        });

        setClient(streamClient);

        currentCall = streamClient.call(
          "default",
          callId
        );

        await currentCall.join({
          create: true,
        });

        setCall(currentCall);

      } catch (error) {
        console.log(error);
      }
    };

    init();

    return () => {
      if (currentCall) {
        currentCall.leave();
      }
    };

  }, [callId]);

  if (!client || !call) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <StreamTheme>

          <div className="h-screen flex flex-col">

            <div className="flex-1">
              <SpeakerLayout />
            </div>

            <div className="p-4">
              <CallControls />
            </div>

          </div>

        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  );
}

export default VideoCallPage;