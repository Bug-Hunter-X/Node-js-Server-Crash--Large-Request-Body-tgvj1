# Node.js Server Crash: Handling Large Request Bodies

This repository demonstrates a common issue in Node.js servers where handling large request bodies can lead to crashes due to memory exhaustion. The `bug.js` file shows a vulnerable server implementation that doesn't handle large requests gracefully.  The solution, provided in `bugSolution.js`, demonstrates using streams to mitigate this issue.  See below for setup instructions and explanation of the problem and solution.

## Setup

1. Clone the repository: `git clone <repo_url>`
2. Navigate to the repository: `cd <repo_name>`
3. Run the buggy server: `node bug.js`
4. Test with a large request (e.g., using `curl` with a large file).
5. Run the fixed server: `node bugSolution.js`
6. Test again with the same large request.