import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How Much Can I Borrow?",
    answer: "The amount a lender or lending partner is willing to give you depends on how the lender or lending partner evaluates a number of factors, including your state of residence and applicable legal restrictions (loans are not available in all states). Many lenders or lending partners in our network will loan between $100 and $5,000."
  },
  {
    id: 2,
    question: "How Is My Private Information Protected?",
    answer: "We use industry-recognized security and advanced encryption technology to protect your personal information. Your information is transmitted and stored securely in an encrypted format. Please review our privacy policy for additional details."
  },
  {
    id: 3,
    question: "How Long Does the Process Take?",
    answer: "It should only take a few minutes to complete our secure online form. After we receive your information, we immediately start looking for a lender or lending partner that is willing to work with you. You should have a response from one of our lenders or lending partners within minutes. Final approval and funding is often done in as little as 24 to 48 hours."
  },
  {
    id: 4,
    question: "What Are the Requirements?",
    answer: "To qualify for a loan, you typically need to be at least 18 years old, have a regular source of income, possess a valid checking account, and provide a working phone number and email address. Additional requirements may vary by lender."
  },
  {
    id: 5,
    question: "Are There Any Hidden Fees?",
    answer: "We don't charge any fees for our matching service. However, lenders may have their own fees and terms. All fees and terms will be clearly disclosed before you accept any loan offer. We encourage you to read all terms carefully."
  },
  {
    id: 6,
    question: "What If I Have Bad Credit?",
    answer: "We work with lenders who consider applicants with various credit profiles, including those with less-than-perfect credit. While having good credit may improve your chances and terms, it's not necessarily a requirement for all lenders in our network."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="FAQ" className="py-20 lg:py-28 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" id='FAQ'>
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-emerald-100 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(item.id) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <div className="ml-12">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}