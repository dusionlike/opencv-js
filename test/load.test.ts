import cv from "..";
import { translateException } from "./cv";

describe("loadOpenCv", () => {
  it("test loadOpenCv by path", async () => {
    try {
      cv.loadOpenCV("lib/opencv_js.wasm");
      await cv.loadPromise;
      expect(cv).toHaveProperty("Mat");
    } catch (error) {
      throw translateException(error);
    }
  });

  it("test loadOpenCv by buffer", async () => {
    try {
      const fs = require("fs");
      const buffer = fs.readFileSync("lib/opencv_js.wasm");
      await cv.loadOpenCV(buffer);
      expect(cv).toHaveProperty("Mat");
    } catch (error) {
      throw translateException(error);
    }
  });
});
