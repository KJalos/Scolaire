import Input from "../UI/Forms/Input";

const ContactUs = () => {
  return (
    <main>
      <form>
        <Input label="Name" type="text" placeholder="Please enter your name" />
        <Input
          label="Email"
          type="email"
          placeholder="Please enter your email"
        />
        <Input label="Message" type="textarea" />
      </form>
    </main>
  );
};

export default ContactUs;
