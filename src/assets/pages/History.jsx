import React from 'react'

function History() {
  return (
    <>
    <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Video Title</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heeriye</td>
            <td>https://www.youtube.com/watch/2wbhdbchsbch/</td>
            <td>24-08-2024</td>
            <td>
              <button className='btn'>
                <i className="fa-solid fa-trash-can" style={{ color: "#ff0000", }} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default History