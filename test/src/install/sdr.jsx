import { useState, useEffect } from "react";

async function getFileSize(url) {
  try {
    // ส่ง HEAD request ไปยัง URL เพื่อดึงข้อมูล Content-Length
    const response = await fetch(url, {
      method: "HEAD",
    });
    const size = response.headers.get("Content-Length");
    console.log("Size for", url, size); // ดูขนาดไฟล์จาก response
    // แปลงขนาดไฟล์จาก bytes เป็น MB
    return size ? (size / 1024 / 1024).toFixed(2) + " MB" : "Unknown size";
  } catch (error) {
    console.error("Error fetching file size for", url, error); // ถ้ามีข้อผิดพลาด
    return "Error fetching size";
  }
}

const filesV4_1 = [
  {
    name: "CSPP SDR V4.1 Installation and Run Instructions",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_Installation_Guide_v4.1.pdf",
    size: "462 KB",
    type: "pdf",
  },
  {
    name: "CSPP SDR V4.1 Software for Linux",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1.tar.gz",
    size: "1.79 GB",
    type: "tar.gz",
  },
  {
    name: "CSPP SDR V4.1 J02 Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j02.tar.gz",
    size: "776 MB",
    type: "zip",
  },
  {
    name: "CSPP SDR V4.1 J01 Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_j01.tar.gz",
    size: "5.3 MB",
    type: "zip",
  },
  {
    name: "CSPP SDR V4.1 SNPP Instrument Starter LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_luts_npp.tar.gz",
    size: "3.6 GB",
    type: "zip",
  },
  {
    name: "CSPP SDR V4.1 J02 DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j02.tar.gz",
    size: "2.4 GB",
    type: "zip",
  },
  {
    name: "CSPP SDR V4.1 J01 DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_j01.tar.gz",
    size: "2.9 GB",
    type: "zip",
  },
  {
    name: "CSPP SDR V4.1 SNPP DNB Stray Light LUTs",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_straylight_luts_npp.tar.gz",
  },
  {
    name: "CSPP SDR V4.1 Static Tiles",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_static_tiles.tar.gz",
  },
  {
    name: "CSPP SDR V4.1 Verification Test Files",
    filename:
      "https://bin.ssec.wisc.edu/pub/CSPP/hidden/SDR/v4.1/CSPP_SDR_V4.1_TEST_DATA.tar.gz",
  },
  
];

function SDR() {
  const files = filesV4_1;
  const [fileSizes, setFileSizes] = useState({});

  useEffect(() => {
    files.forEach((file) => {
      getFileSize(file.filename).then((size) => {
        setFileSizes((prevSizes) => ({
          ...prevSizes,
          [file.filename]: size,
        }));
      });
    });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          CSPP Sensor Data Record (SDR) Software
        </h1>
        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Install
        </button>
      </div>
      <div className="mt-6 bg-[#ffffff] shadow-lg rounded-lg p-4">
        <div
          style={{
            maxHeight: "800px",  // กำหนดความสูงสูงสุด
            overflowY: "auto",   // แสดงแถบเลื่อนเมื่อเนื้อหามากเกินความสูงที่กำหนด
          }}
        >
          <table className="min-w-full">
            <thead className="bg-[#0E3B61] text-white rounded">
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
                  <td className="px-4 py-2">
                    {fileSizes[file.filename] || file.size}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SDR;
