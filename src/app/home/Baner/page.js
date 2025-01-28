import Image from 'next/image';

const Banner = () => {
    return (
        <section className="px-4 py-10 md:py-20 bg-gray-100">
            <div className="container px-10 mx-auto flex flex-col md:flex-row items-center">

                {/* Left Side: Text and Buttons */}
                <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                        Welcome to Our <br/> <span  className="text-indigo-600" >Learning</span> Platform
                    </h1>

                    {/* Paragraph */}
                    <p className="text-lg text-gray-600 mb-6">
                        Start your learning journey today and explore a wide range of courses! This will be the best place for anyone to sell courses online, with all the necessary eCommerce features. This is Eduma - Education WordPress Theme.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                        <a
                            href="/signup"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Create Your Free Account
                        </a>
                        <a
                            href="/courses"
                            className="bg-transparent border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                        >
                            View Courses
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex">
                    <Image
                        src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/08/home-banner-top.jpg"
                        alt="Banner Image"
                        width={200}
                        height={200}
                        className="w-80 h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;