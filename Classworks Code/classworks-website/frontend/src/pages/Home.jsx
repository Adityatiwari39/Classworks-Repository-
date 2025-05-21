import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Classworks</h1>
                <SearchBar />
            </header>
            <main>
                <section>
                    <h2>Online Courses</h2>
                    <p>Explore our wide range of online courses designed for CBSE, ICSE, and competitive exams like JEE Mains, JEE Advanced, and NEET.</p>
                </section>
                <section>
                    <h2>Our Software</h2>
                    <p>Discover our school management software that simplifies administrative tasks with separate admin and teacher panels.</p>
                </section>
                <section>
                    <h2>Study Materials</h2>
                    <p>Access comprehensive study materials to enhance your learning experience and prepare effectively for your exams.</p>
                </section>
                <section>
                    <h2>Upcoming Events</h2>
                    <p>Stay updated with our upcoming events, workshops, and webinars designed to support your educational journey.</p>
                </section>
            </main>
        </div>
    );
};

export default Home;