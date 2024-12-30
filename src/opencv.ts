// @ts-ignore
import cv from "../dist/opencv.js"

cv.waitOpenCVLoad = () => {
  if (cv.Mat) {
    return Promise.resolve()
  }
  return new Promise<void>((resolve, _reject) => {
    let oldCallback: any
    if (cv.onRuntimeInitialized) {
      oldCallback = cv.onRuntimeInitialized
    }
    cv.onRuntimeInitialized = () => {
      oldCallback?.()
      resolve()
    }
  })
}

export default cv
