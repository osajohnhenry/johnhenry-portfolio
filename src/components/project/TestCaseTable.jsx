const TestCaseTable = ({ testData = [] }) => {
  if (!testData.length) {
    return (
      <div className="mt-6 text-center text-gray-500 py-8">
        No test cases available for this project.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-2">Modules / Ticket</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Test ID</th>
            <th className="border p-2">Test Scenario</th>
            <th className="border p-2">Expected Result</th>
            <th className="border p-2">Actual Result</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {testData.map((row, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border p-2">{row.module}</td>
              <td className="border p-2">{row.scenario}</td>
              <td className="border p-2">{row.testId}</td>
              <td className="border p-2">{row.functionalTest}</td>
              <td className="border p-2">{row.expectedResult}</td>
              <td className="border p-2">{row.actualResult}</td>
              <td className="border p-2">
                <span className={`px-2 py-1 rounded ${
                  row.status === 'Passed' ? 'bg-green-100 text-green-800' :
                  row.status === 'Failed' ? 'bg-red-100 text-red-800' :
                  row.status === 'Blocked' ? 'bg-yellow-100 text-yellow-800' :
                  row.status === 'For Retest' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCaseTable;