import React from 'react';

const CourseCard = ({ title, image, price, students, detailsUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            {/* Course Image */}
            <img className="w-full h-40 object-cover" src={image} alt={title} />
            {/* Card Content */}
            <div className="p-4">
                {/* Course Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
                {/* Course Price */}
                <p className="text-indigo-600 font-bold mb-2">Price: ${price}</p>
                {/* Students Completed */}
                <p className="text-gray-600 text-sm mb-4">{students} students completed</p>
                {/* Details Button */}
                <a
                    href={detailsUrl}
                    className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    View Details
                </a>
            </div>
        </div>
    );
};

const PopularCourses = () => {
    // Sample course data
    const courses = [
        {
            id: 1,
            title: 'Web Development Bootcamp',
            image: 'https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg',
            price: 199,
            students: 1200,
            detailsUrl: '#',
        },
        {
            id: 2,
            title: 'Advanced React & Redux',
            image: 'https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg',
            price: 149,
            students: 800,
            detailsUrl: '#',
        },
        {
            id: 3,
            title: 'Data Science with Python',
            image: 'https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg',
            price: 249,
            students: 950,
            detailsUrl: '#',
        },
        {
            id: 4,
            title: 'UI/UX Design Mastery',
            image: 'https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course.jpg',
            price: 179,
            students: 600,
            detailsUrl: '#',
        },
    ];

    return (
        <div className="container px-10 mx-auto px-4 py-20 my-20">
            {/* Section Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 ">
                <span className="text-indigo-600">Popular </span>Courses
            </h1>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        image={course.image}
                        price={course.price}
                        students={course.students}
                        detailsUrl={course.detailsUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
