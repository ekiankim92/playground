import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  ApolloProvider,
} from "@apollo/client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/dist/shared/lib/router/router";

interface IGlobalConText {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalConText>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    isEdit: false,
    isOpen: false,
  };

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
