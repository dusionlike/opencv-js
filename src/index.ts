export * from "./types/opencv";

export declare const loadPromise: Promise<void> | undefined;

export declare function loadOpenCV(wasmFile: string | ArrayBuffer): Promise<void>;
