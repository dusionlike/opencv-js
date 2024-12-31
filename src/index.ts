import { CV } from "./types/opencv";
import createOpenCv from "../lib/opencv_js";

type CV2 = CV & {
  loadOpenCV: (wasmFile: string | ArrayBuffer) => Promise<void>;
  loadPromise?: Promise<void>;
};

const cv = {
  async loadOpenCV(wasmFile) {
    if (!this.loadPromise) {
      this.loadPromise = (async () => {
        let __cv: any;
        if (typeof wasmFile === "string") {
          __cv = await createOpenCv({
            locateFile: () => wasmFile,
          });
        } else {
          __cv = await createOpenCv({
            wasmBinary: wasmFile,
          });
        }
        Object.assign(this, __cv);
      })();
    }
    return this.loadPromise;
  },
} as CV2;

export default cv;
