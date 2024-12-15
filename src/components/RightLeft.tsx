import React from "react";

export default function RightLeft() {
  return (
    <div className="flex justify-between items-center border-b-2 pb-2 border-gray-400/10">
      <div className="flex flex-col ">
        <div className="flex mb-2">
          <input type="radio" name="m" id="" className="mr-2" />
          <h6>Planetria</h6> <span className="mx-2">/</span> <h6>Planetria</h6>
        </div>
        <div className="flex text-xs text-gray-500/80 font-light">
          <h6>Deploys from GitHub</h6> <span className="mx-2"> - </span>{" "}
          <h6>1m 32s ago</h6>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="px-2 py-1 text-gray-800/50  font-semibold  rounded-full border-dashed border-gray-300 border-[0.05rem] text-[.7rem] bg-gray-100/80">
          Preview
        </div>
        <div className="p-1 bg-slate-200 rounded-md size-6 flex justify-center items-center text-xs">5</div>
      </div>
    </div>
  );
}
