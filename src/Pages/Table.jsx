import React from 'react'

function Table() {
    return (
        <>
  <div className="search-from-table">
          <input
            placeholder="Refrence Number / Mobile Number"
            className="input-table"
          ></input>
          <button className="button">Search</button>
        </div>
        <div className="table-div">
          <div className="table-box">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Reference Number</th>
                  <th>Voter ID</th>
                  <th>Aadhar Number</th>
                  <th>Pan Number</th>
                  <th>Status</th>
                  <th>PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kavya Rajput</td>
                  <td>7894561234</td>
                  <td>74185296</td>
                  <td>7418529636</td>
                  <td>7441 2345 6787</td>
                  <td>FFRED7894O</td>
                  <td>Yes</td>
                  <td>
                    <button className="table-btn">download</button>
                  </td>
                </tr>
                <tr>
                  <td>Kavya Rajput</td>
                  <td>7894561234</td>
                  <td>74185296</td>
                  <td>7418529636</td>
                  <td>7441 2345 6787</td>
                  <td>FFRED7894O</td>
                  <td>Yes</td>
                  <td>
                    <button className="table-btn">download</button>
                  </td>
                </tr>
                <tr>
                  <td>Kavya Rajput</td>
                  <td>7894561234</td>
                  <td>74185296</td>
                  <td>7418529636</td>
                  <td>7441 2345 6787</td>
                  <td>FFRED7894O</td>
                  <td>Yes</td>
                  <td>
                    <button className="table-btn">download</button>
                  </td>
                </tr>
                <tr>
                  <td>Kavya Rajput</td>
                  <td>7894561234</td>
                  <td>74185296</td>
                  <td>7418529636</td>
                  <td>7441 2345 6787</td>
                  <td>FFRED7894O</td>
                  <td>Yes</td>
                  <td>
                    <button className="table-btn">download</button>
                  </td>
                </tr>
                <tr>
                  <td>Kavya Rajput</td>
                  <td>7894561234</td>
                  <td>74185296</td>
                  <td>7418529636</td>
                  <td>7441 2345 6787</td>
                  <td>FFRED7894O</td>
                  <td>Yes</td>
                  <td>
                    <button className="table-btn">download</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-footer">
              <div>
                <span>Rows per page:</span>
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div><span>1-5 of 200</span></div>
              <div>
                <button>
                  <SlArrowLeft />
                </button>
                <button>
                  <SlArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>



        </>
    )
}

export default Table
