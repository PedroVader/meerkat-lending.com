import React from 'react';

export default function LegalDisclosures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Important Disclosures. Please Read Carefully.
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

          {/* Content in two columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  This website is not an offer to lend. meerkatlending.com is not a lender or lending partner and does not make loan or credit decisions. meerkatlending.com connects interested persons with a lender or lending partner from its network of approved lenders and lending partners. meerkatlending.com does not control and is not responsible for the actions or inactions of any lender or lending partner, is not an agent, representative or broker of any lender or lending partner, and does not endorse any lender or lending partner. meerkatlending.com receives compensation from its lenders and lending partners, often based on a ping-tree model similar to Google AdWords where the highest available bidder is connected to the consumer. Regardless, meerkatlending.com's service is always free to you.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In some cases, you may be given the option of obtaining a loan from a tribal lender. Tribal lenders are subject to tribal and certain federal laws while being immune from state law including usury caps. If you are connected to a tribal lender, please understand that the tribal lender's rates and fees may be higher than state-licensed lenders. Additionally, tribal lenders may require you to agree to resolve any disputes in a tribal jurisdiction. You are urged to read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  This service is not available in all states. If you request to connect with a lender or lending partner in a particular state where such loans are prohibited, or in a location where meerkatlending.com does not have an available lender or lending partner, you will not be connected to a lender or lending partner. You are urged to read and understand the terms of any loan offered by any lender or lending partner, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting your information via this website, you are authorizing meerkatlending.com and its partners to do a credit check, which may include verifying your social security number, driver license number or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but may also include alternative credit bureaus such as Teletrack, DP Bureau or others. You also authorize meerkatlending.com to share your information and credit history with a network of approved lenders and lending partners.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Our lenders offer loans with an Annual Percentage Rate (APR) of 35.99% and below. For qualified consumers, the maximum APR (including the interest rate plus other costs) is 35.99%. All loans are subject to the lender's approval based on its own unique underwriting criteria.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold">Example Loan Amount:</span> $4,300.00; Annual Percentage Rate: 35.99%.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold">Number of Monthly Payments:</span> 30; Monthly Payment Amount: $219.36.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Total Amount Payable:</span> $6,581.78 Loans include a minimum repayment plan of 61 days and a maximum repayment plan of 30 months.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Lender's or Lending Partner's Disclosure of Terms.
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The lenders and lending partners you are connected to will provide documents that contain all rates and rate information pertaining to the loan being offered, including any potential fees for late-payments and the rules under which you may be allowed (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender or lending partner based on the lender's or lending partner's internal policies, underwriting criteria and applicable law. meerkatlending.com has no knowledge of or control over the loan terms offered by a lender or lending partner. You are urged to read and understand the terms of any loan offered by any lenders and lending partners and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Late Payments Hurt Your Credit Score
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lenders and lending partners immediately and discuss how to handle late payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer warning */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Important Financial Warning
                  </h3>
                  <p className="text-red-700 leading-relaxed">
                    Short-term loans should be used for short-term financial needs only, not as a long-term financial solution. Customers with credit difficulties should seek credit counseling before entering into any loan transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}