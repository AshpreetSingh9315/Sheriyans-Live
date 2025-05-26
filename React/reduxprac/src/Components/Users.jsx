import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../store/reducers/UserReducer";

const Users = () => {
   const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDelete = (index)=>{
    dispatch(userDelete(index));
  }
  return (
    <>
      {users.length > 0 && users
        ? users.map((data, idx) => {
            return (
              <div  key={idx} className="flex gap-4 h-full w-full bg-gray-900 justify-center items-center py-2  text-white">
                <p>
                  {data.name}
                </p>
                <button onClick={()=>handleDelete(idx)} className="py-2 px-4 bg-red-600 rounded-lg text-white">
                  DELETE
                </button>
              </div>
            );
          })
        : "LOADING>>>"}
    </>
  );
}

export default Users