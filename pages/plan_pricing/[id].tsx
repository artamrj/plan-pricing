import { NextPage } from "next";
import Router, { useRouter } from "next/router";

const Details :  NextPage = () =>  {
    const { query: { id } } = useRouter();

    // to set date from SRS! we should use fetch data!!
    // to use every page a data use strapi with ID!

    return (
        <div>
        Hello - {id}
        </div>
    )

}

export default Details;