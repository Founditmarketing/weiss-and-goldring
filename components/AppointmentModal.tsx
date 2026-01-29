import React, { useState } from 'react';
import X from 'lucide-react/dist/esm/icons/x';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import { Button } from './Button';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      // Optional: auto-close after a few seconds or let user close
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 500); // Reset after animation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px] animate-fade-in-up rounded-sm">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-navy-900 z-20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar Image */}
        <div className="hidden md:block w-5/12 bg-navy-900 relative">
          <img
            src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1887&auto=format&fit=crop"
            alt="Measuring Tape"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-12 left-12 text-white pr-8">
            <h4 className="font-serif text-3xl mb-4 italic text-gold-100">The Fitting</h4>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              "The difference between being dressed and well dressed." <br /> <br />
              <span className="text-gold-500 uppercase text-xs tracking-widest">— Ted</span>
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">

          {isSubmitted ? (
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-serif text-3xl text-navy-900 mb-4">Request Received</h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-8">
                Thank you. Ted or a member of our concierge team will contact you shortly to confirm your appointment time.
              </p>
              <Button onClick={handleClose} variant="outline">Return to Site</Button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <span className="text-gold-500 font-sans text-xs tracking-widest uppercase">Consultation</span>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mt-2">Request Appointment</h2>
              </div>

              {step === 1 ? (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                      <input type="text" id="fname" className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 text-sm font-sans placeholder-transparent transition-colors" placeholder="First Name" />
                      <label htmlFor="fname" className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">First Name</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="lname" className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 text-sm font-sans placeholder-transparent transition-colors" placeholder="Last Name" />
                      <label htmlFor="lname" className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Last Name</label>
                    </div>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 text-sm font-sans placeholder-transparent transition-colors" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Email Address</label>
                  </div>
                  <div className="relative">
                    <input type="tel" id="phone" className="peer w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 text-sm font-sans placeholder-transparent transition-colors" placeholder="Phone" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gold-500 peer-focus:text-xs">Phone Number</label>
                  </div>

                  <div className="pt-4">
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-3 block">I am interested in</label>
                    <div className="flex gap-4 flex-wrap">
                      {['Bespoke Suit', 'Wardrobe Refresh', 'Special Event', 'Alterations'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                          <div className="relative flex items-center">
                            <input type="radio" name="type" className="peer sr-only" />
                            <div className="w-4 h-4 border border-gray-300 rounded-full peer-checked:border-navy-900 peer-checked:border-4 transition-all"></div>
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-navy-900 transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full mt-4">Next Step</Button>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="bg-cream p-5 border border-gold-100 rounded-sm">
                    <p className="text-sm text-navy-900 mb-3 font-sans font-semibold">Store Availability</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span>Mon - Fri • 10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span>Saturday • 10:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block group-focus-within:text-gold-500 transition-colors">Preferred Date</label>
                    <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 text-sm font-sans transition-colors" />
                  </div>

                  <div className="relative group">
                    <textarea
                      placeholder="Tell us about your needs or specific brands you are interested in..."
                      rows={3}
                      className="w-full border border-gray-300 p-4 text-sm font-sans focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 rounded-sm bg-gray-50 transition-all placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-gray-500 hover:text-navy-900 px-4 transition-colors">Back</button>
                    <Button onClick={handleSubmit} className="flex-1">Confirm Request</Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};