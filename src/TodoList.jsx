import React, { useState } from 'react'

const TodoList = () => {
    const [ activity, setActivity ] = useState('');
    const [ listData, setListData ] = useState([]);
    const [ editIndex, setEditIndex ] = useState(-1);
    const [ editValue, setEditValue ] = useState('');

    const addActivity =() =>{
        setListData((listData) => {
            const updatedList = ([...listData, activity])
            setActivity('')
            return updatedList
        })
    }

    const removeActivity = (i) => {
        const updatedListData = listData.filter((element, id) =>
            { 
                return i!=id 
            }
        )
        setListData(updatedListData)
        setEditIndex(-1);
        setEditValue('')
    }

    const removeAll = () => {
        setListData([])
        setListData(updatedListData)
    }

    const editActivity = (i) => {
        setEditIndex(i);
        setEditValue(listData[i])
    }

    const saveActivity = (i) => {
        const updatedList = [...listData];
        updatedList[i]= editValue
        setListData(updatedList)
        setEditIndex(-1);
        setEditValue('');

    }

  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
        <button onClick={addActivity}>ADD</button>
        <p className='list-heading'>Here is your list....</p>
        {
            listData!=[] && listData.map((data, i) => {
                return(
                    <>
                        <p key={i} className='listData'>
                        <div>{data}</div>
                        <div><button className='btn-position' onClick={()=> removeActivity(i)}>remove(-)</button>
                        {
            editIndex===i ? 
            <>
            <input type="text" placeholder='Edit Activity' value={editValue} onChange={(e) => setEditValue(e.target.value)}/>

            <button onClick={() => saveActivity(editIndex)}>Save</button>
            </>
            :
            <button onClick={() => editActivity(i)}>Edit</button>
        }
                        </div>
                        </p>
                    </>
                )
            })
        }

        {
            listData.length>=1 && <button onClick={removeAll}>Remove All</button>
        }
        
    </div>
    </>
  )
}

export default TodoList