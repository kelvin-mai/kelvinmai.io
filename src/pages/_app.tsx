import { type AppType } from "next/app";

import { api } from "@app/utils/api";

import "@app/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
