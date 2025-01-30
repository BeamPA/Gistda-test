import { useParams } from "react-router-dom";

function SNPPSoftware() {
  const { softwareName } = useParams();
  const decodedSoftwareName = decodeURIComponent(softwareName);

  const softwareDetails = {
    "CSPP Sensor Data Record (SDR) Software": {
      /* description: "รายละเอียดของ SDR Software", */
      tables: [
        {
          tableHeaders: ["VIIRS, ATMS, CrIS and OMPS SDR Version 4.1 Software - 4 December 2024", "Filename", "File size"],
          files: [
            { name: "Installation Guide", filename: "CSPP_SDR_Installation_Guide_v4.1.pdf", size: "—" },
            { name: "Software for Linux", filename: "CSPP_SDR_V4.1.tar.gz", size: "845 MB" },
            { name: "J02 Instrument Starter LUTs", filename: "CSPP_SDR_V4.1_static_luts_j02.tar.gz", size: "615 MB" },
            { name: "Static Tiles", filename: "CSPP_SDR_V4.1_static_tiles.tar.gz", size: "5.0 GB" },
          ]
        }
      ]
    },
    "CSPP Image Environmental Data Record (EDR) Retrieval Software": {
      /* description: "รายละเอียดของ EDR Software", */
      
      tables: [
        {
          tableHeaders: ["CSPP Imager Environmental Data Record (EDR) Retrieval Software", "Filename", "Size"],
          files: [
            { name: "EDR Installation", filename: "CSPP_EDR_Installation_Guide.pdf", size: "—" },
            { name: "EDR Software", filename: "CSPP_EDR_Software.tar.gz", size: "750 MB" }
          ]
        },
        {
          tableHeaders: ["EDR Additional Modules", "Filename", "Size"],
          files: [
            { name: "Cloud Mask Module", filename: "CSPP_EDR_CloudMask.tar.gz", size: "350 MB" },
            { name: "Water Vapor Module", filename: "CSPP_EDR_WaterVapor.tar.gz", size: "500 MB" }
          ]
        }
      ]
    }
  };

  const software = softwareDetails[decodedSoftwareName];

  return (
    <div className="max-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">{decodedSoftwareName}</h1>
      {software ? (
        <div className="bg-white p-6 rounded-md shadow-lg max-w-6xl w-full">
          {/* <p className="text-gray-700 mb-4">{software.description}</p> */}

          {/* แสดงหลายตาราง */}
          {software.tables.map((table, tableIndex) => (
            <div key={tableIndex} className="mb-6">
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-[#0E3B61] text-white rounded-t-lg">
                    <tr>
                      {table.tableHeaders.map((header, index) => (
                        <th key={index} className="py-2 px-4 text-left first:rounded-tl-lg last:rounded-tr-lg">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.files.map((file, index) => (
                      <tr key={index} className="border-b border-gray-200 last:rounded-b-lg">
                        <td className="py-2 px-4">{file.name}</td>
                        <td className="py-2 px-4 text-blue-500 underline cursor-pointer">
                          {file.filename}
                        </td>
                        <td className="py-2 px-4">{file.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* ปุ่ม Install */}
          <div className="flex justify-end mt-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              Install
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-xl">ไม่พบข้อมูลของซอฟต์แวร์นี้</p>
      )}
    </div>
  );
}

export default SNPPSoftware;
