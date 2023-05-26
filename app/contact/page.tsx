import Head from "next/head";
import ContactCard from "../../components/ContactCard";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";

const ContactPage = () => {
  return (
    <Container>
      <Head>
        <title>Contact - Steven Whitfield</title>
        <meta name="title" content="Contact - Steven Whitfield" />
        <meta
          name="description"
          content="Connect with me via email, LinkedIn, or GitHub."
        />
        <link rel="canonical" href="https://www.stevenwhitfield.dev/contact" />
      </Head>
      <PageHeader mainHeader={"Contact"} />
      {/* Vertical flex column of contacts/socials in the form [icon text] */}
      <div className="flex flex-col items-start space-y-12 w-fit mx-auto">
        {/* email, linkedin, github, */}
        <ContactCard
          imageSrc={"/mail.png"}
          label={"stevmwhitfield@gmail.com"}
          url={"mailto:stevmwhitfield@gmail.com"}
        />
        <ContactCard
          imageSrc={"/linkedin.png"}
          label={"stevenmwhitfield"}
          url={"https://www.linkedin.com/in/stevenmwhitfield/"}
        />
        <ContactCard
          imageSrc={"/github.png"}
          label={"stevmwhitfield"}
          url={"https://github.com/stevmwhitfield"}
        />
      </div>
    </Container>
  );
};

export default ContactPage;
