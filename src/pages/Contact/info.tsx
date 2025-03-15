import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function CompanyInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-orange-500">Company</span> Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036704!2d-73.98784492404045!3d40.75798833440642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
