import React from 'react'

function Cards(props) {
  // console.log(props);
  
  return (
    <div>
      <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
        <div>
          <img
            class="size-48 shadow-xl rounded-md"
            alt=""
            src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
          />
        </div>
        <div class="flex items-center">
          <span class="text-2xl font-medium">{props.username || "abdullah"}</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards