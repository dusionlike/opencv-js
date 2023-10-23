# opencv-js

OpenCV JavaScript version (NPM package) for node.js or browser. The file `opencv.js` was downloaded from https://docs.opencv.org/4.8.0/opencv.js

Get started guide [OpenCV.js Tutorials](https://docs.opencv.org/4.8.0/#:~:text=OpenCV%2DPython%20Tutorials-,OpenCV.js%20Tutorials,-Tutorials%20for%20contrib)

TypeScript is supported (thanks to `mirada`).

# Code Examples

- See code examples (React, Angular) in [opencv-js-examples](https://github.com/TechStark/opencv-js-examples)

# Live Demo

## Using in react.js project

- See [live demo and code here](https://codesandbox.io/s/techstarkopencv-js-demo-page-f7gvk?file=/src/TestPage.jsx)
  <img src="https://user-images.githubusercontent.com/132509/130320696-eaa3899b-2356-4e9f-bbc9-0a969465c58e.png" height="800px" alt="Live demo screenshot" />
- Get the test image from here [Lenna.png](test/Lenna.png)

## Using in Angular project

- See [code here](https://codesandbox.io/s/techstark-opencv-js-angular-demo-hkmc1n?file=/src/app/app.component.ts)

## Real-time face detection

- See [live demo and code here](https://codesandbox.io/s/opencv-js-face-detection-i1i3u)

![Real-time face detection](https://user-images.githubusercontent.com/132509/160820773-cdb023a6-77a2-4f2e-a0e9-fb06931c8f9f.gif)

# How to Use

- `npm install @techstark/opencv-js`
- or `yarn add @techstark/opencv-js`
- `import cv from "@techstark/opencv-js"`
- or `import * as cv from "@techstark/opencv-js"` for Angular

# Webpack Configuration (for browser usage)

If you use this package for browsers, you need to set some polyfills. In the file "webpack.config.js", set

```js
module.exports = {
  resolve: {
    modules: [...],
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  }
};
```

# What methods/properties are available

```js
import cv from "@techstark/opencv-js";

Object.keys(cv).filter((key) => !key.includes("dynCall"));
```

<details style="max-height: 600px;">
  <summary>Expand to see all methods and properties</summary>

```json
[
  "HEAP8",
  "HEAP16",
  "HEAP32",
  "HEAPU8",
  "HEAPU16",
  "HEAPU32",
  "HEAPF32",
  "HEAPF64",
  "preloadedImages",
  "preloadedAudios",
  "requestFullScreen",
  "requestFullscreen",
  "requestAnimationFrame",
  "setCanvasSize",
  "pauseMainLoop",
  "resumeMainLoop",
  "getUserMedia",
  "createContext",
  "FS_createFolder",
  "FS_createPath",
  "FS_createDataFile",
  "FS_createPreloadedFile",
  "FS_createLazyFile",
  "FS_createLink",
  "FS_createDevice",
  "FS_unlink",
  "InternalError",
  "BindingError",
  "getInheritedInstanceCount",
  "getLiveInheritedInstances",
  "flushPendingDeletes",
  "setDelayFunction",
  "UnboundTypeError",
  "count_emval_handles",
  "get_first_emval",
  "asm",
  "___wasm_call_ctors",
  "_malloc",
  "_free",
  "___errno_location",
  "_setThrew",
  "__ZSt18uncaught_exceptionv",
  "___cxa_demangle",
  "___getTypeName",
  "___embind_register_native_and_builtin_types",
  "stackSave",
  "stackAlloc",
  "stackRestore",
  "__growWasmMemory",
  "getMemory",
  "addRunDependency",
  "removeRunDependency",
  "calledRun",
  "then",
  "run",
  "FS",
  "imread",
  "imshow",
  "VideoCapture",
  "Range",
  "Point",
  "Size",
  "Rect",
  "RotatedRect",
  "Scalar",
  "MinMaxLoc",
  "Circle",
  "TermCriteria",
  "matFromArray",
  "matFromImageData",
  "stdin",
  "stdout",
  "stderr",
  "IntVector",
  "CharVector",
  "FloatVector",
  "DoubleVector",
  "PointVector",
  "MatVector",
  "RectVector",
  "KeyPointVector",
  "DMatchVector",
  "DMatchVectorVector",
  "Mat",
  "rotatedRectPoints",
  "rotatedRectBoundingRect",
  "rotatedRectBoundingRect2f",
  "exceptionFromPtr",
  "minEnclosingCircle",
  "floodFill",
  "minMaxLoc",
  "morphologyDefaultBorderValue",
  "CV_MAT_DEPTH",
  "CamShift",
  "meanShift",
  "Tracker",
  "getBuildInformation",
  "Canny",
  "Canny1",
  "GaussianBlur",
  "HoughCircles",
  "HoughLines",
  "HoughLinesP",
  "Laplacian",
  "Rodrigues",
  "Scharr",
  "Sobel",
  "absdiff",
  "adaptiveThreshold",
  "add",
  "addWeighted",
  "approxPolyDP",
  "arcLength",
  "bilateralFilter",
  "bitwise_and",
  "bitwise_not",
  "bitwise_or",
  "bitwise_xor",
  "blur",
  "boundingRect",
  "boxFilter",
  "calcBackProject",
  "calcHist",
  "calcOpticalFlowFarneback",
  "calcOpticalFlowPyrLK",
  "calibrateCameraExtended",
  "cartToPolar",
  "circle",
  "compare",
  "compareHist",
  "connectedComponents",
  "connectedComponentsWithStats",
  "contourArea",
  "convertScaleAbs",
  "convexHull",
  "convexityDefects",
  "copyMakeBorder",
  "cornerHarris",
  "cornerMinEigenVal",
  "countNonZero",
  "cvtColor",
  "demosaicing",
  "determinant",
  "dft",
  "dilate",
  "distanceTransform",
  "distanceTransformWithLabels",
  "divide",
  "divide1",
  "drawContours",
  "drawFrameAxes",
  "drawKeypoints",
  "drawMatches",
  "drawMatches1",
  "drawMatchesKnn",
  "eigen",
  "ellipse",
  "ellipse1",
  "ellipse2Poly",
  "equalizeHist",
  "erode",
  "estimateAffine2D",
  "estimateAffine2D1",
  "exp",
  "fillConvexPoly",
  "fillPoly",
  "filter2D",
  "findContours",
  "findHomography",
  "findHomography1",
  "findTransformECC",
  "findTransformECC1",
  "fitEllipse",
  "fitLine",
  "flip",
  "gemm",
  "getAffineTransform",
  "getDefaultNewCameraMatrix",
  "getLogLevel",
  "getOptimalDFTSize",
  "getPerspectiveTransform",
  "getRotationMatrix2D",
  "getStructuringElement",
  "goodFeaturesToTrack",
  "goodFeaturesToTrack1",
  "grabCut",
  "groupRectangles",
  "hconcat",
  "inRange",
  "initUndistortRectifyMap",
  "inpaint",
  "integral",
  "integral2",
  "invert",
  "isContourConvex",
  "kmeans",
  "line",
  "log",
  "magnitude",
  "matchShapes",
  "matchTemplate",
  "max",
  "mean",
  "meanStdDev",
  "medianBlur",
  "merge",
  "min",
  "minAreaRect",
  "mixChannels",
  "moments",
  "morphologyEx",
  "multiply",
  "norm",
  "norm1",
  "normalize",
  "perspectiveTransform",
  "pointPolygonTest",
  "polarToCart",
  "polylines",
  "pow",
  "projectPoints",
  "putText",
  "pyrDown",
  "pyrUp",
  "randn",
  "randu",
  "rectangle",
  "rectangle1",
  "reduce",
  "remap",
  "repeat",
  "resize",
  "rotate",
  "sepFilter2D",
  "setIdentity",
  "setLogLevel",
  "setRNGSeed",
  "solve",
  "solvePnP",
  "solvePnPRansac",
  "solvePnPRansac1",
  "solvePnPRefineLM",
  "solvePoly",
  "split",
  "sqrt",
  "subtract",
  "threshold",
  "trace",
  "transform",
  "transpose",
  "undistort",
  "vconcat",
  "warpAffine",
  "warpPerspective",
  "warpPolar",
  "watershed",
  "drawDetectedCornersCharuco",
  "drawDetectedDiamonds",
  "drawDetectedMarkers",
  "extendDictionary",
  "generateImageMarker",
  "getPredefinedDictionary",
  "blobFromImage",
  "readNet",
  "readNet1",
  "readNetFromCaffe",
  "readNetFromCaffe1",
  "readNetFromDarknet",
  "readNetFromDarknet1",
  "readNetFromONNX",
  "readNetFromONNX1",
  "readNetFromTFLite",
  "readNetFromTFLite1",
  "readNetFromTensorflow",
  "readNetFromTensorflow1",
  "readNetFromTorch",
  "fisheye_initUndistortRectifyMap",
  "fisheye_projectPoints",
  "AKAZE",
  "AgastFeatureDetector",
  "Algorithm",
  "AlignMTB",
  "BFMatcher",
  "BRISK",
  "BackgroundSubtractor",
  "BackgroundSubtractorMOG2",
  "CLAHE",
  "CalibrateCRF",
  "CalibrateDebevec",
  "CalibrateRobertson",
  "CascadeClassifier",
  "DescriptorMatcher",
  "FastFeatureDetector",
  "Feature2D",
  "GFTTDetector",
  "GraphicalCodeDetector",
  "HOGDescriptor",
  "KAZE",
  "MSER",
  "MergeDebevec",
  "MergeExposures",
  "MergeMertens",
  "MergeRobertson",
  "ORB",
  "QRCodeDetector",
  "QRCodeDetectorAruco",
  "QRCodeDetectorAruco_Params",
  "Tonemap",
  "TonemapDrago",
  "TonemapMantiuk",
  "TonemapReinhard",
  "TrackerMIL",
  "TrackerMIL_Params",
  "aruco_ArucoDetector",
  "aruco_Board",
  "aruco_CharucoBoard",
  "aruco_CharucoDetector",
  "aruco_CharucoParameters",
  "aruco_DetectorParameters",
  "aruco_Dictionary",
  "aruco_GridBoard",
  "aruco_RefineParameters",
  "barcode_BarcodeDetector",
  "dnn_Net",
  "segmentation_IntelligentScissorsMB",
  "CV_8UC1",
  "CV_8UC2",
  "CV_8UC3",
  "CV_8UC4",
  "CV_8SC1",
  "CV_8SC2",
  "CV_8SC3",
  "CV_8SC4",
  "CV_16UC1",
  "CV_16UC2",
  "CV_16UC3",
  "CV_16UC4",
  "CV_16SC1",
  "CV_16SC2",
  "CV_16SC3",
  "CV_16SC4",
  "CV_32SC1",
  "CV_32SC2",
  "CV_32SC3",
  "CV_32SC4",
  "CV_32FC1",
  "CV_32FC2",
  "CV_32FC3",
  "CV_32FC4",
  "CV_64FC1",
  "CV_64FC2",
  "CV_64FC3",
  "CV_64FC4",
  "CV_8U",
  "CV_8S",
  "CV_16U",
  "CV_16S",
  "CV_32S",
  "CV_32F",
  "CV_64F",
  "INT_MIN",
  "INT_MAX",
  "ACCESS_FAST",
  "ACCESS_MASK",
  "ACCESS_READ",
  "ACCESS_RW",
  "ACCESS_WRITE",
  "ADAPTIVE_THRESH_GAUSSIAN_C",
  "ADAPTIVE_THRESH_MEAN_C",
  "AKAZE_DESCRIPTOR_KAZE",
  "AKAZE_DESCRIPTOR_KAZE_UPRIGHT",
  "AKAZE_DESCRIPTOR_MLDB",
  "AKAZE_DESCRIPTOR_MLDB_UPRIGHT",
  "AgastFeatureDetector_AGAST_5_8",
  "AgastFeatureDetector_AGAST_7_12d",
  "AgastFeatureDetector_AGAST_7_12s",
  "AgastFeatureDetector_NONMAX_SUPPRESSION",
  "AgastFeatureDetector_OAST_9_16",
  "AgastFeatureDetector_THRESHOLD",
  "BORDER_CONSTANT",
  "BORDER_DEFAULT",
  "BORDER_ISOLATED",
  "BORDER_REFLECT",
  "BORDER_REFLECT101",
  "BORDER_REFLECT_101",
  "BORDER_REPLICATE",
  "BORDER_TRANSPARENT",
  "BORDER_WRAP",
  "CALIB_CB_ACCURACY",
  "CALIB_CB_ADAPTIVE_THRESH",
  "CALIB_CB_ASYMMETRIC_GRID",
  "CALIB_CB_CLUSTERING",
  "CALIB_CB_EXHAUSTIVE",
  "CALIB_CB_FAST_CHECK",
  "CALIB_CB_FILTER_QUADS",
  "CALIB_CB_LARGER",
  "CALIB_CB_MARKER",
  "CALIB_CB_NORMALIZE_IMAGE",
  "CALIB_CB_SYMMETRIC_GRID",
  "CALIB_FIX_ASPECT_RATIO",
  "CALIB_FIX_FOCAL_LENGTH",
  "CALIB_FIX_INTRINSIC",
  "CALIB_FIX_K1",
  "CALIB_FIX_K2",
  "CALIB_FIX_K3",
  "CALIB_FIX_K4",
  "CALIB_FIX_K5",
  "CALIB_FIX_K6",
  "CALIB_FIX_PRINCIPAL_POINT",
  "CALIB_FIX_S1_S2_S3_S4",
  "CALIB_FIX_TANGENT_DIST",
  "CALIB_FIX_TAUX_TAUY",
  "CALIB_HAND_EYE_ANDREFF",
  "CALIB_HAND_EYE_DANIILIDIS",
  "CALIB_HAND_EYE_HORAUD",
  "CALIB_HAND_EYE_PARK",
  "CALIB_HAND_EYE_TSAI",
  "CALIB_NINTRINSIC",
  "CALIB_RATIONAL_MODEL",
  "CALIB_ROBOT_WORLD_HAND_EYE_LI",
  "CALIB_ROBOT_WORLD_HAND_EYE_SHAH",
  "CALIB_SAME_FOCAL_LENGTH",
  "CALIB_THIN_PRISM_MODEL",
  "CALIB_TILTED_MODEL",
  "CALIB_USE_EXTRINSIC_GUESS",
  "CALIB_USE_INTRINSIC_GUESS",
  "CALIB_USE_LU",
  "CALIB_USE_QR",
  "CALIB_ZERO_DISPARITY",
  "CALIB_ZERO_TANGENT_DIST",
  "CASCADE_DO_CANNY_PRUNING",
  "CASCADE_DO_ROUGH_SEARCH",
  "CASCADE_FIND_BIGGEST_OBJECT",
  "CASCADE_SCALE_IMAGE",
  "CCL_BBDT",
  "CCL_BOLELLI",
  "CCL_DEFAULT",
  "CCL_GRANA",
  "CCL_SAUF",
  "CCL_SPAGHETTI",
  "CCL_WU",
  "CC_STAT_AREA",
  "CC_STAT_HEIGHT",
  "CC_STAT_LEFT",
  "CC_STAT_MAX",
  "CC_STAT_TOP",
  "CC_STAT_WIDTH",
  "CHAIN_APPROX_NONE",
  "CHAIN_APPROX_SIMPLE",
  "CHAIN_APPROX_TC89_KCOS",
  "CHAIN_APPROX_TC89_L1",
  "CMP_EQ",
  "CMP_GE",
  "CMP_GT",
  "CMP_LE",
  "CMP_LT",
  "CMP_NE",
  "COLORMAP_AUTUMN",
  "COLORMAP_BONE",
  "COLORMAP_CIVIDIS",
  "COLORMAP_COOL",
  "COLORMAP_DEEPGREEN",
  "COLORMAP_HOT",
  "COLORMAP_HSV",
  "COLORMAP_INFERNO",
  "COLORMAP_JET",
  "COLORMAP_MAGMA",
  "COLORMAP_OCEAN",
  "COLORMAP_PARULA",
  "COLORMAP_PINK",
  "COLORMAP_PLASMA",
  "COLORMAP_RAINBOW",
  "COLORMAP_SPRING",
  "COLORMAP_SUMMER",
  "COLORMAP_TURBO",
  "COLORMAP_TWILIGHT",
  "COLORMAP_TWILIGHT_SHIFTED",
  "COLORMAP_VIRIDIS",
  "COLORMAP_WINTER",
  "COLOR_BGR2BGR555",
  "COLOR_BGR2BGR565",
  "COLOR_BGR2BGRA",
  "COLOR_BGR2GRAY",
  "COLOR_BGR2HLS",
  "COLOR_BGR2HLS_FULL",
  "COLOR_BGR2HSV",
  "COLOR_BGR2HSV_FULL",
  "COLOR_BGR2Lab",
  "COLOR_BGR2Luv",
  "COLOR_BGR2RGB",
  "COLOR_BGR2RGBA",
  "COLOR_BGR2XYZ",
  "COLOR_BGR2YCrCb",
  "COLOR_BGR2YUV",
  "COLOR_BGR2YUV_I420",
  "COLOR_BGR2YUV_IYUV",
  "COLOR_BGR2YUV_YV12",
  "COLOR_BGR5552BGR",
  "COLOR_BGR5552BGRA",
  "COLOR_BGR5552GRAY",
  "COLOR_BGR5552RGB",
  "COLOR_BGR5552RGBA",
  "COLOR_BGR5652BGR",
  "COLOR_BGR5652BGRA",
  "COLOR_BGR5652GRAY",
  "COLOR_BGR5652RGB",
  "COLOR_BGR5652RGBA",
  "COLOR_BGRA2BGR",
  "COLOR_BGRA2BGR555",
  "COLOR_BGRA2BGR565",
  "COLOR_BGRA2GRAY",
  "COLOR_BGRA2RGB",
  "COLOR_BGRA2RGBA",
  "COLOR_BGRA2YUV_I420",
  "COLOR_BGRA2YUV_IYUV",
  "COLOR_BGRA2YUV_YV12",
  "COLOR_BayerBG2BGR",
  "COLOR_BayerBG2BGRA",
  "COLOR_BayerBG2BGR_EA",
  "COLOR_BayerBG2BGR_VNG",
  "COLOR_BayerBG2GRAY",
  "COLOR_BayerBG2RGB",
  "COLOR_BayerBG2RGBA",
  "COLOR_BayerBG2RGB_EA",
  "COLOR_BayerBG2RGB_VNG",
  "COLOR_BayerBGGR2BGR",
  "COLOR_BayerBGGR2BGRA",
  "COLOR_BayerBGGR2BGR_EA",
  "COLOR_BayerBGGR2BGR_VNG",
  "COLOR_BayerBGGR2GRAY",
  "COLOR_BayerBGGR2RGB",
  "COLOR_BayerBGGR2RGBA",
  "COLOR_BayerBGGR2RGB_EA",
  "COLOR_BayerBGGR2RGB_VNG",
  "COLOR_BayerGB2BGR",
  "COLOR_BayerGB2BGRA",
  "COLOR_BayerGB2BGR_EA",
  "COLOR_BayerGB2BGR_VNG",
  "COLOR_BayerGB2GRAY",
  "COLOR_BayerGB2RGB",
  "COLOR_BayerGB2RGBA",
  "COLOR_BayerGB2RGB_EA",
  "COLOR_BayerGB2RGB_VNG",
  "COLOR_BayerGBRG2BGR",
  "COLOR_BayerGBRG2BGRA",
  "COLOR_BayerGBRG2BGR_EA",
  "COLOR_BayerGBRG2BGR_VNG",
  "COLOR_BayerGBRG2GRAY",
  "COLOR_BayerGBRG2RGB",
  "COLOR_BayerGBRG2RGBA",
  "COLOR_BayerGBRG2RGB_EA",
  "COLOR_BayerGBRG2RGB_VNG",
  "COLOR_BayerGR2BGR",
  "COLOR_BayerGR2BGRA",
  "COLOR_BayerGR2BGR_EA",
  "COLOR_BayerGR2BGR_VNG",
  "COLOR_BayerGR2GRAY",
  "COLOR_BayerGR2RGB",
  "COLOR_BayerGR2RGBA",
  "COLOR_BayerGR2RGB_EA",
  "COLOR_BayerGR2RGB_VNG",
  "COLOR_BayerGRBG2BGR",
  "COLOR_BayerGRBG2BGRA",
  "COLOR_BayerGRBG2BGR_EA",
  "COLOR_BayerGRBG2BGR_VNG",
  "COLOR_BayerGRBG2GRAY",
  "COLOR_BayerGRBG2RGB",
  "COLOR_BayerGRBG2RGBA",
  "COLOR_BayerGRBG2RGB_EA",
  "COLOR_BayerGRBG2RGB_VNG",
  "COLOR_BayerRG2BGR",
  "COLOR_BayerRG2BGRA",
  "COLOR_BayerRG2BGR_EA",
  "COLOR_BayerRG2BGR_VNG",
  "COLOR_BayerRG2GRAY",
  "COLOR_BayerRG2RGB",
  "COLOR_BayerRG2RGBA",
  "COLOR_BayerRG2RGB_EA",
  "COLOR_BayerRG2RGB_VNG",
  "COLOR_BayerRGGB2BGR",
  "COLOR_BayerRGGB2BGRA",
  "COLOR_BayerRGGB2BGR_EA",
  "COLOR_BayerRGGB2BGR_VNG",
  "COLOR_BayerRGGB2GRAY",
  "COLOR_BayerRGGB2RGB",
  "COLOR_BayerRGGB2RGBA",
  "COLOR_BayerRGGB2RGB_EA",
  "COLOR_BayerRGGB2RGB_VNG",
  "COLOR_COLORCVT_MAX",
  "COLOR_GRAY2BGR",
  "COLOR_GRAY2BGR555",
  "COLOR_GRAY2BGR565",
  "COLOR_GRAY2BGRA",
  "COLOR_GRAY2RGB",
  "COLOR_GRAY2RGBA",
  "COLOR_HLS2BGR",
  "COLOR_HLS2BGR_FULL",
  "COLOR_HLS2RGB",
  "COLOR_HLS2RGB_FULL",
  "COLOR_HSV2BGR",
  "COLOR_HSV2BGR_FULL",
  "COLOR_HSV2RGB",
  "COLOR_HSV2RGB_FULL",
  "COLOR_LBGR2Lab",
  "COLOR_LBGR2Luv",
  "COLOR_LRGB2Lab",
  "COLOR_LRGB2Luv",
  "COLOR_Lab2BGR",
  "COLOR_Lab2LBGR",
  "COLOR_Lab2LRGB",
  "COLOR_Lab2RGB",
  "COLOR_Luv2BGR",
  "COLOR_Luv2LBGR",
  "COLOR_Luv2LRGB",
  "COLOR_Luv2RGB",
  "COLOR_RGB2BGR",
  "COLOR_RGB2BGR555",
  "COLOR_RGB2BGR565",
  "COLOR_RGB2BGRA",
  "COLOR_RGB2GRAY",
  "COLOR_RGB2HLS",
  "COLOR_RGB2HLS_FULL",
  "COLOR_RGB2HSV",
  "COLOR_RGB2HSV_FULL",
  "COLOR_RGB2Lab",
  "COLOR_RGB2Luv",
  "COLOR_RGB2RGBA",
  "COLOR_RGB2XYZ",
  "COLOR_RGB2YCrCb",
  "COLOR_RGB2YUV",
  "COLOR_RGB2YUV_I420",
  "COLOR_RGB2YUV_IYUV",
  "COLOR_RGB2YUV_YV12",
  "COLOR_RGBA2BGR",
  "COLOR_RGBA2BGR555",
  "COLOR_RGBA2BGR565",
  "COLOR_RGBA2BGRA",
  "COLOR_RGBA2GRAY",
  "COLOR_RGBA2RGB",
  "COLOR_RGBA2YUV_I420",
  "COLOR_RGBA2YUV_IYUV",
  "COLOR_RGBA2YUV_YV12",
  "COLOR_RGBA2mRGBA",
  "COLOR_XYZ2BGR",
  "COLOR_XYZ2RGB",
  "COLOR_YCrCb2BGR",
  "COLOR_YCrCb2RGB",
  "COLOR_YUV2BGR",
  "COLOR_YUV2BGRA_I420",
  "COLOR_YUV2BGRA_IYUV",
  "COLOR_YUV2BGRA_NV12",
  "COLOR_YUV2BGRA_NV21",
  "COLOR_YUV2BGRA_UYNV",
  "COLOR_YUV2BGRA_UYVY",
  "COLOR_YUV2BGRA_Y422",
  "COLOR_YUV2BGRA_YUNV",
  "COLOR_YUV2BGRA_YUY2",
  "COLOR_YUV2BGRA_YUYV",
  "COLOR_YUV2BGRA_YV12",
  "COLOR_YUV2BGRA_YVYU",
  "COLOR_YUV2BGR_I420",
  "COLOR_YUV2BGR_IYUV",
  "COLOR_YUV2BGR_NV12",
  "COLOR_YUV2BGR_NV21",
  "COLOR_YUV2BGR_UYNV",
  "COLOR_YUV2BGR_UYVY",
  "COLOR_YUV2BGR_Y422",
  "COLOR_YUV2BGR_YUNV",
  "COLOR_YUV2BGR_YUY2",
  "COLOR_YUV2BGR_YUYV",
  "COLOR_YUV2BGR_YV12",
  "COLOR_YUV2BGR_YVYU",
  "COLOR_YUV2GRAY_420",
  "COLOR_YUV2GRAY_I420",
  "COLOR_YUV2GRAY_IYUV",
  "COLOR_YUV2GRAY_NV12",
  "COLOR_YUV2GRAY_NV21",
  "COLOR_YUV2GRAY_UYNV",
  "COLOR_YUV2GRAY_UYVY",
  "COLOR_YUV2GRAY_Y422",
  "COLOR_YUV2GRAY_YUNV",
  "COLOR_YUV2GRAY_YUY2",
  "COLOR_YUV2GRAY_YUYV",
  "COLOR_YUV2GRAY_YV12",
  "COLOR_YUV2GRAY_YVYU",
  "COLOR_YUV2RGB",
  "COLOR_YUV2RGBA_I420",
  "COLOR_YUV2RGBA_IYUV",
  "COLOR_YUV2RGBA_NV12",
  "COLOR_YUV2RGBA_NV21",
  "COLOR_YUV2RGBA_UYNV",
  "COLOR_YUV2RGBA_UYVY",
  "COLOR_YUV2RGBA_Y422",
  "COLOR_YUV2RGBA_YUNV",
  "COLOR_YUV2RGBA_YUY2",
  "COLOR_YUV2RGBA_YUYV",
  "COLOR_YUV2RGBA_YV12",
  "COLOR_YUV2RGBA_YVYU",
  "COLOR_YUV2RGB_I420",
  "COLOR_YUV2RGB_IYUV",
  "COLOR_YUV2RGB_NV12",
  "COLOR_YUV2RGB_NV21",
  "COLOR_YUV2RGB_UYNV",
  "COLOR_YUV2RGB_UYVY",
  "COLOR_YUV2RGB_Y422",
  "COLOR_YUV2RGB_YUNV",
  "COLOR_YUV2RGB_YUY2",
  "COLOR_YUV2RGB_YUYV",
  "COLOR_YUV2RGB_YV12",
  "COLOR_YUV2RGB_YVYU",
  "COLOR_YUV420p2BGR",
  "COLOR_YUV420p2BGRA",
  "COLOR_YUV420p2GRAY",
  "COLOR_YUV420p2RGB",
  "COLOR_YUV420p2RGBA",
  "COLOR_YUV420sp2BGR",
  "COLOR_YUV420sp2BGRA",
  "COLOR_YUV420sp2GRAY",
  "COLOR_YUV420sp2RGB",
  "COLOR_YUV420sp2RGBA",
  "COLOR_mRGBA2RGBA",
  "CONTOURS_MATCH_I1",
  "CONTOURS_MATCH_I2",
  "CONTOURS_MATCH_I3",
  "COVAR_COLS",
  "COVAR_NORMAL",
  "COVAR_ROWS",
  "COVAR_SCALE",
  "COVAR_SCRAMBLED",
  "COVAR_USE_AVG",
  "COV_POLISHER",
  "CirclesGridFinderParameters_ASYMMETRIC_GRID",
  "CirclesGridFinderParameters_SYMMETRIC_GRID",
  "DCT_INVERSE",
  "DCT_ROWS",
  "DECOMP_CHOLESKY",
  "DECOMP_EIG",
  "DECOMP_LU",
  "DECOMP_NORMAL",
  "DECOMP_QR",
  "DECOMP_SVD",
  "DFT_COMPLEX_INPUT",
  "DFT_COMPLEX_OUTPUT",
  "DFT_INVERSE",
  "DFT_REAL_OUTPUT",
  "DFT_ROWS",
  "DFT_SCALE",
  "DISOpticalFlow_PRESET_FAST",
  "DISOpticalFlow_PRESET_MEDIUM",
  "DISOpticalFlow_PRESET_ULTRAFAST",
  "DIST_C",
  "DIST_FAIR",
  "DIST_HUBER",
  "DIST_L1",
  "DIST_L12",
  "DIST_L2",
  "DIST_LABEL_CCOMP",
  "DIST_LABEL_PIXEL",
  "DIST_MASK_3",
  "DIST_MASK_5",
  "DIST_MASK_PRECISE",
  "DIST_USER",
  "DIST_WELSCH",
  "DescriptorMatcher_BRUTEFORCE",
  "DescriptorMatcher_BRUTEFORCE_HAMMING",
  "DescriptorMatcher_BRUTEFORCE_HAMMINGLUT",
  "DescriptorMatcher_BRUTEFORCE_L1",
  "DescriptorMatcher_BRUTEFORCE_SL2",
  "DescriptorMatcher_FLANNBASED",
  "DrawMatchesFlags_DEFAULT",
  "DrawMatchesFlags_DRAW_OVER_OUTIMG",
  "DrawMatchesFlags_DRAW_RICH_KEYPOINTS",
  "DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS",
  "FILLED",
  "FILTER_SCHARR",
  "FLOODFILL_FIXED_RANGE",
  "FLOODFILL_MASK_ONLY",
  "FM_7POINT",
  "FM_8POINT",
  "FM_LMEDS",
  "FM_RANSAC",
  "FONT_HERSHEY_COMPLEX",
  "FONT_HERSHEY_COMPLEX_SMALL",
  "FONT_HERSHEY_DUPLEX",
  "FONT_HERSHEY_PLAIN",
  "FONT_HERSHEY_SCRIPT_COMPLEX",
  "FONT_HERSHEY_SCRIPT_SIMPLEX",
  "FONT_HERSHEY_SIMPLEX",
  "FONT_HERSHEY_TRIPLEX",
  "FONT_ITALIC",
  "FaceRecognizerSF_FR_COSINE",
  "FaceRecognizerSF_FR_NORM_L2",
  "FastFeatureDetector_FAST_N",
  "FastFeatureDetector_NONMAX_SUPPRESSION",
  "FastFeatureDetector_THRESHOLD",
  "FastFeatureDetector_TYPE_5_8",
  "FastFeatureDetector_TYPE_7_12",
  "FastFeatureDetector_TYPE_9_16",
  "FileNode_EMPTY",
  "FileNode_FLOAT",
  "FileNode_FLOW",
  "FileNode_INT",
  "FileNode_MAP",
  "FileNode_NAMED",
  "FileNode_NONE",
  "FileNode_REAL",
  "FileNode_SEQ",
  "FileNode_STR",
  "FileNode_STRING",
  "FileNode_TYPE_MASK",
  "FileNode_UNIFORM",
  "FileStorage_APPEND",
  "FileStorage_BASE64",
  "FileStorage_FORMAT_AUTO",
  "FileStorage_FORMAT_JSON",
  "FileStorage_FORMAT_MASK",
  "FileStorage_FORMAT_XML",
  "FileStorage_FORMAT_YAML",
  "FileStorage_INSIDE_MAP",
  "FileStorage_MEMORY",
  "FileStorage_NAME_EXPECTED",
  "FileStorage_READ",
  "FileStorage_UNDEFINED",
  "FileStorage_VALUE_EXPECTED",
  "FileStorage_WRITE",
  "FileStorage_WRITE_BASE64",
  "Formatter_FMT_C",
  "Formatter_FMT_CSV",
  "Formatter_FMT_DEFAULT",
  "Formatter_FMT_MATLAB",
  "Formatter_FMT_NUMPY",
  "Formatter_FMT_PYTHON",
  "GC_BGD",
  "GC_EVAL",
  "GC_EVAL_FREEZE_MODEL",
  "GC_FGD",
  "GC_INIT_WITH_MASK",
  "GC_INIT_WITH_RECT",
  "GC_PR_BGD",
  "GC_PR_FGD",
  "GEMM_1_T",
  "GEMM_2_T",
  "GEMM_3_T",
  "HISTCMP_BHATTACHARYYA",
  "HISTCMP_CHISQR",
  "HISTCMP_CHISQR_ALT",
  "HISTCMP_CORREL",
  "HISTCMP_HELLINGER",
  "HISTCMP_INTERSECT",
  "HISTCMP_KL_DIV",
  "HOGDescriptor_DEFAULT_NLEVELS",
  "HOGDescriptor_DESCR_FORMAT_COL_BY_COL",
  "HOGDescriptor_DESCR_FORMAT_ROW_BY_ROW",
  "HOGDescriptor_L2Hys",
  "HOUGH_GRADIENT",
  "HOUGH_GRADIENT_ALT",
  "HOUGH_MULTI_SCALE",
  "HOUGH_PROBABILISTIC",
  "HOUGH_STANDARD",
  "INPAINT_NS",
  "INPAINT_TELEA",
  "INTERSECT_FULL",
  "INTERSECT_NONE",
  "INTERSECT_PARTIAL",
  "INTER_AREA",
  "INTER_BITS",
  "INTER_BITS2",
  "INTER_CUBIC",
  "INTER_LANCZOS4",
  "INTER_LINEAR",
  "INTER_LINEAR_EXACT",
  "INTER_MAX",
  "INTER_NEAREST",
  "INTER_NEAREST_EXACT",
  "INTER_TAB_SIZE",
  "INTER_TAB_SIZE2",
  "KAZE_DIFF_CHARBONNIER",
  "KAZE_DIFF_PM_G1",
  "KAZE_DIFF_PM_G2",
  "KAZE_DIFF_WEICKERT",
  "KMEANS_PP_CENTERS",
  "KMEANS_RANDOM_CENTERS",
  "KMEANS_USE_INITIAL_LABELS",
  "LDR_SIZE",
  "LINE_4",
  "LINE_8",
  "LINE_AA",
  "LMEDS",
  "LOCAL_OPTIM_GC",
  "LOCAL_OPTIM_INNER_AND_ITER_LO",
  "LOCAL_OPTIM_INNER_LO",
  "LOCAL_OPTIM_NULL",
  "LOCAL_OPTIM_SIGMA",
  "LSD_REFINE_ADV",
  "LSD_REFINE_NONE",
  "LSD_REFINE_STD",
  "LSQ_POLISHER",
  "MAGSAC",
  "MARKER_CROSS",
  "MARKER_DIAMOND",
  "MARKER_SQUARE",
  "MARKER_STAR",
  "MARKER_TILTED_CROSS",
  "MARKER_TRIANGLE_DOWN",
  "MARKER_TRIANGLE_UP",
  "MIXED_CLONE",
  "MONOCHROME_TRANSFER",
  "MORPH_BLACKHAT",
  "MORPH_CLOSE",
  "MORPH_CROSS",
  "MORPH_DILATE",
  "MORPH_ELLIPSE",
  "MORPH_ERODE",
  "MORPH_GRADIENT",
  "MORPH_HITMISS",
  "MORPH_OPEN",
  "MORPH_RECT",
  "MORPH_TOPHAT",
  "MOTION_AFFINE",
  "MOTION_EUCLIDEAN",
  "MOTION_HOMOGRAPHY",
  "MOTION_TRANSLATION",
  "Mat_AUTO_STEP",
  "Mat_CONTINUOUS_FLAG",
  "Mat_DEPTH_MASK",
  "Mat_MAGIC_MASK",
  "Mat_MAGIC_VAL",
  "Mat_SUBMATRIX_FLAG",
  "Mat_TYPE_MASK",
  "NEIGH_FLANN_KNN",
  "NEIGH_FLANN_RADIUS",
  "NEIGH_GRID",
  "NONE_POLISHER",
  "NORMAL_CLONE",
  "NORMCONV_FILTER",
  "NORM_HAMMING",
  "NORM_HAMMING2",
  "NORM_INF",
  "NORM_L1",
  "NORM_L2",
  "NORM_L2SQR",
  "NORM_MINMAX",
  "NORM_RELATIVE",
  "NORM_TYPE_MASK",
  "OPTFLOW_FARNEBACK_GAUSSIAN",
  "OPTFLOW_LK_GET_MIN_EIGENVALS",
  "OPTFLOW_USE_INITIAL_FLOW",
  "ORB_FAST_SCORE",
  "ORB_HARRIS_SCORE",
  "PCA_DATA_AS_COL",
  "PCA_DATA_AS_ROW",
  "PCA_USE_AVG",
  "PROJ_SPHERICAL_EQRECT",
  "PROJ_SPHERICAL_ORTHO",
  "Param_ALGORITHM",
  "Param_BOOLEAN",
  "Param_FLOAT",
  "Param_INT",
  "Param_MAT",
  "Param_MAT_VECTOR",
  "Param_REAL",
  "Param_SCALAR",
  "Param_STRING",
  "Param_UCHAR",
  "Param_UINT64",
  "Param_UNSIGNED_INT",
  "QRCodeEncoder_CORRECT_LEVEL_H",
  "QRCodeEncoder_CORRECT_LEVEL_L",
  "QRCodeEncoder_CORRECT_LEVEL_M",
  "QRCodeEncoder_CORRECT_LEVEL_Q",
  "QRCodeEncoder_ECI_UTF8",
  "QRCodeEncoder_MODE_ALPHANUMERIC",
  "QRCodeEncoder_MODE_AUTO",
  "QRCodeEncoder_MODE_BYTE",
  "QRCodeEncoder_MODE_ECI",
  "QRCodeEncoder_MODE_KANJI",
  "QRCodeEncoder_MODE_NUMERIC",
  "QRCodeEncoder_MODE_STRUCTURED_APPEND",
  "QUAT_ASSUME_NOT_UNIT",
  "QUAT_ASSUME_UNIT",
  "QuatEnum_EULER_ANGLES_MAX_VALUE",
  "QuatEnum_EXT_XYX",
  "QuatEnum_EXT_XYZ",
  "QuatEnum_EXT_XZX",
  "QuatEnum_EXT_XZY",
  "QuatEnum_EXT_YXY",
  "QuatEnum_EXT_YXZ",
  "QuatEnum_EXT_YZX",
  "QuatEnum_EXT_YZY",
  "QuatEnum_EXT_ZXY",
  "QuatEnum_EXT_ZXZ",
  "QuatEnum_EXT_ZYX",
  "QuatEnum_EXT_ZYZ",
  "QuatEnum_INT_XYX",
  "QuatEnum_INT_XYZ",
  "QuatEnum_INT_XZX",
  "QuatEnum_INT_XZY",
  "QuatEnum_INT_YXY",
  "QuatEnum_INT_YXZ",
  "QuatEnum_INT_YZX",
  "QuatEnum_INT_YZY",
  "QuatEnum_INT_ZXY",
  "QuatEnum_INT_ZXZ",
  "QuatEnum_INT_ZYX",
  "QuatEnum_INT_ZYZ",
  "RANSAC",
  "RECURS_FILTER",
  "REDUCE_AVG",
  "REDUCE_MAX",
  "REDUCE_MIN",
  "REDUCE_SUM",
  "REDUCE_SUM2",
  "RETR_CCOMP",
  "RETR_EXTERNAL",
  "RETR_FLOODFILL",
  "RETR_LIST",
  "RETR_TREE",
  "RHO",
  "RNG_NORMAL",
  "RNG_UNIFORM",
  "ROTATE_180",
  "ROTATE_90_CLOCKWISE",
  "ROTATE_90_COUNTERCLOCKWISE",
  "SAMPLING_NAPSAC",
  "SAMPLING_PROGRESSIVE_NAPSAC",
  "SAMPLING_PROSAC",
  "SAMPLING_UNIFORM",
  "SCORE_METHOD_LMEDS",
  "SCORE_METHOD_MAGSAC",
  "SCORE_METHOD_MSAC",
  "SCORE_METHOD_RANSAC",
  "SOLVELP_LOST",
  "SOLVELP_MULTI",
  "SOLVELP_SINGLE",
  "SOLVELP_UNBOUNDED",
  "SOLVELP_UNFEASIBLE",
  "SOLVEPNP_AP3P",
  "SOLVEPNP_DLS",
  "SOLVEPNP_EPNP",
  "SOLVEPNP_IPPE",
  "SOLVEPNP_IPPE_SQUARE",
  "SOLVEPNP_ITERATIVE",
  "SOLVEPNP_MAX_COUNT",
  "SOLVEPNP_P3P",
  "SOLVEPNP_SQPNP",
  "SOLVEPNP_UPNP",
  "SORT_ASCENDING",
  "SORT_DESCENDING",
  "SORT_EVERY_COLUMN",
  "SORT_EVERY_ROW",
  "SVD_FULL_UV",
  "SVD_MODIFY_A",
  "SVD_NO_UV",
  "SparseMat_HASH_BIT",
  "SparseMat_HASH_SCALE",
  "SparseMat_MAGIC_VAL",
  "SparseMat_MAX_DIM",
  "StereoBM_PREFILTER_NORMALIZED_RESPONSE",
  "StereoBM_PREFILTER_XSOBEL",
  "StereoMatcher_DISP_SCALE",
  "StereoMatcher_DISP_SHIFT",
  "StereoSGBM_MODE_HH",
  "StereoSGBM_MODE_HH4",
  "StereoSGBM_MODE_SGBM",
  "StereoSGBM_MODE_SGBM_3WAY",
  "Subdiv2D_NEXT_AROUND_DST",
  "Subdiv2D_NEXT_AROUND_LEFT",
  "Subdiv2D_NEXT_AROUND_ORG",
  "Subdiv2D_NEXT_AROUND_RIGHT",
  "Subdiv2D_PREV_AROUND_DST",
  "Subdiv2D_PREV_AROUND_LEFT",
  "Subdiv2D_PREV_AROUND_ORG",
  "Subdiv2D_PREV_AROUND_RIGHT",
  "Subdiv2D_PTLOC_ERROR",
  "Subdiv2D_PTLOC_INSIDE",
  "Subdiv2D_PTLOC_ON_EDGE",
  "Subdiv2D_PTLOC_OUTSIDE_RECT",
  "Subdiv2D_PTLOC_VERTEX",
  "THRESH_BINARY",
  "THRESH_BINARY_INV",
  "THRESH_MASK",
  "THRESH_OTSU",
  "THRESH_TOZERO",
  "THRESH_TOZERO_INV",
  "THRESH_TRIANGLE",
  "THRESH_TRUNC",
  "TM_CCOEFF",
  "TM_CCOEFF_NORMED",
  "TM_CCORR",
  "TM_CCORR_NORMED",
  "TM_SQDIFF",
  "TM_SQDIFF_NORMED",
  "TermCriteria_COUNT",
  "TermCriteria_EPS",
  "TermCriteria_MAX_ITER",
  "UMatData_ASYNC_CLEANUP",
  "UMatData_COPY_ON_MAP",
  "UMatData_DEVICE_COPY_OBSOLETE",
  "UMatData_DEVICE_MEM_MAPPED",
  "UMatData_HOST_COPY_OBSOLETE",
  "UMatData_TEMP_COPIED_UMAT",
  "UMatData_TEMP_UMAT",
  "UMatData_USER_ALLOCATED",
  "UMat_AUTO_STEP",
  "UMat_CONTINUOUS_FLAG",
  "UMat_DEPTH_MASK",
  "UMat_MAGIC_MASK",
  "UMat_MAGIC_VAL",
  "UMat_SUBMATRIX_FLAG",
  "UMat_TYPE_MASK",
  "USAC_ACCURATE",
  "USAC_DEFAULT",
  "USAC_FAST",
  "USAC_FM_8PTS",
  "USAC_MAGSAC",
  "USAC_PARALLEL",
  "USAC_PROSAC",
  "USAGE_ALLOCATE_DEVICE_MEMORY",
  "USAGE_ALLOCATE_HOST_MEMORY",
  "USAGE_ALLOCATE_SHARED_MEMORY",
  "USAGE_DEFAULT",
  "WARP_FILL_OUTLIERS",
  "WARP_INVERSE_MAP",
  "WARP_POLAR_LINEAR",
  "WARP_POLAR_LOG",
  "_InputArray_CUDA_GPU_MAT",
  "_InputArray_CUDA_HOST_MEM",
  "_InputArray_EXPR",
  "_InputArray_FIXED_SIZE",
  "_InputArray_FIXED_TYPE",
  "_InputArray_KIND_MASK",
  "_InputArray_KIND_SHIFT",
  "_InputArray_MAT",
  "_InputArray_MATX",
  "_InputArray_NONE",
  "_InputArray_OPENGL_BUFFER",
  "_InputArray_STD_ARRAY",
  "_InputArray_STD_ARRAY_MAT",
  "_InputArray_STD_BOOL_VECTOR",
  "_InputArray_STD_VECTOR",
  "_InputArray_STD_VECTOR_CUDA_GPU_MAT",
  "_InputArray_STD_VECTOR_MAT",
  "_InputArray_STD_VECTOR_UMAT",
  "_InputArray_STD_VECTOR_VECTOR",
  "_InputArray_UMAT",
  "_OutputArray_DEPTH_MASK_16F",
  "_OutputArray_DEPTH_MASK_16S",
  "_OutputArray_DEPTH_MASK_16U",
  "_OutputArray_DEPTH_MASK_32F",
  "_OutputArray_DEPTH_MASK_32S",
  "_OutputArray_DEPTH_MASK_64F",
  "_OutputArray_DEPTH_MASK_8S",
  "_OutputArray_DEPTH_MASK_8U",
  "_OutputArray_DEPTH_MASK_ALL",
  "_OutputArray_DEPTH_MASK_ALL_16F",
  "_OutputArray_DEPTH_MASK_ALL_BUT_8S",
  "_OutputArray_DEPTH_MASK_FLT",
  "__UMAT_USAGE_FLAGS_32BIT",
  "BadAlign",
  "BadAlphaChannel",
  "BadCOI",
  "BadCallBack",
  "BadDataPtr",
  "BadDepth",
  "BadImageSize",
  "BadModelOrChSeq",
  "BadNumChannel1U",
  "BadNumChannels",
  "BadOffset",
  "BadOrder",
  "BadOrigin",
  "BadROISize",
  "BadStep",
  "BadTileSize",
  "GpuApiCallError",
  "GpuNotSupported",
  "HeaderIsNull",
  "MaskIsTiled",
  "OpenCLApiCallError",
  "OpenCLDoubleNotSupported",
  "OpenCLInitError",
  "OpenCLNoAMDBlasFft",
  "OpenGlApiCallError",
  "OpenGlNotSupported",
  "StsAssert",
  "StsAutoTrace",
  "StsBackTrace",
  "StsBadArg",
  "StsBadFlag",
  "StsBadFunc",
  "StsBadMask",
  "StsBadMemBlock",
  "StsBadPoint",
  "StsBadSize",
  "StsDivByZero",
  "StsError",
  "StsFilterOffsetErr",
  "StsFilterStructContentErr",
  "StsInplaceNotSupported",
  "StsInternal",
  "StsKernelStructContentErr",
  "StsNoConv",
  "StsNoMem",
  "StsNotImplemented",
  "StsNullPtr",
  "StsObjectNotFound",
  "StsOk",
  "StsOutOfRange",
  "StsParseError",
  "StsUnmatchedFormats",
  "StsUnmatchedSizes",
  "StsUnsupportedFormat",
  "StsVecLengthErr",
  "CORNER_REFINE_APRILTAG",
  "CORNER_REFINE_CONTOUR",
  "CORNER_REFINE_NONE",
  "CORNER_REFINE_SUBPIX",
  "DICT_4X4_100",
  "DICT_4X4_1000",
  "DICT_4X4_250",
  "DICT_4X4_50",
  "DICT_5X5_100",
  "DICT_5X5_1000",
  "DICT_5X5_250",
  "DICT_5X5_50",
  "DICT_6X6_100",
  "DICT_6X6_1000",
  "DICT_6X6_250",
  "DICT_6X6_50",
  "DICT_7X7_100",
  "DICT_7X7_1000",
  "DICT_7X7_250",
  "DICT_7X7_50",
  "DICT_APRILTAG_16h5",
  "DICT_APRILTAG_25h9",
  "DICT_APRILTAG_36h10",
  "DICT_APRILTAG_36h11",
  "DICT_ARUCO_MIP_36h12",
  "DICT_ARUCO_ORIGINAL",
  "TEST_CUSTOM",
  "TEST_EQ",
  "TEST_GE",
  "TEST_GT",
  "TEST_LE",
  "TEST_LT",
  "TEST_NE",
  "TrackerSamplerCSC_MODE_DETECT",
  "TrackerSamplerCSC_MODE_INIT_NEG",
  "TrackerSamplerCSC_MODE_INIT_POS",
  "TrackerSamplerCSC_MODE_TRACK_NEG",
  "TrackerSamplerCSC_MODE_TRACK_POS",
  "DNN_BACKEND_CANN",
  "DNN_BACKEND_CUDA",
  "DNN_BACKEND_DEFAULT",
  "DNN_BACKEND_HALIDE",
  "DNN_BACKEND_INFERENCE_ENGINE",
  "DNN_BACKEND_OPENCV",
  "DNN_BACKEND_TIMVX",
  "DNN_BACKEND_VKCOM",
  "DNN_BACKEND_WEBNN",
  "DNN_LAYOUT_NCDHW",
  "DNN_LAYOUT_NCHW",
  "DNN_LAYOUT_ND",
  "DNN_LAYOUT_NDHWC",
  "DNN_LAYOUT_NHWC",
  "DNN_LAYOUT_PLANAR",
  "DNN_LAYOUT_UNKNOWN",
  "DNN_PMODE_CROP_CENTER",
  "DNN_PMODE_LETTERBOX",
  "DNN_PMODE_NULL",
  "DNN_TARGET_CPU",
  "DNN_TARGET_CPU_FP16",
  "DNN_TARGET_CUDA",
  "DNN_TARGET_CUDA_FP16",
  "DNN_TARGET_FPGA",
  "DNN_TARGET_HDDL",
  "DNN_TARGET_MYRIAD",
  "DNN_TARGET_NPU",
  "DNN_TARGET_OPENCL",
  "DNN_TARGET_OPENCL_FP16",
  "DNN_TARGET_VULKAN",
  "SoftNMSMethod_SOFTNMS_GAUSSIAN",
  "SoftNMSMethod_SOFTNMS_LINEAR",
  "CALIB_CHECK_COND",
  "CALIB_FIX_SKEW",
  "CALIB_RECOMPUTE_EXTRINSIC",
  "ENUM_LOG_LEVEL_FORCE_INT",
  "LOG_LEVEL_DEBUG",
  "LOG_LEVEL_ERROR",
  "LOG_LEVEL_FATAL",
  "LOG_LEVEL_INFO",
  "LOG_LEVEL_SILENT",
  "LOG_LEVEL_VERBOSE",
  "LOG_LEVEL_WARNING"
]
```

</details>
