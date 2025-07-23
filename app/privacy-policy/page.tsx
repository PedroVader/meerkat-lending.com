 // app/privacy-policy/page.tsx

"use client"

import React from "react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
  {/* Botón arriba a la izquierda */}
  <div className="absolute top-6 left-6">
        <Link href="/">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300">
            ← Back to Home
          </button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-center text-emerald-600">
        Privacy Policy
      </h1>
      <p className="mb-6">
        <strong>FACTS</strong><br />
        <strong>WHAT DOES Meerkat Lending DO WITH YOUR PERSONAL INFORMATION?</strong>
      </p>

      <p className="mb-6">
        <strong>Why?</strong><br />
        Financial companies choose how they share your personal information.
        Federal law gives consumers the right to limit some but not all sharing.
        Federal law also requires us to tell you how we collect, share, and protect your personal information.
        Please read this notice carefully to understand what we do.
      </p>

      <p className="mb-6">
        <strong>What?</strong><br />
        The types of personal information we collect and share depend on the product or service you have with us. This information can include:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Social Security number and checking account information</li>
        <li>Transaction history and income</li>
        <li>Credit history and account balances</li>
      </ul>

      <p className="mb-6">
        <strong>How?</strong><br />
        All financial companies need to share customers’ personal information to run their everyday business. 
        In the section below, we list the reasons financial companies can share their customers’ personal information; 
        the reasons Meerkat Lending chooses to share; and whether you can limit this sharing.
      </p>

      <table className="w-full text-sm mb-8 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 text-left">Reasons we can share your personal information</th>
            <th className="p-3 text-left">Does Meerkat Lending share?</th>
            <th className="p-3 text-left">Can you limit this sharing?</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">For our everyday business purposes</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">For our marketing purposes</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">For joint marketing with other financial companies</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">For our affiliates’ everyday business purposes (transactions & experiences)</td>
            <td className="p-3">Yes</td>
            <td className="p-3">No</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">For our affiliates’ everyday business purposes (creditworthiness)</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">For our affiliates to market to you</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
          </tr>
          <tr>
            <td className="p-3">For nonaffiliates to market to you</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Yes</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-6">
        <strong>Who we are:</strong><br />
        Who is providing this notice? <strong>Meerkat Lending</strong>
      </p>

      <p className="mb-6">
        <strong>What we do:</strong><br />
        How does Meerkat Lending protect my personal information? We use security measures that comply with federal law, including computer safeguards and secured files and buildings.
      </p>

      <p className="mb-6">
        How does Meerkat Lending collect my personal information? We collect it when you:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Submit a loan request</li>
        <li>Provide your contact information</li>
        <li>Request help obtaining a loan</li>
      </ul>

      <p className="mb-6">
        We also collect your personal information from credit bureaus, affiliates, and other companies.
      </p>

      <p className="mb-6">
        <strong>Why can’t I limit all sharing?</strong><br />
        Federal law allows you to limit only:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Sharing for affiliates’ everyday business purposes – creditworthiness</li>
        <li>Affiliates from using your info to market to you</li>
        <li>Sharing for nonaffiliates to market to you</li>
      </ul>

      <p className="mb-6">
        <strong>State-specific disclosures:</strong><br />
        California, Nevada, Vermont, and North Dakota residents may have additional privacy rights. Please refer to your state law.
      </p>

      <p className="text-sm text-gray-500">
        Effective Date: July 23, 2025
      </p>       
    </section>
  )
}
