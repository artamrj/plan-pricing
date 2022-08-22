import { render } from "react-dom"

type Props = {
    title?: string,
    price?: number
}

const PlanPricingComponent = ({ title, price }: Props) => (

    <div className="container shadow-lg rounded-md">
        <div className="bg-orange-200">
            <div className="text-center font-bold uppercase">{title}</div>
            <div className="m-8 bg-orange-500">
                <div className="p-5 font-bold">{price}</div>
            </div>
        </div>
    </div>

)

export default PlanPricingComponent;