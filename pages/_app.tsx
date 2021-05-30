import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fab, fas);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
