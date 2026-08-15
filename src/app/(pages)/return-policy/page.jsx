'use client';

import { RotateCcw, PackageCheck, Clock, Wallet, ArrowLeft, Mail, Phone, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReturnPolicy() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'return-window', title: 'Return Window' },
    { id: 'eligible-items', title: 'Eligible Items' },
    { id: 'non-returnable', title: 'Non-Returnable Items' },
    { id: 'how-to-return', title: 'How to Return' },
    { id: 'refund-process', title: 'Refund Process' },
    { id: 'exchanges', title: 'Exchanges' },
    { id: 'damaged-items', title: 'Damaged or Wrong Items' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Return & Refund Policy
              </h1>
              <p className="text-gray-600 font-medium mt-2">
                Last updated: {new Date().toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 sticky top-6">
              <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-purple-500" />
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Trust Badges */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <PackageCheck className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-800">Hassle-Free Returns</span>
                </div>
                <p className="text-green-700 text-sm">
                  We want you to love your purchase. If something's not right, we're here to help.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Astha Collection, your satisfaction matters to us. This Return & Refund Policy explains
                    how you can return or exchange a product, and how refunds are processed if your purchase
                    doesn&apos;t work out.
                  </p>
                  <p>
                    By placing an order with us, you agree to the terms outlined in this policy.
                  </p>
                </div>
              </section>

              {/* Return Window */}
              <section id="return-window" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Return Window</h2>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">7-Day Return Window</h3>
                      <p className="text-gray-600">Starting from the date of delivery</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    You may request a return or exchange within 7 days of receiving your order. Requests made
                    after this window cannot be accepted, except in cases of damaged or incorrect items.
                  </p>
                </div>
              </section>

              {/* Eligible Items */}
              <section id="eligible-items" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Eligible Items</h2>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3">To be eligible for a return, items must be:</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Unused, unworn, and in their original condition</li>
                    <li>In the original packaging with all tags attached</li>
                    <li>Accompanied by the original invoice or order confirmation</li>
                    <li>Free from stains, odours, or signs of wear</li>
                  </ul>
                </div>
              </section>

              {/* Non-Returnable Items */}
              <section id="non-returnable" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Non-Returnable Items</h2>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center gap-3 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-800">The following items cannot be returned</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Items marked as final sale or clearance</li>
                    <li>Products purchased through lucky draws or as free gifts</li>
                    <li>Customised or made-to-order items</li>
                    <li>Innerwear, accessories, or items flagged as non-returnable at checkout</li>
                  </ul>
                </div>
              </section>

              {/* How to Return */}
              <section id="how-to-return" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">How to Return</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '📧',
                      title: 'Step 1: Contact Us',
                      description: 'Email or call us with your order number and reason for return'
                    },
                    {
                      icon: '✅',
                      title: 'Step 2: Get Approval',
                      description: 'Our team will review and confirm your return eligibility'
                    },
                    {
                      icon: '📦',
                      title: 'Step 3: Pack the Item',
                      description: 'Securely pack the item in its original packaging with tags'
                    },
                    {
                      icon: '🚚',
                      title: 'Step 4: Ship It Back',
                      description: 'Send the item to the return address we provide, or hand it to our pickup partner'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border border-purple-100">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Refund Process */}
              <section id="refund-process" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Refund Process</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl p-4">
                    <Wallet className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Refunds are issued to the original payment method within 5-7 business days of us receiving and inspecting the returned item</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl p-4">
                    <Wallet className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">For Cash on Delivery orders, refunds are processed via bank transfer or UPI</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl p-4">
                    <Wallet className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Shipping charges, if any, are non-refundable unless the return is due to our error</span>
                  </div>
                </div>
              </section>

              {/* Exchanges */}
              <section id="exchanges" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Exchanges</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We&apos;re happy to exchange an item for a different size or colour, subject to availability.
                    To request an exchange, follow the same process as a return and mention your preferred
                    replacement when you contact us.
                  </p>
                  <p>
                    If the desired item is out of stock, we&apos;ll offer a refund or store credit instead.
                  </p>
                </div>
              </section>

              {/* Damaged or Wrong Items */}
              <section id="damaged-items" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Damaged or Wrong Items</h2>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <p className="text-yellow-800">
                    If you receive a damaged, defective, or incorrect item, please contact us within 48 hours
                    of delivery with photos of the product and packaging. We&apos;ll arrange a free replacement
                    or full refund, no questions asked.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Contact Us</h2>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-black mb-4">Need Help With a Return?</h3>
                  <p className="mb-6 opacity-90">
                    Reach out to us and we&apos;ll guide you through the process:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>asthacollection@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+91 99367 62093</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Thank you for shopping with Astha Collection. We&apos;re here to make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}