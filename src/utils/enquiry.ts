export const enquiryEndpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim() ?? '';

export async function sendEnquiry(data: Record<string, unknown>) {
  if (!enquiryEndpoint) {
    throw new Error('Enquiry submission is not configured yet. Please contact the site owner to add the enquiry destination.');
  }

  const response = await fetch(enquiryEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Your message could not be sent right now. Please try again later.');
  }
}
