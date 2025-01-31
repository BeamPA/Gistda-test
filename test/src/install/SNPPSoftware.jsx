import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SNPPSoftware() {
  const { softwareName } = useParams();
  const decodedSoftwareName = decodeURIComponent(softwareName);

  const softwareDetails = {
    "CSPP Sensor Data Record (SDR) Software": {
      tables: [
        {
          title:
            "VIIRS, ATMS, CrIS and OMPS SDR Version 4.1 Software - 4 December 2024",
          files: [
            {
              name: "CSPP SDR V4.1 Installation and Run Instructions",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_Installation_Guide_v4.1.pdf",
            },
            {
              name: "CSPP SDR V4.1 Software for Linux",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1.tar.gz",
            },
         /*    {
              name: "CSPP SDR V4.1 J02 Instrument Starter LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j02.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 J01 Instrument Starter LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j01.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 SNPP Instrument Starter LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_npp.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 J02 DNB Stray Light LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j02.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 J01 DNB Stray Light LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j01.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 SNPP DNB Stray Light LUTs",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_npp.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 Static Tiles",
              filename: "]https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_tiles.tar.gz",
            },
            {
              name: "CSPP SDR V4.1 Verification Test Files",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_TEST_DATA.tar.gz",
            },
 */
          ],
        },
      ],
    },
    "CSPP Image Environmental Data Record (EDR) Retrieval Software": {
      tables: [
        {
          title:
            "VIIRS Active Fire Version 2.1 Software               5 October 2023",
          files: [
            {
              name: "VIIRS Active Fire Version 2.1 Installation Instructions",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/FIRE/v2.1/CSPP_Active_Fire_Installation_Guide_v2.1.pdf",
            },
            {
              name: "VIIRS Active Fire Version 2.1 Software for Linux",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/FIRE/v2.1/cspp-active-fire-noaa_2.1.tar.gz",
            },
            {
              name: "VIIRS Active Fire Version 2.1 Test Data",
              filename:"https://bin.ssec.wisc.edu/pub/CSPP/hidden/FIRE/v2.1/cspp-active-fire-test_data_2.1.tar.gz",
            },
          ],
        },
        {
          title: "VIIRS ASCI EDR Version 1.2 Software 14 February 2022",
          files: [
            {
              name: "VIIRS ASCI EDR Version 1.2 Installation Instructions",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_ASCI_Installation_Guide_v1.2.pdf",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Software for Linux",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2.tar.gz",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Static Ancillary Files",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2_STATIC.tar.gz",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Test Files",
              filename: "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2_TEST_DATA.tar.gz",
            },
          ],
        },
      ],
    },
  };

  const software = softwareDetails[decodedSoftwareName];

  // ฟังก์ชันดึงขนาดไฟล์จาก URL
  const getFileSize = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD" });
      const contentLength = response.headers.get("Content-Length");
      if (contentLength) {
        return (contentLength / (1024 * 1024)).toFixed(2) + " MB";
      } else {
        return "Unknown";
      }
    } catch (error) {
      console.error("Error fetching file size:", error);
      return "Failed";
    }
  };

  // ใช้ useState เพื่อเก็บข้อมูลขนาดไฟล์
  const [fileSizes, setFileSizes] = useState({});

  useEffect(() => {
    const fetchSizes = async () => {
      if (!software) return;
      const sizes = {};
      for (const table of software.tables) {
        for (const file of table.files) {
          if (file.filename.startsWith("http")) {
            sizes[file.filename] = await getFileSize(file.filename);
          } else {
            sizes[file.filename] = "Unknown";
          }
        }
      }
      setFileSizes(sizes);
    };

    fetchSizes();
  }, [software]);

  return (
    <div className="max-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white p-6 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{decodedSoftwareName}</h1>
          {software?.tables.length > 1 && (
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Install All
            </button>
          )}
        </div>

        {software ? (
          software.tables.map((table, tableIndex) => (
            <div key={tableIndex} className="mb-6">
              <div className="flex justify-between items-center mb-2 mt-4">
                <h2 className="text-lg font-semibold">{table.title}</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
                  Install
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-[#0E3B61] text-white">
                    <tr>
                      <th className="py-2 px-4 text-left w-1/3">Name</th>
                      <th className="py-2 px-4 text-left w-1/3">Filename</th>
                      <th className="py-2 px-4 text-left">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.files.map((file, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4">{file.name}</td>
                        <td className="py-2 px-4">
                          <a
                            href={file.filename}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            {file.filename.split("/").pop()}
                          </a>
                        </td>
                        <td className="py-2 px-4">
                          {file.size ||
                            fileSizes[file.filename] ||
                            "Loading..."}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-xl">ไม่พบข้อมูลของซอฟต์แวร์นี้</p>
        )}
      </div>
    </div>
  );
}

export default SNPPSoftware;
