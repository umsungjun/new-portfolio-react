import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/i18n.ts";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

// 채널톡 공식 로더 패키지. 직접 옮겨 두었던 설치 스니펫(channelService.ts)과 같은 API다.
ChannelService.loadScript();

ChannelService.boot({
  pluginKey: import.meta.env.VITE_CHANNEL_PLUGIN_KEY,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
