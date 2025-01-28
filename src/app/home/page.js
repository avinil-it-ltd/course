import Image from 'next/image';
import bannerImg from '../../assets/images/home-banner-top.jpg'
import Banner from './Baner/page';
import PopularCourses from './PopularCourses/page';

const page = () => {
    return (
        <div>
            <Banner></Banner>

            <PopularCourses></PopularCourses>
        </div>
    );
};

export default page;