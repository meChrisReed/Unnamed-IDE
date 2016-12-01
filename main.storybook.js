import { app, BrowserWindow, Menu, shell } from 'electron';

let menu;
let template;
let mainWindow = null;


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}
// [data-reactroot] > div {background: transparent !importnant;}
// .Pane.horizontal.Pane1 > div > div {background: transparent !important;}
// a {color: #fff;}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', async () => {

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 728,
		vibrancy: 'dark'
  });

  mainWindow.loadURL('http://localhost:6006');

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
    mainWindow.webContents.executeJavaScript(`
			var body = document.getElementsByTagName('body')[0];
			var style = document.createElement('style');
			style.innerHTML = '' +
				'[data-reactroot] > div {background: transparent !important;}' +
				'.Pane.horizontal.Pane1 > div > div {background: transparent !important;}' +
				'.Pane.vertical.Pane1 a, button, h3, h4 {color: #fff !important;}' +
				'div {color: #fff;}' +
				'b {color: #000;}' +
				'.Pane.vertical.Pane1 > div > div > div {background: transparent !important;}';
			body.appendChild(style);
			console.log(body, body, style)
			`);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
	//
});
