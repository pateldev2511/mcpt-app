import React from 'react';
import { Star } from 'lucide-react';

const dummyReviews = [
  {
    name: 'Rebecca Francus',
    text: 'Dr. Patel is amazing! She is highly skilled and was very thoughtful in coming up with a course of treatment that would suit my needs. Seeing her helped alleviate chronic pain that I had been experiencing for nearly six months after surgery.',
    rating: 5,
  },
  {
    name: 'Jennifer Parker',
    text: 'Dr. Patel was incredible to work with. She helped me with my foot tendonitis recovery. Every appointment she was extremely thorough, made me feel very comfortable, and helped me walk away with significantly less pain. The structure of the appointment is much different from my prior PT experiences. She gives one on one attention and listens to all of your concerns. In addition, she checks in with you to make sure that you are feeling comfortable with the work that she is doing. I will continue to go to her in the future for all of my physical therapy needs.',
    rating: 5,
  },
  {
    name: 'Celine Dorsainvil',
    text: 'Love Dr. Patel! I have been struggling with chronic pain for a while and have seen various doctors and Dr. Patel is the only person who has helped me find much needed relief. She is so kind and accommodating, with multiple locations and a wide range of scheduling offerings, it’s so easy to work physical therapy into my busy schedule. PT has become my favorite part of the week!',
    rating: 5,
  },
  {
    name: 'Sam Ackerman',
    text: 'Dr. Nidhi Patel is absolutely awesome and a great and caring physician. She was able to make me feel comfortable from the start and was able to pin point my areas of pain very quickly. She clearly laid out a plan to get better and provide transparent feedback on my progress along the way. In addition, she is very flexible on scheduling appointments which made working with her very easy. I would highly suggest Dr. Nidhi Patel to any family or friend!',
    rating: 5,
  },
  {
    name: 'Jennifer Plutzer',
    text: 'Dr. Nidhi Patel is the best Physical Therapist! My pain has improved tremendously by our office visits. She is attentive to my needs and cares about making sure I’m feeling better on a weekly basis. I highly recommend using her practice.',
    rating: 5,
  },
  {
    name: 'Nidhi Mehta',
    text: 'Dr Nidhi Patel is very skilled Physical therapist and knowledgeable. She is a good person, gives time and puts in the care plan for the improvement of problems according to the needs. The practise is a great place - nice clean and accessible. I went there for chronic neck pain and I was impressed with the results she was able to give me. For years I haven’t be out of pain. Thanks to all her help. I would go to her for any aches and pains for my family.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900 my-4" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Don't just take our word for it...
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {dummyReviews.map((review, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">{review.name}</h6>
                  <div className="flex gap-0.5 text-green-500 mt-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className={`h-5 w-5 ${starIndex < review.rating ? 'fill-current text-green-500' : 'fill-current text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-8">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;