 import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

<DynamicContextProvider
  settings={{
    initialAuthenticationMode: 'connect-only',
    enableVisitTrackingOnConnectOnly: false,
    ...
  }}
>
  {...}
</DynamicContextProvider>
