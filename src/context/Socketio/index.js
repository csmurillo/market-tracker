import { io } from "socket.io-client";
const URL = "http://localhost:3004";
// const socket = io(URL);
const socket = io(URL, { autoConnect: false });
export default socket;
