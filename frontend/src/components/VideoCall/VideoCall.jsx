import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utility/axios";

<<<<<<< HEAD
=======

>>>>>>> nikesh
function VideoCallPage() {

  const { callId } = useParams();

  const navigate = useNavigate();

  const [call, setCall] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let currentCall;

    const init = async () => {

      try {

        // ASK MEDIA PERMISSION
        let mediaStream = null;

        try {

          mediaStream =
            await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: true,
            });

          console.log("MEDIA ACCESS GRANTED");

        } catch (err) {

          console.log(
            "MEDIA ACCESS ERROR =>",
            err
          );
        }

        // GET DEVICES
        const devices =
          await navigator.mediaDevices.enumerateDevices();

        const hasMic = devices.some(
          (device) => device.kind === "audioinput"
        );

        const hasCamera = devices.some(
          (device) => device.kind === "videoinput"
        );

        console.log("HAS MIC =>", hasMic);

        console.log("HAS CAMERA =>", hasCamera);

        // STOP TEMP STREAM
        if (mediaStream) {

          mediaStream.getTracks().forEach((track) => {
            track.stop();
          });
        }

        // GET STREAM TOKEN
        const res =
          await axiosInstance.get("/stream/token");

        const {
          token,
          apiKey,
          userId,
          userName,
          userImage,
        } = res.data;

        // INIT STREAM CLIENT
        const streamClient =
          await initStreamClient({
            apiKey,
            token,
            user: {
              id: userId,
              name: userName,
              image: userImage,
            },
          });

        // CREATE CALL
        currentCall =
          streamClient.call("default", callId);

        // JOIN FIRST
        await currentCall.join({
          create: true,
          audio: true,
          video: true,
        });

        console.log("CALL JOINED");

        // ENABLE CAMERA AFTER JOIN
        if (hasCamera) {

          try {

            await currentCall.camera.enable();

            console.log("CAMERA ENABLED");

          } catch (err) {

            console.log(
              "CAMERA ENABLE ERROR =>",
              err
            );
          }
        }

        // ENABLE MIC AFTER JOIN
        if (hasMic) {

          try {

            await currentCall.microphone.enable();

            console.log("MIC ENABLED");

            console.log(
              "MIC STATE =>",
              currentCall.microphone.state
            );

          } catch (err) {

            console.log(
              "MIC ENABLE ERROR =>",
              err
            );
          }
        }

        setCall(currentCall);

        setLoading(false);

      } catch (error) {

        console.log(
          "VIDEO CALL ERROR =>",
          error
        );

        alert("Failed to join video call");

        navigate("/");
      }
    };

    init();

    return () => {

      if (currentCall) {
        currentCall.leave();
      }
    };

  },[callId, navigate]);

  // LEAVE CALL
  const handleLeave = async () => {

    if (call) {
      await call.leave();
    }

    navigate("/");
  };

  // LOADING
  if (loading || !call) {

    return (
      <div className="h-screen flex items-center justify-center bg-[#0f172a] text-white text-xl">
        Loading Video Call...
      </div>
    );
  }

  return (
    <StreamCall call={call}>

      <StreamTheme className="str-video__theme-dark">

        <div className="h-screen bg-[#0f172a] flex flex-col text-white">

          {/* HEADER */}
          <div className="h-16 border-b border-white/10 flex items-center justify-between px-6">

            <h1 className="text-lg font-semibold">
              Video Consultation
            </h1>

            <ParticipantCount />

          </div>

          {/* VIDEO AREA */}
          <div className="flex-1 p-4 relative">

            <div className="h-full rounded-3xl overflow-hidden shadow-2xl">
              <SpeakerLayout />
            </div>

            {/* CONTROLS */}
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                flex items-center gap-4
              "
            >

              {/* STREAM CONTROLS */}
              <CallControls />

              {/* DEVICE SETTINGS */}
              <DeviceSettings />

              {/* LEAVE */}
              <button
                onClick={handleLeave}
                className="
                  bg-red-500 hover:bg-red-600
                  text-white px-5 py-2
                  rounded-full font-medium
                  transition
                "
              >
                Leave
              </button>

            </div>

          </div>

        </div>

      </StreamTheme>

    </StreamCall>
  );

}



export default VideoCallPage;
