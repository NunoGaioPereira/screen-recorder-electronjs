const videoElement = document.querySelector('video');
const startBtn = document.getelementById('startBtn');
const stopBtn = document.getelementById('stopBtn');
const videoSelectBtn = document.getelementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

// Get available video sources
async function getVideoSources() {
	const inputSources = await desktopCapturer.getSources({
		types: ['window', 'screen']
	});

	const videoOptionsMenu = Menu.buildFromTemplate(
		inputSources.map(source => {
			return {
				label: source.name,
				click: () => selectSource(source)
			};
		})
	);

	videoOptionsMenu.popup();
}

// Add tests