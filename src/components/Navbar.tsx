import Image from "next/image";
export default function Navbar(props) {
    return(
        <div className="">
            {/* {navbar} */ }

        <nav className="bg-amber-50 shadow-sm">
            <div className="px-4">
            <div className="flex justify-between h-16 items-center" >

                <div className="flex items-center">
                <Image
                    src="/next.svg"
                    alt="next js "
                    width={45}
                    height={45}
                    className=""
                    />
                    <span className="ml-2">World</span>
                </div>

                <div className="flex space-x-4">
                <a href="" className="px-3 text-md font-bold hover:text-blue-600">{props.nameLinks}</a>
                <a href="" className="px-3 text-md font-bold">{props.nameLinks}</a>
                <a href="" className="px-3 text-md font-bold">{props.nameLinks}</a>
                </div>

            </div>
            </div>
        </nav> 

        </div>
    )
}