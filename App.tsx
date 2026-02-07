
import React, { useState, useCallback } from 'react';
import { InputField } from './components/InputField';
import { SelectField } from './components/SelectField';
import { FormData, INITIAL_FORM_STATE } from './types';
import { CheckCircle, Briefcase, GraduationCap, User, Phone, ClipboardCheck } from 'lucide-react';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-12 rounded-lg shadow-xl text-center max-w-lg w-full">
          <CheckCircle className="w-20 h-20 text-acc-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Application Received</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for applying to ACC Group. Our recruitment team will review your information and get in touch if your profile matches our requirements.
          </p>
          <button 
            onClick={resetForm}
            className="bg-[#1a1a1a] text-white px-8 py-3 rounded-sm font-semibold tracking-widest hover:bg-[#b89b5e] transition-colors uppercase text-xs"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <img 
          src="https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431368.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Recruitment Background" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          {/* Official Logo */}
          <div className="absolute top-8 left-6 md:left-12 flex items-center">
            <img 
              src="https://www.arabianconstructioncompany.com/logo.png" 
              alt="ACC Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>
          
          <div className="mt-16">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Recruitment</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light">
              Join a legacy of excellence. Here you can apply for career opportunities with ACC Group.
            </p>
          </div>
        </div>
      </section>

      {/* Form Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        {/* Left Column - Form */}
        <div className="lg:col-span-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Job Application Form</h2>
            <p className="text-gray-500 font-light text-lg">
              Please provide accurate information for business evaluation and recruitment processing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            
            {/* Section: Basic Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-8">
                <User className="w-6 h-6 text-acc-gold" />
                <h3 className="text-xl font-bold uppercase tracking-widest">Basic Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <InputField 
                  label="Full Name" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  placeholder="As per legal documents"
                />
                <SelectField 
                  label="Gender" 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleInputChange}
                  options={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' },
                    { label: 'Prefer not to say', value: 'prefer-not-to-say' },
                  ]}
                />
                <InputField 
                  label="Date of Birth" 
                  name="dob" 
                  type="date" 
                  value={formData.dob} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Current City" 
                  name="currentCity" 
                  value={formData.currentCity} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Current State" 
                  name="currentState" 
                  value={formData.currentState} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Country" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section: Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-8">
                <Phone className="w-6 h-6 text-acc-gold" />
                <h3 className="text-xl font-bold uppercase tracking-widest">Contact Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <InputField 
                  label="Primary Mobile Number" 
                  name="primaryMobile" 
                  required 
                  value={formData.primaryMobile} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Alternate Mobile Number" 
                  name="alternateMobile" 
                  value={formData.alternateMobile} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Primary Email Address" 
                  name="primaryEmail" 
                  type="email"
                  required 
                  value={formData.primaryEmail} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Alternate Email Address" 
                  name="alternateEmail" 
                  type="email"
                  value={formData.alternateEmail} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section: Job Application Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-8">
                <Briefcase className="w-6 h-6 text-acc-gold" />
                <h3 className="text-xl font-bold uppercase tracking-widest">Job Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <InputField 
                  label="Role Applying For" 
                  name="roleApplyingFor" 
                  required 
                  value={formData.roleApplyingFor} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Preferred Job Location" 
                  name="preferredJobLocation" 
                  placeholder="Remote / City Preference"
                  value={formData.preferredJobLocation} 
                  onChange={handleInputChange} 
                />
                <SelectField 
                  label="Employment Type" 
                  name="employmentType" 
                  value={formData.employmentType} 
                  onChange={handleInputChange}
                  options={[
                    { label: 'Full Time', value: 'full-time' },
                    { label: 'Contract', value: 'contract' },
                    { label: 'Internship', value: 'internship' },
                  ]}
                />
              </div>
            </div>

            {/* Section: Education Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-8">
                <GraduationCap className="w-6 h-6 text-acc-gold" />
                <h3 className="text-xl font-bold uppercase tracking-widest">Education Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <SelectField 
                  label="Highest Qualification" 
                  name="highestQualification" 
                  required
                  value={formData.highestQualification} 
                  onChange={handleInputChange}
                  options={[
                    { label: '10th', value: '10th' },
                    { label: '12th', value: '12th' },
                    { label: 'Diploma', value: 'diploma' },
                    { label: 'Graduation', value: 'graduation' },
                    { label: 'Post Graduation', value: 'post-graduation' },
                    { label: 'Other', value: 'other' },
                  ]}
                />
                <InputField 
                  label="Degree / Course Name" 
                  name="degreeName" 
                  value={formData.degreeName} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Specialization" 
                  name="specialization" 
                  value={formData.specialization} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="College / University Name" 
                  name="collegeName" 
                  value={formData.collegeName} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Year of Passing" 
                  name="yearOfPassing" 
                  value={formData.yearOfPassing} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section: Experience Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-8">
                <ClipboardCheck className="w-6 h-6 text-acc-gold" />
                <h3 className="text-xl font-bold uppercase tracking-widest">Experience Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <SelectField 
                  label="Total Years of Experience" 
                  name="totalExperience" 
                  required
                  value={formData.totalExperience} 
                  onChange={handleInputChange}
                  options={[
                    { label: 'Fresher', value: 'fresher' },
                    { label: '0–1 Years', value: '0-1' },
                    { label: '1–3 Years', value: '1-3' },
                    { label: '3–5 Years', value: '3-5' },
                    { label: '5+ Years', value: '5+' },
                  ]}
                />
                <InputField 
                  label="Current Company Name" 
                  name="currentCompany" 
                  value={formData.currentCompany} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Current Job Role" 
                  name="currentJobRole" 
                  value={formData.currentJobRole} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Key Skills" 
                  name="keySkills" 
                  required
                  placeholder="Comma separated"
                  value={formData.keySkills} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Current CTC" 
                  name="currentCTC" 
                  value={formData.currentCTC} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  label="Expected CTC" 
                  name="expectedCTC" 
                  value={formData.expectedCTC} 
                  onChange={handleInputChange} 
                />
                <SelectField 
                  label="Notice Period" 
                  name="noticePeriod" 
                  required
                  value={formData.noticePeriod} 
                  onChange={handleInputChange}
                  options={[
                    { label: 'Immediate', value: 'immediate' },
                    { label: '15 Days', value: '15' },
                    { label: '30 Days', value: '30' },
                    { label: '60 Days', value: '60' },
                    { label: '90 Days', value: '90' },
                  ]}
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="pt-10 border-t border-gray-100">
              <h4 className="text-xl font-bold mb-6 uppercase tracking-widest">Declaration</h4>
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5 mt-1">
                  <input
                    id="confirmed"
                    name="confirmed"
                    type="checkbox"
                    required
                    checked={formData.confirmed}
                    onChange={(e) => setFormData(p => ({ ...p, confirmed: e.target.checked }))}
                    className="w-5 h-5 border-gray-300 rounded accent-acc-gold cursor-pointer"
                  />
                </div>
                <label htmlFor="confirmed" className="text-gray-700 text-sm leading-relaxed cursor-pointer select-none">
                  I confirm that the information provided above is true and correct to the best of my knowledge. I understand that any misrepresentation may lead to disqualification. *
                </label>
              </div>
            </div>

            <div className="pt-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full md:w-auto px-16 py-4 bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b89b5e]'}
                `}
              >
                {isSubmitting ? 'Processing Application...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column - Visual/Brand Info (Sticky on scroll) */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-12 space-y-12">
            <div className="relative overflow-hidden group">
              <img 
                src="https://picsum.photos/id/111/600/800" 
                alt="Construction" 
                className="w-full h-auto rounded-sm transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">Build Your Legacy</h3>
                  <p className="text-acc-gold font-medium uppercase tracking-widest text-xs">Arabian Construction Co.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-10 text-white space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-acc-gold">Why Join ACC?</h4>
              <ul className="space-y-4 font-light text-sm opacity-90 leading-relaxed">
                <li className="flex gap-4"><span className="text-acc-gold font-bold">01.</span> Global exposure to iconic architectural projects.</li>
                <li className="flex gap-4"><span className="text-acc-gold font-bold">02.</span> Culture of excellence and professional development.</li>
                <li className="flex gap-4"><span className="text-acc-gold font-bold">03.</span> Diverse workforce with top-tier engineering talent.</li>
                <li className="flex gap-4"><span className="text-acc-gold font-bold">04.</span> Commitment to safety, sustainability, and innovation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
                <img 
                  src="https://www.arabianconstructioncompany.com/logo.png" 
                  alt="ACC Logo" 
                  className="h-10 w-auto" 
                />
            </div>
            <div className="text-center md:text-right text-xs text-gray-500 font-medium tracking-widest">
                &copy; {new Date().getFullYear()} ARABIAN CONSTRUCTION CO. ALL RIGHTS RESERVED.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
