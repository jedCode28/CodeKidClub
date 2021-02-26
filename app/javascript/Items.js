import React from 'react' 

export default (props) => {
  const { items, department}
  return (
    <>
        <h1>Items in {department.name} dept</h1>
        {items.map((item) => (
          <div key={item.id} className="itemtt">
            <h3>{item.name}</h3>
            <p>{item.body}</p>
          </div>
    </>
  );
}