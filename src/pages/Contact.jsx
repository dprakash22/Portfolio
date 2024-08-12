import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Swal from 'sweetalert2';
import '../assets/cssfiles/contact.css';
const SERVICE_ID = "service_zeilz3p";
const TEMPLATE_ID = "template_506a4gn";
const PUBLIC_KEY = "gJ-bqvRCKP8RDzr66";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
return (
  <div className='flex flex-row w-full justify-around min-h-screen bg-slate-950'>
    <div className="flex flex-col justify-center Contact w-9/12 md:w-1/2 gap-2">
    <h2 className='text-center my-1 md:my-2 text-sky-500'>Let's Connect!</h2>
    <h3 className='text-center my-1 md:my-3 text-sky-600'>Feel free to drop me a message anytime—I’m here to help!</h3>
      <Form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label={<label className="customlabel">Email</label>}
          name='user_email'
          placeholder='Email…'
          required
          icon={<i className="mail icon customicon" />}
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label={<label className="customlabel">Name</label>}
          name='user_name'
          placeholder='Name…'
          required
          icon={<i className="user circle icon customicon" />}
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label={<label className="customlabel">Message</label>}
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='blue' className="p-2 rounded-2xl w-44 mt-3">Submit</Button>
      </Form>
    </div>
    </div>
  );
}
export default Contact;