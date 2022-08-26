type Props = {
    price?: number,
    isSpecial?: boolean
}

const Price = ({ price, isSpecial }: Props) => {

    const beforeComma: string = (price + "").split(".")[0];
    let afterComma: string = (price + "").split(".")[1];
    if (afterComma.length == 1) afterComma += "0";

    return (
        <div className="bg-orange-400">
            <div className={(isSpecial) ? "text-center py-3 text-white" : "text-center py-3"}>
                <div className="flex justify-center	gap-1">
                    <div className="font-bold text-5xl self-center">{beforeComma}</div>
                    <div className="flex flex-col items-start">
                        <div className="font-bold text-2xl -mb-1">{afterComma}</div>
                        <div className="text-sm">€/Monat</div>
                    </div>
                </div>
                <p className="text-xs">ab dem 13. Monat {price} €</p>
            </div>
        </div>
    )
}

export default Price;