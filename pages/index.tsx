import type { NextPage } from 'next'
import Head from 'next/head'

//Main Component
import PlanPricingComponent from '../components/plan-pricing-component'

interface Props {
  plan_pricings?: PlanPricing
}

type PlanPricing = {
  id?: number,
  attributes: {
    isSpecial?: boolean,
    specialText?: string,
    myNet?: number,
    features?: any,
    price?: number,
    gift?: number
  }
}

const Home: NextPage<Props> = ({ plan_pricings }) => {

  return (
    <div>
      <Head>
        <title>Plan and Pricing</title>
      </Head>

      <div className='mt-10 flex justify-center items-end gap-5'>
        {plan_pricings?.map((plan_pricing: PlanPricing) => (
          <div key={plan_pricing.id}>
            <PlanPricingComponent
              id={plan_pricing.id}
              isSpecial={plan_pricing.attributes.isSpecial}
              specialText={plan_pricing.attributes.specialText}
              myNet={plan_pricing.attributes.myNet}
              price={plan_pricing.attributes.price}
              gift={plan_pricing.attributes.gift}
              features={plan_pricing.attributes.features}
            ></PlanPricingComponent>
          </div>
        ))}
      </div>

    </div>
  )
}

export async function getServerSideProps() {
  const API_URL_STRAPI: string = "http://localhost:1337/api/plan-pricings?populate=*"

  const res = await fetch(API_URL_STRAPI, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()
  const plan_pricings = data.data;

  return { props: { plan_pricings } }
}

export default Home;
