'use client';

import { FileCheck, ScrollText, Gift, AlertTriangle, ArrowLeft, Mail, Phone, Ban } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TermsAndConditions() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'lucky-draw-rules', title: 'Lucky Draw Rules' },
    { id: 'orders-payments', title: 'Orders & Payments' },
    { id: 'user-conduct', title: 'User Conduct' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes', title: 'Changes to Terms' },
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
              <ScrollText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Terms & Conditions
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
                <FileCheck className="w-5 h-5 text-purple-500" />
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
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-800">Fair & Transparent</span>
                </div>
                <p className="text-blue-700 text-sm">
                  These terms are designed to keep your shopping and lucky draw experience fair for everyone.
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
                    Welcome to Astha Collection! These Terms & Conditions govern your access to and use of
                    our website, products, lucky draws, and services. By browsing our site, placing an order,
                    or participating in any of our lucky draws, you agree to be bound by these terms.
                  </p>
                  <p>
                    If you do not agree with any part of these terms, please discontinue use of our website
                    and services immediately.
                  </p>
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Eligibility</h2>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>You must be at least 18 years old to make a purchase or enter a lucky draw</li>
                    <li>You must provide accurate and complete registration or order information</li>
                    <li>You are responsible for maintaining the confidentiality of your account details</li>
                    <li>One entry per person per lucky draw, unless stated otherwise in the specific draw's rules</li>
                  </ul>
                </div>
              </section>

              {/* Lucky Draw Rules */}
              <section id="lucky-draw-rules" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Lucky Draw Rules</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '🎁',
                      title: 'Fair Selection',
                      description: 'Winners are selected through a random and transparent draw process'
                    },
                    {
                      icon: '📢',
                      title: 'Winner Announcement',
                      description: 'Winners are notified via email, phone, or announced on our official channels'
                    },
                    {
                      icon: '⏳',
                      title: 'Claim Period',
                      description: 'Prizes must be claimed within the timeframe specified for each draw'
                    },
                    {
                      icon: '🚫',
                      title: 'Disqualification',
                      description: 'Entries found to be fraudulent or in violation of rules will be disqualified'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border border-purple-100">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-6">
                  Astha Collection reserves the right to modify, suspend, or cancel any lucky draw at its
                  discretion, with reasonable notice provided to participants where possible.
                </p>
              </section>

              {/* Orders & Payments */}
              <section id="orders-payments" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Orders & Payments</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>By placing an order with us, you agree to the following:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Order Confirmation:</strong> All orders are subject to acceptance and availability</li>
                    <li><strong>Pricing:</strong> Prices are listed in Indian Rupees (INR) and may change without prior notice</li>
                    <li><strong>Payment:</strong> Full payment is required at the time of order unless otherwise agreed</li>
                    <li><strong>Order Errors:</strong> We reserve the right to cancel orders due to pricing or listing errors</li>
                  </ul>
                </div>
              </section>

              {/* User Conduct */}
              <section id="user-conduct" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">User Conduct</h2>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <Ban className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Please Do Not</h3>
                      <p className="text-gray-600">Actions that may result in account suspension</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Create multiple accounts for draws</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Submit false information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Attempt to manipulate draw results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Misuse or resell products for fraud</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All content on this website, including logos, images, text, and designs, is the property
                    of Astha Collection unless otherwise stated. You may not reproduce, distribute, or use
                    our content for commercial purposes without written permission.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="limitation-liability" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Limitation of Liability</h2>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <p className="text-yellow-800">
                    Astha Collection is not liable for indirect, incidental, or consequential damages arising
                    from the use of our website, products, or participation in lucky draws, to the fullest
                    extent permitted by law.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We reserve the right to suspend or terminate your access to our services at our discretion,
                    without prior notice, if you violate these Terms & Conditions or engage in fraudulent activity.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Changes to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update these Terms & Conditions from time to time. Any changes will be posted on
                    this page with an updated &quot;Last updated&quot; date. Continued use of our services after
                    changes are posted constitutes your acceptance of the revised terms.
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
                  <h3 className="text-xl font-black mb-4">Have Questions?</h3>
                  <p className="mb-6 opacity-90">
                    If you have any questions about these Terms & Conditions, please contact us:
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
                Thank you for choosing Astha Collection. We&apos;re glad to have you with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}