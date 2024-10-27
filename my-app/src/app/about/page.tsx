import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center mb-4">
        <Image
          src="/path/to/hero-image.jpg" // Replace with your image path
          alt="About Us"
          className="img-fluid rounded mb-3 shadow"
          width={800} // Specify width
          height={400} // Specify height
          style={{ objectFit: 'cover' }}
        />
        <h1 className="display-4 font-weight-bold text-success">About Us</h1>
        <p className="lead text-muted">
          At <span className="text-primary">BlogName</span>, we strive to provide you with insightful content on [Topic].
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-success">Our Mission</h2>
              <p>
                Our mission is to empower readers with knowledge and insights, fostering a community of enthusiasts passionate about [Topic].
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-success">Our Vision</h2>
              <p>
                We envision becoming a leading platform for discussion and engagement in the world of [Topic], connecting people through shared interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="row mb-5">
          <div className="col">
            <h2 className="text-center text-secondary font-weight-bold">Meet the Team</h2>
            <p className="text-center text-secondary mb-4">
              Our dedicated team is at the heart of everything we create. Get to know the passionate minds behind our content.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <div className="card border-0 shadow-sm">
              <Image
                src="/assets/img/person-1.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-circle mx-auto mt-3"
              />
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Jane Doe</h5>
                <h6 className="card-subtitle text-muted mb-2">Editor-in-Chief</h6>
                <p className="card-text">
                  Passionate about storytelling, Jane ensures every post resonates with quality and value.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card border-0 shadow-sm">
              <Image
                src="/assets/img/person-5.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-circle mx-auto mt-3"
              />
              <div className="card-body">
                <h5 className="card-title font-weight-bold">John Smith</h5>
                <h6 className="card-subtitle text-muted mb-2">Lead Writer</h6>
                <p className="card-text">
                  With a keen eye for research and trends, John crafts content that both informs and captivates.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card border-0 shadow-sm">
              <Image
                src="/assets/img/person-7.jpg"
                alt="Team Member"
                width={300}
                height={300}
                className="rounded-circle mx-auto mt-3"
              />
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Emma Green</h5>
                <h6 className="card-subtitle text-muted mb-2">Content Strategist</h6>
                <p className="card-text">
                  Emma curates and plans our content, ensuring alignment with our mission.
                </p>
              </div>
            </div>
          </div>
        </div>



      {/* Values Section */}
      <h2 className="text-center text-success mb-4">Our Values</h2>
      <div className="row mb-5">
        <div className="col-md-4 mb-4 text-center">
          <h5 className="font-weight-bold">Integrity</h5>
          <p>We uphold honesty and transparency in all our interactions.</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <h5 className="font-weight-bold">Innovation</h5>
          <p>Creativity drives our content and our approach to engagement.</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <h5 className="font-weight-bold">Community</h5>
          <p>We foster an inclusive space for our readers to connect and engage.</p>
        </div>
      </div>

      {/* Contact Section */}
      <h2 className="text-center text-success mb-4">Get in Touch</h2>
      <div className="text-center mb-4">
        <p>Have questions? We’d love to hear from you!</p>
        <p>
          <FaEnvelope className="mr-2" /> <a href="mailto:info@blogname.com" className="text-primary">info@blogname.com</a>
        </p>
        <p>
          <FaPhone className="mr-2" /> +1 (123) 456-7890
        </p>
        <p>
          <FaMapMarkerAlt className="mr-2" /> 123 Blog Street, Blog City, BC 12345
        </p>
      </div>

      {/* Social Media Section */}
      <h2 className="text-center text-success mb-4">Follow Us</h2>
      <div className="text-center mb-4">
        <a href="https://facebook.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={30} />
        </a>
        <a href="https://twitter.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={30} />
        </a>
      </div>

      <div className="text-center mb-5">
        <Link href="/" className="btn btn-success btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
