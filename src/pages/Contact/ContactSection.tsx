import { toast } from "sonner";
import { PageSection } from "../../components/layout/PageLayout";
import { Card } from "../../components/neobrutalism";
import "./ContactSection.css";

const ContactSection = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdrdrol", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent. Thanks for reaching out!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <PageSection id="contact">
      <div className="section contact-section">
        <div>
          <h2>Contact</h2>
          <p className="contact-intro">
            Have a role, project, or collaboration in mind? Send a message and
            I’ll get back to you as soon as I can.
          </p>
          <div className="contact-details">
            <p>
              <strong>Location:</strong> Broulee, Australia
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:petermarkbassett@gmai.com">
                petermarkbassett@gmai.com
              </a>
            </p>
            <p>
              <strong>Response time:</strong> Usually within 1–2 business days
            </p>
          </div>
        </div>

        <Card className="contact-card">
          <form className="contact-form" method="POST" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </label>
            <button type="submit" className="contact-submit">
              Send message
            </button>
            <p className="contact-note">
              Form powered by{" "}
              <a href="https://formspree.io" target="_blank" rel="noreferrer">
                Formspree
              </a>
              .
            </p>
          </form>
        </Card>
      </div>
    </PageSection>
  );
};

export default ContactSection;
