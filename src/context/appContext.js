import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = 'https://chatappbackendnode.onrender.com';

export const socket = io(SOCKET_URL);
export const AppContext = React.createContext();
const defaultExport = {
    socket,
    AppContext,
  };
  
  export default defaultExport;