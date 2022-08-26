import { NextPage } from "next";
import Form from "../../components/form";

//Components
import HeaderProduct from "../../components/header-product"

type Props = {
    details?: any
}

const Details: NextPage<Props> = ({ details }) => {

    const detail = details.attributes;

    return (
        <div className="">
            <div className="sticky top-0 left-0 right-0">
                <HeaderProduct myNet={detail.myNet} price={detail.price} detail={detail.detail}></HeaderProduct>
            </div>
            <Form></Form>
        </div>
    )

}

Details.getInitialProps = async (ctx) => {

    const { id } = ctx.query;

    const API_URL_STRAPI: string = `http://localhost:1337/api/plan-pricings/${id}`

    const res = await fetch(API_URL_STRAPI, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    return { details: data.data }
}

export default Details;