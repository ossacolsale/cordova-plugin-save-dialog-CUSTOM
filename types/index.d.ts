interface CordovaPlugins {
    saveDialog: SaveDialog;
}

interface SaveDialog {
    saveFile(blob: Blob, name: string): Promise<void>;
    getFileUri(blob: Blob, name: string): Promise<string>;
    saveFileByUri(blob: Blob, uri: string): Promise<void>;
}