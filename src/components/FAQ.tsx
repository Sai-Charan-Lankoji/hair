import { useState } from 'react';
import { faqs } from '../data/faqs';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">FAQ</h2>
        <div className="max-w-7xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;