import React, { useState } from 'react';
import './Form.css';

const Form1 = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    occasion: '',
    customOccasion: '',
    purchaseType: '',
    gender: '',
    ageGroup: '',
    religion: '',
    jewelleryType: '',
    budget: '',
    outfitMatching: '',
    outfitImage: null
  });
  const [preview, setPreview] = useState(null);

  const nextStep = () => {
    if (isStepComplete()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const isStepComplete = () => {
    switch (step) {
      case 0:
        return formData.occasion !== '' && (formData.occasion !== 'Custom' || formData.customOccasion !== '');
      case 1:
        return formData.purchaseType !== '';
      case 2:
        return formData.gender !== '';
      case 3:
        return formData.ageGroup !== '';
      case 4:
        return true;
      case 5:
        return formData.jewelleryType !== '';
      case 6:
        return formData.budget !== '';
      case 7:
        return formData.outfitMatching !== '' && (formData.outfitMatching === 'No' || formData.outfitImage !== null);
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2>What is the occasion for this jewellery?</h2>
            <span className="help-icon" title="This helps us tailor our recommendations to match the significance and style suitable for the event.">help</span>
            <select name="occasion" onChange={handleChange} value={formData.occasion}>
              <option value="">Select an occasion</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
              <option value="Daily-wear">Daily-wear</option>
              <option value="Custom">Custom</option>
            </select>
            {formData.occasion === 'Custom' && (
              <input
                type="text"
                name="customOccasion"
                placeholder="Please specify"
                onChange={handleChange}
                value={formData.customOccasion}
              />
            )}
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Is this a gift or a personal purchase?</h2>
            <span className="help-icon" title="Understanding if the jewellery is for yourself or someone else helps us refine our suggestions based on typical gift preferences.">help</span>
            <select name="purchaseType" onChange={handleChange} value={formData.purchaseType}>
              <option value="">Select an option</option>
              <option value="Gift">Gift</option>
              <option value="Personal Purchase">Personal Purchase</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Please select the gender.</h2>
            <span className="help-icon" title="This allows us to recommend designs and styles that align with the typical preferences of the chosen gender.">help</span>
            <div>
              <label>
                <i className="fas fa-male"></i>
                <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
                Male
              </label>
              <label>
                <i className="fas fa-female"></i>
                <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
                Female
              </label>
              <label>
                <i className="fas fa-genderless"></i>
                <input type="radio" name="gender" value="Other" onChange={handleChange} checked={formData.gender === 'Other'} />
                Other
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>What is the age group of the wearer?</h2>
            <span className="help-icon" title="Age can significantly influence jewellery style preferences, so this helps us make more suitable recommendations.">help</span>
            <div>
              <label>
                <input type="radio" name="ageGroup" value="<18" onChange={handleChange} checked={formData.ageGroup === '<18'} />
                &lt;18
              </label>
              <label>
                <input type="radio" name="ageGroup" value="18-25" onChange={handleChange} checked={formData.ageGroup === '18-25'} />
                18-25
              </label>
              <label>
                <input type="radio" name="ageGroup" value="26-35" onChange={handleChange} checked={formData.ageGroup === '26-35'} />
                26-35
              </label>
              <label>
                <input type="radio" name="ageGroup" value="36-50" onChange={handleChange} checked={formData.ageGroup === '36-50'} />
                36-50
              </label>
              <label>
                <input type="radio" name="ageGroup" value="51+" onChange={handleChange} checked={formData.ageGroup === '51+'} />
                51+
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Do you have any religious considerations for this jewellery? (Optional)</h2>
            <span className="help-icon" title="Some religious beliefs might influence jewellery design choices, like specific symbols or restrictions.">help</span>
            <select name="religion" onChange={handleChange} value={formData.religion}>
              <option value="">Select an option</option>
              <option value="Christianity">Christianity</option>
              <option value="Islam">Islam</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Other">Other</option>
              <option value="None">None</option>
            </select>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>What type of jewellery are you interested in?</h2>
            <span className="help-icon" title="This helps us narrow down the product category to provide more relevant recommendations.">help</span>
            <div>
              <label>
                <i className="fas fa-ring"></i>
                <input type="radio" name="jewelleryType" value="Rings" onChange={handleChange} checked={formData.jewelleryType === 'Rings'} />
                Rings
              </label>
              <label>
                <i className="fas fa-necklace"></i>
                <input type="radio" name="jewelleryType" value="Necklaces" onChange={handleChange} checked={formData.jewelleryType === 'Necklaces'} />
                Necklaces
              </label>
              <label>
                <i className="fas fa-gem"></i>
                <input type="radio" name="jewelleryType" value="Pendants" onChange={handleChange} checked={formData.jewelleryType === 'Pendants'} />
                Pendants
              </label>
              <label>
                <i className="fas fa-bracelet"></i>
                <input type="radio" name="jewelleryType" value="Bracelets" onChange={handleChange} checked={formData.jewelleryType === 'Bracelets'} />
                Bracelets
              </label>
              <label>
                <i className="fas fa-earrings"></i>
                <input type="radio" name="jewelleryType" value="Earrings" onChange={handleChange} checked={formData.jewelleryType === 'Earrings'} />
                Earrings
              </label>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h2>What is your budget for this jewellery?</h2>
            <span className="help-icon" title="Knowing your budget helps us suggest options that fit within your financial constraints.">help</span>
            <div>
              <label>
                <input type="radio" name="budget" value="<$50" onChange={handleChange} checked={formData.budget === '<$50'} />
                &lt;$50
              </label>
              <label>
                <input type="radio" name="budget" value="$50-$100" onChange={handleChange} checked={formData.budget === '$50-$100'} />
                $50-$100
              </label>
              <label>
                <input type="radio" name="budget" value="$100-$200" onChange={handleChange} checked={formData.budget === '$100-$200'} />
                $100-$200
              </label>
              <label>
                <input type="radio" name="budget" value="$200+" onChange={handleChange} checked={formData.budget === '$200+'} />
                $200+
              </label>
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h2>Would you like to match your jewellery with an outfit?</h2>
            <span className="help-icon" title="Uploading an image of your outfit can help us recommend jewellery that complements your attire perfectly.">help</span>
            <div>
              <label>
                <input type="radio" name="outfitMatching" value="Yes" onChange={handleChange} checked={formData.outfitMatching === 'Yes'} />
                Yes
              </label>
              <label>
                <input type="radio" name="outfitMatching" value="No" onChange={handleChange} checked={formData.outfitMatching === 'No'} />
                No
              </label>
            </div>
            {formData.outfitMatching === 'Yes' && (
              <div>
                <input type="file" name="outfitImage" accept="image/*" onChange={handleChange} />
                {preview && <img src={preview} alt="Outfit preview" className="image-preview" />}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div>
            <h2>Form Completed</h2>
            <p>Thank you for providing the details. Here is the summary:</p>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <button type="submit">Submit</button>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="button-container">
          {step > 0 && <button type="button" onClick={prevStep}>Back</button>}
          {step < 7 ? (
            <button type="button" onClick={nextStep} disabled={!isStepComplete()}>Next</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form1;
