import React, { useState, useEffect } from 'react'
import { getHistory, deleteHistory } from '../../services/allApis'
import { toast } from 'react-toastify'
function History() {

  const [history, setHistory] = useState([])

  useEffect(() => {
    handleHistory()
  }, [])

  const handleHistory = async () => {
    const result = await getHistory()
    if (result.status == 200) {
      console.log(result.data);

      setHistory(result.data)
    } else {
      console.log(result);
    }
  }

  const historyDelete = async (id) => {
    const res = await deleteHistory(id)
    if (res.status == 200) {
      handleHistory()
      toast.success("Category Deleted !!!")

    }

  }

  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        {
          history.length > 0 ?
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
                {history.map(item => (
                  <tr>
                    <td>{item.videoId}</td>
                    <td>{item.title}</td>
                    <td>{item.videoUrl}</td>
                    <td>{item.datetime}</td>
                    <td>
                      <button className='btn' onClick={() => { historyDelete(item.id) }}>
                        <i className="fa-solid fa-trash-can" style={{ color: "#ff0000", }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <h2 className='text-center text-warning'>No History Found !!!</h2>
        }

      </div>
    </>
  )
}

export default History