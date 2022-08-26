import Link from "next/link";

const Form = () => (
    <div className="bg-white mt-16 mx-36 drop-shadow-xl p-10 rounded-2xl">
        <p>Contact</p>

        <form className="flex flex-col" action="/send-data-here" method="post">
            <div className="flex flex-row">
                
            </div>
            <div className="mt-8 flex flex-row gap-5 justify-center">
                <button className="p-2 px-5 rounded-md text-white bg-orange-400
                hover:bg-orange-500
                " type="submit">Subimt</button>
                <Link href={"../../"}>
                    <button className="p-2 px-5 rounded-md text-white bg-blue-900
                    hover:bg-blue-800
                    ">Back</button>
                </Link>
            </div>
        </form>

    </div>
)

export default Form;
