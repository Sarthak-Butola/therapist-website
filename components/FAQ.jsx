'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer:
      'I do not accept insurance directly, but I can provide a superbill for reimbursement submission.',
  },
  {
    question: 'Are online sessions available?',
    answer:
      'Yes, I offer secure Zoom sessions for clients in Michigan and PSYPACT-participating states.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'A 24-hour notice is required for cancellations to avoid a late fee.',
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-[#f9f6f2] py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#37517e] font-serif">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-b border-gray-300 pb-4 transition-all duration-500">
                  <Disclosure.Button className="flex justify-between w-full text-left items-center font-serif text-[1.35rem] font-medium text-[#37517e] transition-all">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180' : ''
                      } h-5 w-5 text-[#37517e] transition-transform duration-300`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel
                    className={`overflow-hidden transition-all duration-500 text-gray-700 font-serif text-[1.1rem] leading-7 ${
                      open ? 'max-h-96 mt-3' : 'max-h-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
