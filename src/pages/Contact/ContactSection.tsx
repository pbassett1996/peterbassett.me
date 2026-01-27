import { toast } from "sonner";
import infoIcon from "../../assets/icons/neobrutalism/B&W/Info.svg";
import mailIcon from "../../assets/icons/neobrutalism/B&W/Mail.svg";
import timeIcon from "../../assets/icons/neobrutalism/B&W/Time.svg";
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
            <div className="contact-detail">
              <img
                className="contact-detail-icon"
                src={infoIcon}
                alt=""
                aria-hidden="true"
              />
              <div>
                <p className="contact-detail-title">Location</p>
                <p className="contact-detail-subtitle">
                  Broulee, Australia (Open to remote)
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <img
                className="contact-detail-icon"
                src={mailIcon}
                alt=""
                aria-hidden="true"
              />
              <div>
                <p className="contact-detail-title">Email</p>
                <p className="contact-detail-subtitle">
                  <a href="mailto:petermarkbassett@gmai.com">
                    petermarkbassett@gmai.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-detail">
              <img
                className="contact-detail-icon"
                src={timeIcon}
                alt=""
                aria-hidden="true"
              />
              <div>
                <p className="contact-detail-title">Response time</p>
                <p className="contact-detail-subtitle">
                  Usually within 1–2 business days
                </p>
              </div>
            </div>
          </div>
          <div className="contact-resume-action">
            <a 
              href="?resume&autoPrint=true" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                window.open('?resume&autoPrint=true', '_blank');
              }}
            >
              Download CV
            </a>
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
