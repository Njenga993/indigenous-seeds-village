interface BookingEmailData {
  roomType: string;
  roomDescription: string;
  roomRate: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: string;
  children: string;
  totalGuests: number;
  estimatedTotal: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  howDidYouHear: string;
  specialRequests: string;
}

// Auto-detect API URL based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const sendBookingEmail = async (
  data: BookingEmailData
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/send-inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("API Error:", result);
      return {
        success: false,
        message: result.message || "Failed to send booking inquiry. Please try again.",
      };
    }

    return {
      success: true,
      message: result.message || "Booking inquiry sent successfully!",
    };
  } catch (error) {
    console.error("Network Error:", error);

    if (error instanceof TypeError && error.message === "Failed to fetch") {
      return {
        success: false,
        message: "Unable to connect to the server. Please try again later.",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};