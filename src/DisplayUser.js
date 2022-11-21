import React from 'react'

export default function DisplayUser({details}) {
  return (
    <div className='user-table'>
      <table>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

        {details.map((x,i) => {
          if(i<2)
          return (
            <tbody key={x.id}>
            <tr>
             <td>
          <img src={x.avatar} alt={x.id}></img>
      </td>
      <td>{x.id}</td>
      <td>{x.first_name+" "+x.last_name}</td>
      <td>{x.email}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}