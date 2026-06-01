import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { sendBookingEmail } from "../../services/emailService";
import "./Booking.css";

interface BookingFormData {
  roomType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  specialRequests: string;
  howDidYouHear: string;
}

interface FormErrors {
  [key: string]: string;
}

const roomTypes = [
  {
    value: "standard-single",
    label: "Standard Single Room",
    price: "KSh 6,500 / night",
    description: "1 Single Bed — Fully Self-Contained",
    capacity: "1 Guest",
  },
  {
    value: "standard-double",
    label: "Standard Double Room",
    price: "KSh 8,500 / night",
    description: "1 Double Bed — Fully Self-Contained",
    capacity: "2 Guests",
  },
  {
    value: "family-cottage",
    label: "Family Cottage",
    price: "KSh 12,000 / night",
    description: "1 Double + 1 Single Bed — Self-Contained",
    capacity: "3 Guests",
  },
  {
    value: "executive-suite",
    label: "Executive Suite",
    price: "KSh 18,000 / night",
    description: "1 King-Size Bed — Self-Contained",
    capacity: "2 Guests",
  },
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    roomType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Kenya",
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
    specialRequests: "",
    howDidYouHear: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalEstimate, setTotalEstimate] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Pre-fill form data from URL params (from hero widget)
  useEffect(() => {
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const adultsParam = searchParams.get("adults");

    if (checkInParam || checkOutParam || adultsParam) {
      setFormData((prev) => ({
        ...prev,
        checkIn: checkInParam || prev.checkIn,
        checkOut: checkOutParam || prev.checkOut,
        adults: adultsParam || prev.adults,
      }));

      // If both dates are pre-filled, skip to step 2
      if (checkInParam && checkOutParam) {
        setCurrentStep(2);
      }
    }
  }, [searchParams]);

  // Calculate total estimate
  useEffect(() => {
    const selectedRoom = roomTypes.find((r) => r.value === formData.roomType);
    if (selectedRoom && formData.checkIn && formData.checkOut) {
      const pricePerNight = parseInt(
        selectedRoom.price.replace(/[^0-9]/g, "")
      );
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const nights = Math.max(
        1,
        Math.ceil(
          (checkOutDate.getTime() - checkInDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      );
      setTotalEstimate(pricePerNight * nights);
    } else {
      setTotalEstimate(0);
    }
  }, [formData.roomType, formData.checkIn, formData.checkOut]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    // Clear send error when user makes changes
    if (sendError) setSendError("");
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.roomType) newErrors.roomType = "Please select a room type";
    }

    if (step === 2) {
      if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
      if (!formData.checkOut)
        newErrors.checkOut = "Check-out date is required";
      if (formData.checkIn && formData.checkOut) {
        const checkIn = new Date(formData.checkIn);
        const checkOut = new Date(formData.checkOut);
        if (checkOut <= checkIn) {
          newErrors.checkOut = "Check-out must be after check-in";
        }
        if (checkIn < new Date(new Date().setHours(0, 0, 0, 0))) {
          newErrors.checkIn = "Check-in date cannot be in the past";
        }
      }
      if (!formData.adults || parseInt(formData.adults) < 1) {
        newErrors.adults = "At least 1 adult is required";
      }
    }

    if (step === 3) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateStep(3)) {
      setIsSending(true);
      setSendError("");

      const selectedRoom = roomTypes.find(
        (r) => r.value === formData.roomType
      );

      // Calculate nights
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const nights = Math.max(
        1,
        Math.ceil(
          (checkOutDate.getTime() - checkInDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      );

      // Send email via Resend
      const result = await sendBookingEmail({
        roomType: selectedRoom?.label || "",
        roomDescription: selectedRoom?.description || "",
        roomRate: selectedRoom?.price || "",
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        nights,
        adults: formData.adults,
        children: formData.children,
        totalGuests:
          parseInt(formData.adults) + parseInt(formData.children),
        estimatedTotal: `KSh ${totalEstimate.toLocaleString()}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        howDidYouHear: formData.howDidYouHear,
        specialRequests: formData.specialRequests,
      });

      setIsSending(false);

      if (result.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSendError(result.message);
      }
    }
  };

  const handleNewBooking = () => {
    setFormData({
      roomType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "Kenya",
      checkIn: "",
      checkOut: "",
      adults: "1",
      children: "0",
      specialRequests: "",
      howDidYouHear: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setCurrentStep(1);
    setTotalEstimate(0);
    setIsSending(false);
    setSendError("");
  };

  const today = new Date().toISOString().split("T")[0];
  const minCheckOut = formData.checkIn
    ? new Date(new Date(formData.checkIn).getTime() + 86400000)
        .toISOString()
        .split("T")[0]
    : today;

  const selectedRoom = roomTypes.find((r) => r.value === formData.roomType);
  const nights =
    formData.checkIn && formData.checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(formData.checkOut).getTime() -
              new Date(formData.checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  return (
    <>
      <Navbar />

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="booking-hero">
        <div className="booking-hero-bg" />
        <div className="container booking-hero-content">
          <span className="booking-hero-tag">Reservations</span>
          <h1>Book Your Stay</h1>
          <p>
            Secure your room at Indigenous Seeds Village. Fill in your details
            below and we'll confirm your reservation within 24 hours.
          </p>
        </div>
      </section>

      {/* ================================
          BOOKING FORM
          ================================ */}
      <section className="booking-section">
        <div className="container">
          {isSubmitted ? (
            /* ===== SUCCESS STATE ===== */
            <div className="booking-success">
              <div className="success-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2>Booking Inquiry Submitted!</h2>
              <p>
                Thank you, {formData.firstName}! Your booking inquiry has been
                sent successfully. A copy has been emailed to{" "}
                <strong>{formData.email}</strong> for your records.
              </p>
              <p className="success-subtitle">
                Our reservations team will review your request and respond
                within 24 hours to confirm availability and final pricing.
              </p>
              <div className="success-details">
                <div className="success-detail-item">
                  <span>Room</span>
                  <strong>{selectedRoom?.label}</strong>
                </div>
                <div className="success-detail-item">
                  <span>Check-in</span>
                  <strong>{formData.checkIn}</strong>
                </div>
                <div className="success-detail-item">
                  <span>Check-out</span>
                  <strong>{formData.checkOut}</strong>
                </div>
                <div className="success-detail-item">
                  <span>Guests</span>
                  <strong>
                    {formData.adults} Adult(s)
                    {parseInt(formData.children) > 0 &&
                      `, ${formData.children} Child(ren)`}
                  </strong>
                </div>
              </div>
              <div className="success-actions">
                <button
                  className="success-btn-primary"
                  onClick={handleNewBooking}
                >
                  Make Another Booking
                </button>
                <Link to="/" className="success-btn-secondary">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            /* ===== FORM ===== */
            <div className="booking-form-wrapper">
              {/* Progress Bar */}
              <div className="booking-progress">
                <div
                  className={`progress-step ${
                    currentStep >= 1 ? "progress-step-active" : ""
                  } ${currentStep > 1 ? "progress-step-completed" : ""}`}
                >
                  <div className="progress-number">1</div>
                  <span className="progress-label">Room</span>
                </div>
                <div
                  className={`progress-line ${
                    currentStep > 1 ? "progress-line-active" : ""
                  }`}
                />
                <div
                  className={`progress-step ${
                    currentStep >= 2 ? "progress-step-active" : ""
                  } ${currentStep > 2 ? "progress-step-completed" : ""}`}
                >
                  <div className="progress-number">2</div>
                  <span className="progress-label">Dates</span>
                </div>
                <div
                  className={`progress-line ${
                    currentStep > 2 ? "progress-line-active" : ""
                  }`}
                />
                <div
                  className={`progress-step ${
                    currentStep >= 3 ? "progress-step-active" : ""
                  }`}
                >
                  <div className="progress-number">3</div>
                  <span className="progress-label">Guest</span>
                </div>
                <div
                  className={`progress-line ${
                    currentStep > 3 ? "progress-line-active" : ""
                  }`}
                />
                <div
                  className={`progress-step ${
                    currentStep >= 4 ? "progress-step-active" : ""
                  }`}
                >
                  <div className="progress-number">4</div>
                  <span className="progress-label">Review</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* ===== STEP 1: ROOM SELECTION ===== */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <h2>Select Your Room</h2>
                    <p>Choose the room type that best suits your needs.</p>

                    <div className="room-selection">
                      {roomTypes.map((room) => (
                        <label
                          key={room.value}
                          className={`room-option ${
                            formData.roomType === room.value
                              ? "room-option-selected"
                              : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="roomType"
                            value={room.value}
                            checked={formData.roomType === room.value}
                            onChange={handleChange}
                          />
                          <div className="room-option-content">
                            <div className="room-option-header">
                              <h3>{room.label}</h3>
                              <span className="room-option-price">
                                {room.price}
                              </span>
                            </div>
                            <p className="room-option-desc">
                              {room.description}
                            </p>
                            <span className="room-option-capacity">
                              {room.capacity}
                            </span>
                          </div>
                          <div className="room-option-check">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.roomType && (
                      <span className="form-error">{errors.roomType}</span>
                    )}

                    <div className="form-actions">
                      <button
                        type="button"
                        className="btn-next"
                        onClick={nextStep}
                      >
                        Continue to Dates →
                      </button>
                    </div>
                  </div>
                )}

                {/* ===== STEP 2: DATES & GUESTS ===== */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <h2>Select Dates & Guests</h2>
                    <p>
                      Let us know when you plan to arrive and how many guests.
                    </p>

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="checkIn">Check-in Date *</label>
                        <input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          min={today}
                          className={errors.checkIn ? "input-error" : ""}
                        />
                        {errors.checkIn && (
                          <span className="form-error">{errors.checkIn}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="checkOut">Check-out Date *</label>
                        <input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          min={minCheckOut}
                          className={errors.checkOut ? "input-error" : ""}
                        />
                        {errors.checkOut && (
                          <span className="form-error">{errors.checkOut}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="adults">Adults *</label>
                        <select
                          id="adults"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className={errors.adults ? "input-error" : ""}
                        >
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                              {n} Adult{n > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                        {errors.adults && (
                          <span className="form-error">{errors.adults}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="children">Children</label>
                        <select
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                        >
                          {[0, 1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                              {n} Child{n !== 1 ? "ren" : ""}
                            </option>
                          ))}
                        </select>
                        <span className="form-hint">
                          Children under 5 stay free
                        </span>
                      </div>
                    </div>

                    {formData.checkIn && formData.checkOut && (
                      <div className="stay-summary">
                        <div className="stay-summary-item">
                          <span>Stay Duration</span>
                          <strong>
                            {nights} Night{nights !== 1 ? "s" : ""}
                          </strong>
                        </div>
                        <div className="stay-summary-item">
                          <span>Total Guests</span>
                          <strong>
                            {parseInt(formData.adults) +
                              parseInt(formData.children)}{" "}
                            Guest
                            {parseInt(formData.adults) +
                              parseInt(formData.children) !==
                              1 && "s"}
                          </strong>
                        </div>
                      </div>
                    )}

                    <div className="form-actions">
                      <button
                        type="button"
                        className="btn-prev"
                        onClick={prevStep}
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        className="btn-next"
                        onClick={nextStep}
                      >
                        Continue to Details →
                      </button>
                    </div>
                  </div>
                )}

                {/* ===== STEP 3: GUEST DETAILS ===== */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <h2>Guest Details</h2>
                    <p>Please provide your contact information.</p>

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className={errors.firstName ? "input-error" : ""}
                        />
                        {errors.firstName && (
                          <span className="form-error">
                            {errors.firstName}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className={errors.lastName ? "input-error" : ""}
                        />
                        {errors.lastName && (
                          <span className="form-error">
                            {errors.lastName}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && (
                          <span className="form-error">{errors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 712 451 777"
                          className={errors.phone ? "input-error" : ""}
                        />
                        {errors.phone && (
                          <span className="form-error">{errors.phone}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        >
                          <option value="Kenya">Kenya</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Sudan">South Sudan</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="howDidYouHear">
                          How did you hear about us?
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend / Family</option>
                          <option value="seedsavers">
                            Seed Savers Network
                          </option>
                          <option value="returning">Returning Guest</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-group form-group-full">
                        <label htmlFor="specialRequests">
                          Special Requests
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          placeholder="Any dietary requirements, accessibility needs, or special requests..."
                          rows={4}
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button
                        type="button"
                        className="btn-prev"
                        onClick={prevStep}
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        className="btn-next"
                        onClick={nextStep}
                      >
                        Review Booking →
                      </button>
                    </div>
                  </div>
                )}

                {/* ===== STEP 4: REVIEW & SUBMIT ===== */}
                {currentStep === 4 && (
                  <div className="form-step">
                    <h2>Review Your Booking</h2>
                    <p>
                      Please review all details before submitting your booking
                      inquiry. We'll send a confirmation to your email.
                    </p>

                    <div className="review-box">
                      <div className="review-section">
                        <h4>Room Selection</h4>
                        <div className="review-row">
                          <span>Room Type</span>
                          <strong>{selectedRoom?.label}</strong>
                        </div>
                        <div className="review-row">
                          <span>Rate</span>
                          <strong>{selectedRoom?.price}</strong>
                        </div>
                      </div>

                      <div className="review-section">
                        <h4>Stay Details</h4>
                        <div className="review-row">
                          <span>Check-in</span>
                          <strong>{formData.checkIn}</strong>
                        </div>
                        <div className="review-row">
                          <span>Check-out</span>
                          <strong>{formData.checkOut}</strong>
                        </div>
                        <div className="review-row">
                          <span>Duration</span>
                          <strong>
                            {nights} Night{nights !== 1 ? "s" : ""}
                          </strong>
                        </div>
                        <div className="review-row">
                          <span>Adults</span>
                          <strong>{formData.adults}</strong>
                        </div>
                        <div className="review-row">
                          <span>Children</span>
                          <strong>{formData.children}</strong>
                        </div>
                      </div>

                      <div className="review-section">
                        <h4>Guest Information</h4>
                        <div className="review-row">
                          <span>Name</span>
                          <strong>
                            {formData.firstName} {formData.lastName}
                          </strong>
                        </div>
                        <div className="review-row">
                          <span>Email</span>
                          <strong>{formData.email}</strong>
                        </div>
                        <div className="review-row">
                          <span>Phone</span>
                          <strong>{formData.phone}</strong>
                        </div>
                        <div className="review-row">
                          <span>Country</span>
                          <strong>{formData.country}</strong>
                        </div>
                        {formData.specialRequests && (
                          <div className="review-row">
                            <span>Special Requests</span>
                            <strong>{formData.specialRequests}</strong>
                          </div>
                        )}
                      </div>

                      <div className="review-total">
                        <span>Estimated Total</span>
                        <strong>KSh {totalEstimate.toLocaleString()}</strong>
                      </div>
                      <p className="review-note">
                        * This is an estimate. Final pricing will be confirmed
                        by our team via email.
                      </p>
                    </div>

                    {/* Send Error Display */}
                    {sendError && (
                      <div className="send-error">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        <span>{sendError}</span>
                      </div>
                    )}

                    <div className="form-actions">
                      <button
                        type="button"
                        className="btn-prev"
                        onClick={prevStep}
                        disabled={isSending}
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="btn-submit"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <span className="btn-submit-loading">
                            <span className="spinner" />
                            Sending...
                          </span>
                        ) : (
                          "Submit Booking Inquiry →"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ================================
          CONTACT INFO
          ================================ */}
      {!isSubmitted && (
        <section className="booking-contact">
          <div className="container">
            <div className="booking-contact-content">
              <h3>Need Help With Your Booking?</h3>
              <p>
                Our reservations team is ready to assist you. Reach out
                directly and we'll help you plan your perfect stay.
              </p>
              <div className="booking-contact-options">
                <a href="tel:+254700000000" className="booking-contact-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+254 712 451 777</span>
                </a>
                <a
                  href="mailto:booking@seedfoodculturetourism.org"
                  className="booking-contact-item"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>booking@seedfoodculturetourism.org</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Booking;