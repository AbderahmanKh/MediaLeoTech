import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Review {
    id: number;
    name: string;
    role: string;
    comment: string;
    image: string;
}

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
            <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-600 text-sm">{review.role}</p>
            </div>
        </div>
        <div className="text-gray-600">
            <FaQuoteLeft className="text-gray-400 mb-2" />
            <p>{review.comment}</p>
        </div>
    </div>
);

const reviews: Review[] = [
    {
        id: 1,
        name: "client 1",
        role: "CEO, Tech Corp",
        comment: "Amazing experience working with this team. They delivered beyond our expectations.",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "client 2",
        role: "Marketing Director",
        comment: "Exceptional service and outstanding results. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 3,
        name: "client 3",
        role: "Product Manager",
        comment: "Professional, efficient, and innovative solutions for our needs.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 4,
        name: "client 4",
        role: "Software Engineer",
        comment: "Their expertise helped us scale our product efficiently.",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 5,
        name: "client 5",
        role: "Marketing test",
        comment: "wp wp service and outstanding results. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 6,
        name: "client 6",
        role: "Marketing test",
        comment: "wp wp service and outstanding results. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
];

const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalReviews = reviews.length;
    const itemsPerPage = Math.min(3, totalReviews);
    const autoSlideInterval = 5000; // 5 seconds
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

    // Start the auto-slide interval
    const startAutoSlide = () => {
        autoSlideRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + itemsPerPage) % totalReviews);
        }, autoSlideInterval);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePrevious = () => {
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        setCurrentIndex((prev) =>
            prev - itemsPerPage >= 0 ? prev - itemsPerPage : totalReviews - itemsPerPage
        );
        startAutoSlide();
    };

    const handleNext = () => {
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        setCurrentIndex((prev) =>
            prev + itemsPerPage < totalReviews ? prev + itemsPerPage : 0
        );
        startAutoSlide();
    };

    // Compute the reviews to display, wrapping around if needed
    const displayedReviews =
        currentIndex + itemsPerPage <= totalReviews
            ? reviews.slice(currentIndex, currentIndex + itemsPerPage)
            : [
                  ...reviews.slice(currentIndex),
                  ...reviews.slice(0, (currentIndex + itemsPerPage) % totalReviews)
              ];

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Trusted by industry leaders worldwide
                    </p>
                </div>
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            onMouseEnter={() => {
                                if (autoSlideRef.current) clearInterval(autoSlideRef.current);
                            }}
                            onMouseLeave={() => startAutoSlide()}
                        >
                            {displayedReviews.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={handlePrevious}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
