import Image from 'next/image';

export default function ImageLayout() {
    return (


        <section className="pt-10 overflow-hidden   md:pt-0 sm:pt-16 2xl:pt-16 mt-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div className="relative">
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 "
                            src="https://res.cloudinary.com/da48bjec6/image/upload/v1751706003/001_hvmfir.webp"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 mt-4 mb-5"
                            src="https://res.cloudinary.com/da48bjec6/image/upload/v1751706001/2_g9m8rr.webp"
                            alt="Right image"
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 mt-4"
                            src="https://res.cloudinary.com/da48bjec6/image/upload/v1751706001/3_yhqc00.webp"
                            alt="Right image"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
