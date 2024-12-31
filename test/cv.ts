import cv from "..";

export async function setupOpenCv() {
  await cv.loadOpenCV("lib/opencv_js.wasm")
}

export function translateException(err: any) {
  if (typeof err === "number") {
    try {
      const exception = cv.exceptionFromPtr(err);
      return exception;
    } catch (error) {
      // ignore
    }
  }
  return err;
}
