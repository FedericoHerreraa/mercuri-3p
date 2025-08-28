



export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gradient">Mercuri3P</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#cases" className="text-gray-600 hover:text-blue-600 transition-colors">Cases</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button className="btn-primary">Let&apos;s Talk</button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Through
              <span className="text-gradient block mt-2">Conscious Communication</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help organizations embrace agility, foster meaningful connections, and achieve rigorous results through adaptive strategies and human-centered approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary">Start Your Transformation</button>
              <button className="btn-secondary">Explore Our Approach</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in the power of agile methodologies combined with conscious communication to create lasting organizational change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agility</h3>
              <p className="text-gray-600">Rapid adaptation to change while maintaining strategic focus and delivering measurable outcomes.</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conscious Communication</h3>
              <p className="text-gray-600">Fostering authentic dialogue and transparent processes that build trust and drive engagement.</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexibility</h3>
              <p className="text-gray-600">Adaptive frameworks that evolve with your organization&apos;s unique needs and market dynamics.</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rigorous Results</h3>
              <p className="text-gray-600">Data-driven approaches that ensure accountability and deliver tangible business value.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your organization from the inside out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">End-to-end digital transformation strategies that align technology with business objectives and cultural change.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Technology roadmap development</li>
                <li>• Process optimization</li>
                <li>• Change management</li>
                <li>• Digital culture adoption</li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Organizational Development</h3>
              <p className="text-gray-600 mb-6">Building adaptive organizations through strategic planning, team dynamics, and leadership development.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Leadership coaching</li>
                <li>• Team effectiveness</li>
                <li>• Organizational design</li>
                <li>• Performance systems</li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Innovation</h3>
              <p className="text-gray-600 mb-6">Innovation frameworks and strategic planning that drive sustainable growth and competitive advantage.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Innovation strategy</li>
                <li>• Market analysis</li>
                <li>• Business model design</li>
                <li>• Strategic partnerships</li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agile Implementation</h3>
              <p className="text-gray-600 mb-6">Agile transformation and methodology implementation tailored to your organizational context.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Agile coaching</li>
                <li>• Scrum implementation</li>
                <li>• Team training</li>
                <li>• Process optimization</li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Communication Strategy</h3>
              <p className="text-gray-600 mb-6">Conscious communication frameworks that enhance collaboration and stakeholder engagement.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Communication planning</li>
                <li>• Stakeholder mapping</li>
                <li>• Feedback systems</li>
                <li>• Conflict resolution</li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600 mb-6">Data-driven insights and performance measurement systems to track and optimize organizational success.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• KPI development</li>
                <li>• Analytics implementation</li>
                <li>• Reporting systems</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations achieved through our agile and conscious approach to organizational change.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Global Tech Company</h3>
                  <p className="text-gray-600">Digital Transformation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Led a comprehensive digital transformation for a multinational technology company, implementing agile methodologies across 15 teams and 3 continents. The initiative resulted in 40% faster product delivery and significantly improved cross-team collaboration.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">40% faster delivery</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">15 teams transformed</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Global implementation</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                &ldquo;Mercuri3P&apos;s approach to conscious communication transformed not just our processes, but our entire organizational culture. The results speak for themselves.&rdquo;
              </blockquote>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Financial Services Firm</h3>
                  <p className="text-gray-600">Organizational Development</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Redesigned organizational structure and communication frameworks for a leading financial services firm. Enhanced leadership effectiveness and team collaboration, resulting in 25% improvement in employee engagement and 30% reduction in project timeline.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">25% engagement boost</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">30% faster projects</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Leadership transformation</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                &ldquo;The flexible approach and focus on human-centered change management made all the difference in our transformation journey.&rdquo;
              </blockquote>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Healthcare Innovation</h3>
                  <p className="text-gray-600">Strategic Innovation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Developed innovation strategy and implementation framework for a healthcare organization looking to modernize patient care delivery. Created cross-functional innovation teams that launched 5 new service offerings within 18 months.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">5 new services</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">18-month timeline</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Patient-centered</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                &ldquo;Their strategic approach to innovation helped us reimagine healthcare delivery while maintaining our commitment to patient care.&rdquo;
              </blockquote>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0h2m-2 0v12a2 2 0 01-2 2h-2m-4 0H8a2 2 0 01-2-2v-2m0 0h8a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Manufacturing Leader</h3>
                  <p className="text-gray-600">Agile Implementation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Implemented agile methodologies in a traditional manufacturing environment, focusing on continuous improvement and responsive operations. Achieved 35% reduction in waste and 50% improvement in time-to-market for new products.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">35% waste reduction</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">50% faster to market</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Agile manufacturing</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                &ldquo;We never thought agile could work in manufacturing, but Mercuri3P showed us how to adapt the principles to our industry with remarkable results.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let&apos;s start a conversation about how conscious communication and agile methodologies can drive your organization forward.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-6">
                    We believe every transformation begins with understanding. Let&apos;s explore how our approach can be tailored to your unique challenges and aspirations.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">hello@mercuri3p.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Visit Us</p>
                      <p className="text-gray-600">Global consultancy with local presence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="card p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input type="text" id="company" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your company" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select id="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                      <option>Select a service</option>
                      <option>Digital Transformation</option>
                      <option>Organizational Development</option>
                      <option>Strategic Innovation</option>
                      <option>Agile Implementation</option>
                      <option>Communication Strategy</option>
                      <option>Performance Analytics</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Tell us about your challenge or vision..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl mb-4">Mercuri3P</div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming organizations through agile methodologies and conscious communication. Building the future of work, one conversation at a time.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.994 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Organizational Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategic Innovation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agile Implementation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Approach</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mercuri3P. All rights reserved. | Conscious communication for transformative results.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
