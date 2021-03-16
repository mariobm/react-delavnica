
export default function User({name, image}) {
    return (
        <div className="max-w-sm m-auto mt-6 rounded shadow-lg overflow-hidden">
    <img src="https://picsum.photos/384/192" alt="" className="w-full h-48" />
    <div className="flex items-center px-6 py-2">
       <img className="absolute -mt-8 block h-28 rounded-full overflow-hidden border-white border-4 border-solid" src={image.large} alt="" />
      <div className="text-left flex-grow ml-24 pl-8">
        <div className="mb-4">
          <p className="text-2xl font-bold leading-tight">{`${name.first} ${name.last}`}</p>
        </div>
      </div>
    </div>
    <div className="flex px-6 mb-6">
      <button className="w-1/2 mr-1 rounded-full px-2 py-1 leading-normal bg-blue-600 border border-grey text-white cursor-default pointer-events-none">Follow</button>
      <button className="w-1/2 ml-1 rounded-full px-2 py-1 leading-normal bg-white border border-grey text-grey-600 hover:bg-blue-600 hover:text-white">Message</button>
    </div>
    <div className="px-6 py-2">
      <div className="flex">
         <span className="flex items-center justify-center h-10 w-20 m-1 rounded-full overflow-hidden border-grey border border-solid text-sm text-grey">
          React
        </span>
        <span className="flex items-center justify-center h-10 w-20 m-1 rounded-full overflow-hidden border-grey border border-solid text-sm text-grey">
          PHP
        </span>
      </div>
    </div>
  </div>

    )
}