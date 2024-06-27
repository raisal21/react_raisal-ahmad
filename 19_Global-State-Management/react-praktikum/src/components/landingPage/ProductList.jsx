import Thumbnail from "../../assets/images/News-Hero-Mockup.png";

export default function ProductList() {
    return (
        <section>
            <div className="flex flex-col mx-[80px] ">
                <h2 className="text-[#0a8494] font-semibold text-4xl my-4">
                    PRODUCT LIST
                </h2>

                <div className="grid lg:grid-cols-3 gap-[120px]">
                    <article className="flex flex-col shadow-md rounded-md">
                        <img src={Thumbnail} alt="Thumbnail" className="w-full" />
                        <div className="lg:p-5 space-y-5 text-black">
                            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="flex justify-between align-bottom">
                                <button className="btn btn-sm btn-outline rounded-r-sm font-thin text-[#6C757D]"> Detail View</button>
                                <time className="text-sm text-[#6C757D]">9 mins</time>

                            </div>
                        </div>
                    </article>

                    <article className="flex flex-col shadow-md rounded-md">
                        <img src={Thumbnail} alt="Thumbnail" className="w-full" />
                        <div className="lg:p-5 space-y-5 text-black">
                            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="flex justify-between align-bottom">
                                <button className="btn btn-sm btn-outline rounded-r-sm font-thin text-[#6C757D]"> Detail View</button>
                                <time className="text-sm text-[#6C757D]">9 mins</time>

                            </div>
                        </div>
                    </article>

                    <article className="flex flex-col shadow-md rounded-md">
                        <img src={Thumbnail} alt="Thumbnail" className="w-full" />
                        <div className="lg:p-5 space-y-5 text-black">
                            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="flex justify-between align-bottom">
                                <button className="btn btn-sm btn-outline rounded-r-sm font-thin text-[#6C757D]"> Detail View</button>
                                <time className="text-sm text-[#6C757D]">9 mins</time>

                            </div>
                        </div>
                    </article>
                </div>
                <div className="px-6 flex justify-end">
                    <button className='btn rounded-md lg:px-7 text-white bg-[#00ACC1] border-none lg:py-1 my-12 w-[15%]'>Load More...</button>
                </div>
            </div>
        </section>
    )
}