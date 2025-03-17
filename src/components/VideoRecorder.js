// src/components/VideoRecorder.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoRecorder = ({ onVideoCapture }) => {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const startRecording = () => setRecording(true);
  const stopRecording = () => {
    setRecording(false);
    const videoSrc = webcamRef.current.getScreenshot();
    setVideoUrl(videoSrc);
    onVideoCapture(videoSrc);
  };

  return (
    <div>
      <Webcam audio={true} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? "Stop" : "Start"} Recording
      </button>
      {videoUrl && <video src={videoUrl} controls />}
    </div>
  );
};

export default VideoRecorder;
