import { enquiryEndpoint } from '../utils/enquiry';

export default function EnquiryConfigNotice() {
  if (enquiryEndpoint) return null;
  return <p role="status" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">Online form delivery has not been configured yet. Your details will not be sent until the site owner adds the enquiry endpoint.</p>;
}
