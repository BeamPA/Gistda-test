import { useState, useEffect } from "react";
function EDR() {
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

  const data = {
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
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/FIRE/v2.1/cspp-active-fire-test_data_2.1.tar.gz",
            },
          ],
        },
        {
          title: "VIIRS ASCI EDR Version 1.2 Software 14 February 2022",
          files: [
            {
              name: "VIIRS ASCI EDR Version 1.2 Installation Instructions",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_ASCI_Installation_Guide_v1.2.pdf",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Software for Linux",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2.tar.gz",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Static Ancillary Files",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2_STATIC.tar.gz",
            },
            {
              name: "VIIRS ASCI EDR Version 1.2 Test Files",
              filename:
                "https://bin.ssec.wisc.edu/pub/CSPP/hidden/ASCI/v1.2/CSPP_VIIRS_ASCI_V1.2_TEST_DATA.tar.gz",
            },
          ],
        },
      ],
    },
  };

  const [fileSizes, setFileSizes] = useState({});

  useEffect(() => {
    data[
      "CSPP Image Environmental Data Record (EDR) Retrieval Software"
    ].tables.forEach((table) => {
      table.files.forEach((file) => {
        getFileSize(file.filename).then((size) => {
          setFileSizes((prevSizes) => ({
            ...prevSizes,
            [file.filename]: size,
          }));
        });
      });
    });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-6">
        CSPP Image Environmental Data Record (EDR) Retrieval Software
      </h1>
      {data[
        "CSPP Image Environmental Data Record (EDR) Retrieval Software"
      ].tables.map((table, tableIndex) => (
        <div key={tableIndex} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{table.title}</h2>
          <div
            style={{
              maxHeight: "400px", // กำหนดความสูงสูงสุดของแต่ละตาราง
              overflowY: "auto", // แสดงแถบเลื่อนเมื่อเนื้อหามากเกิน
            }}
          >
            <table className="min-w-full">
              <thead className="bg-[#0E3B61] text-white rounded">
                <tr>
                  <th className="px-4 py-2 text-left">File Name</th>
                  <th className="px-4 py-2 text-left">File Size</th>
                </tr>
              </thead>
              <tbody>
                {table.files.map((file, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">
                      <a
                        href={file.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {file.filename.split("/").pop()}{" "}
                        {/* แสดงชื่อไฟล์จาก URL */}
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      {fileSizes[file.filename] || "Loading..."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EDR;
