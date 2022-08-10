import { io } from "socket.io-client";
const URL = "http://localhost:3008";
// const socket = io(URL);
const socketLivePrice = io(URL, { autoConnect: false });
export default socketLivePrice;
