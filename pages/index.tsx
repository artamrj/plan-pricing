import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PlanPricingComponent from '../components/plan-pricing-component'

const Home: NextPage = () => {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    async function getPlans() {
      const resp = await fetch("https://mocki.io/v1/d32de9ea-e53f-416f-b896-c77d730ff523");
      setPlans(await resp.json())
    }

    getPlans();
  }, [])

  return (
    <div className='container'>
      <Head>
        <title>Plan and Pricing</title>
      </Head>

      <div className='m-8 grid grid-cols-5 gap-1'>
        {plans.map((plan: any) => (
          <Link href={`/plan_pricing/${plan.id}`}>
            <div className='mx-auto' key={plan.id}>
              <PlanPricingComponent title={plan.title} price={plan.price}></PlanPricingComponent>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default Home
