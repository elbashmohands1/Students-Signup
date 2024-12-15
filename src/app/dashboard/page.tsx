import RightLeft from "@/components/RightLeft";
import icon1 from "@/img/mark.svg";
import Image from "next/image";
export default function Example() {
  return (
    <div className="w-dvw h-dvh  flex overflow-hidden  ">
      {/* left side */}
      <div className="w-1/5 h-full bg-violet-50 px-2  border-r-2 border-gray-600/20">
        <div className="h-1/6  flex  justify-between px-2 items-center">
          <div className="relative w-8 h-8">
            <Image src={icon1} alt="icon" fill />
          </div>
          <div>---</div>
        </div>
        <div className=" flex flex-col p-4">
          <h3 className="pb-4 font-medium text-gray-400 text-[0.7rem]">
            Navigation
          </h3>
          <div className="relative pl-8 py-2">
            <h6 className="font-medium text-sm  ">Projects</h6>
            <div className="absolute top-1/3  left-0  w-4 h-4">
              <Image src={icon1} alt="icon" fill />
            </div>
          </div>
        </div>
      </div>
      {/*right side  */}
      <div className="w-4/5 h-full ">
        {/* top right nav */}
        <div className=" h-1/6 flex py-8  border-b-2 border-gray-600/20">
          <div className="flex justify-between items-center px-8 w-full">
            <div className="flex  px-2 bg-slate-50 rounded-md border-2 border-gray-300 items-center ">
              <div className="relative w-4 h-4 mr-2">
                <Image src={icon1} alt="icon" fill />
              </div>
              <input
                type="text"
                placeholder="Search Projects..."
                className="text-sm pr-28 bg-transparent"
              ></input>
              <div className="py-1 px-2 m-2 rounded-md bg-slate-400/20 mr-1 text-xs">
                /
              </div>
            </div>
            <div className=" ">
              <ul className="flex font-light text-sm space-x-8 items-center">
                <li>Documentation</li>
                <li>Documentation</li>
                <li>Documentation</li>
                <li className="px-8 py-2 bg-violet-500 text-white rounded-lg">
                  + New Project
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" h-5/6 flex ">
          {/* right- leftside */}

          <div className=" w-2/3  border-r-2 border-gray-600/20 ">
            <div className="flex justify-between py-2 px-8  sticky">
              <h6 className="font-bold">Deploymeht</h6>
              <h6>Sort by</h6>
            </div>
            <div className="space-y-8 p-8 mx-4 overflow-auto h-full ">
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
              <RightLeft />
            </div>


</div>
</div>
</div>
</div>

  );
}
