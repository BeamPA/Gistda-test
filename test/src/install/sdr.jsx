import { useState /* useEffect */ } from "react";

const data = [
  {
    name: "CSPP SDR V4.1 Installation and Run Instructions",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_Installation_Guide_v4.1.pdf",
    size: "462 KB",
  },
  {
    name: "CSPP SDR V4.1 Software for Linux",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1.tar.gz",
    size: "1.79 GB",
  },
  {
    name: "CSPP SDR V4.1 J02 Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j02.tar.gz",
    size: "776 MB",
  },
  {
    name: "CSPP SDR V4.1 J01 Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j01.tar.gz",
    size: "5.3 MB",
  },
  {
    name: "CSPP SDR V4.1 SNPP Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_npp.tar.gz",
    size: "3.6 GB",
  },
  {
    name: "CSPP SDR V4.1 J02 DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j02.tar.gz",
    size: "2.4 GB",
  },
  {
    name: "CSPP SDR V4.1 J01 DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j01.tar.gz",
    size: "2.9 GB",
  },
  {
    name: "CSPP SDR V4.1 SNPP DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_npp.tar.gz",
    size: "5.3 MB",
  },
  {
    name: "CSPP SDR V4.1 Static Tiles",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_tiles.tar.gz",
    size: "5.3 MB",
  },
  {
    name: "CSPP SDR V4.1 Verification Test Files",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_TEST_DATA.tar.gz",
    size: "5.3 MB",
  },
];

function SDR() {
  const files = data;
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleInstall = () => {
    setLoading(true);
    let progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10; // Increase by 10% each interval
        } else {
          clearInterval(progressInterval); // Stop the progress bar when 100%
          return 100;
        }
      });
    }, 300); // Update progress every 300ms
    
    setTimeout(() => {
      setLoading(false);
      setProgress(0); // Reset progress bar after installation
    }, 3000); // Simulate a 3-second installation
  };

   return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          CSPP Sensor Data Record (SDR) Software
        </h1>
      </div>
      <div className="mt-6 bg-[#ffffff] shadow-lg rounded-lg p-4">
        <div
          style={{
            maxHeight: "800px",
            overflowY: "auto",
          }}
        >
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-[#0E3B61] text-white rounded-t-lg">
              <tr>
                <th className="px-4 py-2 text-left">
                  VIIRS, ATMS, CrIS and OMPS SDR Version 4.1 Software 4 December
                  2024
                </th>
                <th className="px-4 py-2 text-left">File name</th>
                <th className="px-4 py-2 text-left">File size</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{file.name}</td>
                  <td className="px-4 py-2">
                    <a
                      href={file.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {file.filename.split("/").pop()}
                    </a>
                  </td>
                  <td className="px-4 py-2">{file.size}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="px-4 py-4">
                  <div className="flex justify-end items-center gap-2">
                    {loading && (
                      <progress
                        className="w-32 h-2 bg-gray-200 rounded-full mr-4"
                        value={progress}
                        max="100"
                      ></progress>
                    )}
                    <button
                      className={`bg-blue-500 text-white px-6 py-2 rounded flex items-center gap-2 ${
                        loading ? "cursor-not-allowed opacity-70" : ""
                      }`}
                      onClick={handleInstall}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Installing...
                        </>
                      ) : (
                        "Install"
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SDR;
