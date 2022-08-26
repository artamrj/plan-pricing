//Components
import Feature from "./feature"
import Price from "./price"
import Gift from "./gift"

//NrxtJS Components
import Link from 'next/link'

type Props = {
    id?: number,
    isSpecial?: boolean,
    specialText?: string,
    myNet?: number,
    features?: Features[],
    price?: number,
    gift?: number
}

type Features = {
    id?: number,
    isPlusFeature?: boolean,
    title?: string,
    description?: string,
    more?: boolean,
    isActive?: boolean
}


const PlanPricingComponent = ({ id, isSpecial, features, specialText, myNet, price, gift }: Props) => {

    return (

        <div>

            <section className="container bg-white shadow-xl rounded-3xl hover:shadow-orange-200 max-w-xs 
            hover:-translate-y-1 hover:scale-105 duration-300
            ">
                {
                    (isSpecial) ?
                        <div className="py-2 bg-orange-400 rounded-t-2xl text-center font-bold text-white">
                            {specialText}
                        </div>
                        :
                        null
                }

                <div className={"pb-16 pt-2 text-center font-bold text-5xl relative text-blue-900"}>
                    <span>My</span><span className="text-orange-400">Net</span>
                    <p className="absolute text-5xl right-20">{myNet}</p>
                </div>

                <div className="text-center bg-gray-300 px-5">
                    <p className="font-bold text-sm text-blue-900 py-2 px-10">Highspeed-Internet mit garantierten {myNet} Mbit/s</p>
                </div>

                <div className="grid divide-y">
                    {
                        features?.map(
                            (feature: Features) => {
                                if (!feature.isPlusFeature) {
                                    return (
                                        <Feature key={feature.id}
                                            isActive={feature.isActive}
                                            title={feature.title}
                                            description={feature.description}
                                            more={feature.more}
                                            ></Feature>
                                    )
                                }
                            }
                        )
                    }
                </div>

                <Price price={price} isSpecial={isSpecial}></Price>

                <div className="grid divide-y">
                    {
                        features?.map(
                            (feature: Features) => {
                                if (feature.isPlusFeature) {
                                    return (
                                        <Feature key={feature.id}
                                            isActive={feature.isActive}
                                            isPlusFeature={feature.isPlusFeature}
                                            title={feature.title}
                                            description={feature.description}
                                            more={feature.more}
                                            ></Feature>
                                    )
                                }
                            }
                        )
                    }
                </div>

                <Gift gift={gift}></Gift>

                <Link href={`../PlanPricing/${id}`}>
                    <button className="py-3 bg-orange-400 rounded-b-2xl w-full
                active:bg-orange-500 focus:outline-none focus:ring-orange-300
                ">
                        <p className="text-center text-white font-bold select-none">JETZ BESTELEN</p>
                    </button>
                </Link>
            </section>

            <div className="flex flex-row mt-5 justify-center gap-2 text-orange-300 items-center">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-bold text-sm">Produktinformationsblatt</p>

            </div>

        </div>

    )
}

export default PlanPricingComponent;