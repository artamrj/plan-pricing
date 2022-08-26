import { type } from "os";
import Price from "./price";

type Props = {
    myNet?: number,
    price?: number,
    detail?: string
}

const HeaderProduct = ({myNet, price, detail} : Props) => (
    <div className="bg-white drop-shadow-lg">

        <div className="flex flex-row gap-5 justify-between items-center  p-5 pr-12">

            <div className={" pl-10 font-bold text-5xl text-blue-900 flex flex-col"}>
                <div>
                    <span>My</span><span className="text-orange-400">Net</span>
                </div>
                <p className="text-5xl self-end">{myNet}</p>
            </div>


            <div className="max-w-4xl items-start flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p>{detail}</p>
            </div>



            <div className="rounded-xl bg-orange-400 p-4 self-end">
                <Price price={price}></Price>
            </div>

        </div>


    </div>
)


export default HeaderProduct;