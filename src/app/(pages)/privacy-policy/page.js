'use client';

import { Shield, Lock, Eye, FileText, ArrowLeft, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PrivacyPolicy() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'changes', title: 'Policy Changes' },
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Privacy Policy
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
                <FileText className="w-5 h-5 text-purple-500" />
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
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-800">Your Data is Safe</span>
                </div>
                <p className="text-green-700 text-sm">
                  We are committed to protecting your privacy and ensuring the security of your personal information.
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
                    Welcome to Astha Collection! We value your privacy and are committed to protecting 
                    your personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website, participate in our lucky draws, 
                    or use our services.
                  </p>
                  <p>
                    By accessing or using Astha Collection&apos;s services, you agree to the terms of this 
                    Privacy Policy. If you do not agree with the terms, please do not access the site or use our services.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collection" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-700">
                      <li>Full name and contact details</li>
                      <li>Email address and phone number</li>
                      <li>Demographic information (age, gender, location)</li>
                      <li>Lucky draw participation data</li>
                      <li>Purchase history and preferences</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-green-700">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">How We Use Your Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '🎯',
                      title: 'Service Delivery',
                      description: 'To process your lucky draw entries and provide customer support'
                    },
                    {
                      icon: '📧',
                      title: 'Communication',
                      description: 'To send updates about winners, new products, and promotions'
                    },
                    {
                      icon: '🔍',
                      title: 'Improvement',
                      description: 'To enhance user experience and improve our services'
                    },
                    {
                      icon: '🛡️',
                      title: 'Security',
                      description: 'To protect against fraud and ensure platform security'
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

              {/* Data Sharing */}
              <section id="data-sharing" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Data Sharing</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. However, 
                    we may share information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> Trusted partners who assist in website operation and business activities</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or business transfers</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Data Security</h2>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <Lock className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">We Protect Your Data</h3>
                      <p className="text-gray-600">Implementing industry-standard security measures</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure Data Storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Regular Security Audits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Access Controls</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Your Rights</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You have the right to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Access your personal data',
                      'Correct inaccurate data',
                      'Request data deletion',
                      'Object to data processing',
                      'Data portability',
                      'Withdraw consent'
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl p-4">
                        <Eye className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Cookies</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    Cookies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, 
                    disabling cookies may affect some website features.
                  </p>
                </div>
              </section>

              {/* Policy Changes */}
              <section id="changes" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl font-black text-gray-800">Policy Changes</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                  <p>
                    Continued use of our services after any changes constitutes acceptance of the updated policy. 
                    We encourage you to review this Privacy Policy periodically.
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
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
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
                Thank you for trusting Astha Collection with your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}