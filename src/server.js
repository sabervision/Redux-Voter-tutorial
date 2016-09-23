import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8090);

	// publish the whole state to any connected user when changes occur
	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	// listens for connection events for new client connections
	// emits event to update new client state with state of server
	io.on('connection', (socket) => {
		socket.emit('state', store.getState().toJS());
	})

}