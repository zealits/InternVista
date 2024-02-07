import { useState } from "react";
import { Alert, AlertTitle } from "@reactive-resume/ui";

export const ContactSection = () => {
  const initialFormData = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);

      // Call your API endpoint to send the email
      const response = await fetch(`/api/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phoneNumber:formData.phoneNumber,
          name: formData.name,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully');
        clearForm();
        setShowAlert(true);

         // Hide the alert after 5 seconds (adjust as needed)
         setTimeout(() => {
          setShowAlert(false);
        }, 4000);
      } else {
        // Handle failure (e.g., show an error message)
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <section className="bg-secondary contact flex items-center py-5" id="contact">
      <div className="container-fluid text-light p-8 flex w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:flex justify-center justify-end items-center px-lg-5">
          <div className="lg:text-left lg:w-11/12 sm:w-full sm:text-center">
            <div className="py-4 pt-lg-0">
              <p>CONTACT</p>
              <h2 className="py-2 text-3xl font-bold">Send your query</h2>
              <p className="para-light">
                Connect with InternVista Internships
                Have questions or inquiries? Reach out to us. We're here to help.
              </p>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
              <div className="form-group w-1/2 w-full py-2 mr-2">
                <input
                  type="text"
                  className="form-control form-control-input text-black w-full rounded-md"
                  id="exampleFormControlInput1"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-1/2 w-full py-2">
                <input
                  type="tel"
                  className="form-control form-control-input text-black w-full rounded-md"
                  id="exampleFormControlInput2"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group py-1 w-full">
              <input
                type="email"
                className="form-control form-control-input w-full text-black rounded-md"
                id="exampleFormControlInput3"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>
            <div className="form-group py-2">
              <textarea
                className="form-control form-control-input w-full text-black rounded-md"
                id="exampleFormControlTextarea1"
                rows={6}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="my-3">
              <button
                type="button"
                className="btn-secondary border py-2 px-3 border-white hover:bg-gray-300 hover:text-black"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
             {/* Display the alert */}
             {showAlert && (
              <Alert variant="primary" onClose={handleAlertClose}>
                <AlertTitle className="text-black">Your Query has been Sent Successfully</AlertTitle>
              </Alert>
            )}
          </div>
        </div>
        <div className="flex items-center h-100 w-1/2">
          <img className="object-cover h-100 w-100 lg:block hidden" src="./images/contact.jpg" alt="contact" />
        </div>
      </div>
    </section>
  );
};
