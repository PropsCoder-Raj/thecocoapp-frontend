import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "src/component/Page";
import Footer from "src/views/content/Footer";



const GapHandle = styled("div")(({ theme }) => ({
  marginTop: "60px",
  "@media(max-width:767px)": {
    marginTop: "40px",
  },
}));
const Content = styled(Box)(({ theme }) => ({
  h3: {
    fontWeight: 700,
    fontSize: "22px",
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2,
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: 1.3,
      margin: "26px 0 18px 0",
    },
    margin: "36px 0 18px 0",
  },
  p: {
    margin: 0,
    fontWeight: 300,
    fontSize: "16px",
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.75,
    color:"rgba(67, 69, 71, 1)",
    "@media(max-width:767px)": {
      fontSize: "14px !important",
      lineHeight: 1.3,
    },
  },

  a: {
    color: "rgba(0, 169, 220, 1)",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ol: {
    paddingLeft: "20px",
  },
  ul: {
    paddingLeft: "20px",
  },
  li: {
    fontSize: "16px",
    color: "rgba(67, 69, 71, 1)",
  },
}));


function PrivacyPolicy() {
  const html = `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body><p>This Privacy Policy (the “Policy”) explains how Cocoapp, Inc. (“us,” “our,” or “we”) collects, uses, discloses, and protects personal information that we collect from you through the Cocoapp web application (the “App”, “website” ).&nbsp;</p> <h3>Information We Collect About You</h3> <p>When you use or access the App, we may collect personal information, including, but not limited to, the following:<br><br>Contact and registration information, such as your first and last name, email address, phone number, date of birth, and zip code.<br>Information you submit through responses to survey questions, such as responses to questions about your financial literacy and product and service interests.<br>Any other information you submit when you contact us through the App.<br>We also may collect certain other information automatically when you visit the App, such as the following:</p> <ul> <li>Device Information: Certain information is automatically collected through your device, such as IP address, MAC address, and operating system. We use this information to ensure that the App functions properly.</li> <li>Cookies: Cookies are pieces of information stored directly on the device that you are using. Cookies may allow us to collect information such as time spent on the App, aspects of the App used, and other traffic data. We may use cookies for purposes such as determining what features interest our visitors, revising the App's features or operations, and as further described below. For more information, see the Your Choices section of this Policy.</li> <li>Analytics Provider Information: We may use various technologies to learn more about users' interactions with the App, including Google Analytics and Facebook Analytics. Our analytics providers use cookies to help us analyze how visitors use the App. The information generated by the cookies about your use of the App includes your IP address. For more information on Google Analytics, including how Google Analytics collects, uses, and discloses information, refer to the following page: <a href="https://policies.google.com/technologies/partner-sites">https://policies.google.com/technologies/partner-sites</a>. For more information on Facebook Analytics, including how Facebook Analytics collects, uses, and discloses information, refer to the Facebook data policy at: <a href="https://www.facebook.com/privacy/explanation">https://www.facebook.com/privacy/explanation</a>.</li> <li>IP Address: Your IP address is a number that is automatically assigned to the device that you are using by your Internet Service Provider (ISP). Your IP address may be identified and logged automatically in our server log files whenever you access the App, along with the time of the visit and the page(s) that were visited. Collecting IP addresses is standard practice and is done automatically by many websites, applications, and other services. We use IP addresses for purposes such as calculating usage levels, diagnosing server problems, and administering the App. We may also derive and collect your approximate location from your IP address to understand from what regions of the world our App users come.</li> <li>Location Information: We may receive your approximate location or data that indicates your approximate location, such as your IP address.</li> </ul> <h3>How We Use Your Information</h3> <p>We may use personal information that we collect about you for purposes that include the following:</p> <ul> <li>Providing the App and our services to you and our customers, including our business customers.</li> <li>Aggregating information.</li> <li>Operating, evaluating, and improving our organization.</li> <li>Understanding how you and our customers use the App and to determine what features and services may</li> <li>interest you and our customers.</li> <li>Revising the App features or operation.</li> <li>Communicating with you and responding to your requests, including for marketing purposes.</li> <li>Calculating user levels and diagnosing server problems.</li> <li>Storing information about your preferences and recognizing you when you use the App.</li> <li>Determining your location.</li> <li>Protecting the legal rights, property, safety, and security of us, our users, and others.</li> <li>Communicating with you and others, including to market our services.</li> <li>Complying with all applicable laws and industry standards and enforcing our policies, terms of use, or rights arising from contracts.</li> <li>For such purposes as you may authorize at the time you submit the information</li> </ul> <h3><strong>Disclosure of Your Information</strong></h3> <p>We may disclose personal information we collect about you:</p> <ul> <li>To our customers, including for our business customers' marketing purposes. We may also disclose aggregated reports about our users.</li> <li>To our affiliates.</li> <li>To our business partners.</li> <li>To our contractors, service providers, and other third parties we use to support our organization, including our analytics providers.</li> <li>To communicate with you and others, including to market our services.</li> <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li> <li>To enforce our policies, terms of use, or rights.</li> <li>To investigate or prevent unlawful activities or misuse of the App.</li> <li>To protect the rights, property, or safety of us, our users, or others</li> <li>To a buyer or other successor or organization in the event of an actual or potential merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, including as part of bankruptcy, liquidation, or similar proceeding.</li> <li>For such purposes as you may authorize at the time you submit the information.</li> </ul> <h3>Your Choices</h3> <p>You may choose not to provide the personal information we request. You may request to delete your account and/or have your data deleted by sending a request to <a href="hello@thecocoapp.com">hello@thecocoapp.com</a> from the email address associated with your account. However, not providing information we request, deleting your account, or deleting your data may restrict your ability to use certain features of the App. For example, you may be able to restrict the collection of personal information or functionality through your device's operating system or by disabling cookies, but doing so may prevent you from using the functionality of the App. Some Internet browsers have a “do-not-track” feature that let you tell websites that you do not want to have your online activities tracked. However, the App does not receive, and therefore will not respond to, signals sent by Internet browser do-not-track features. We may allow third parties to use the App to collect personal information about your online activities over time and across different websites, applications, and other online products or services.</p> <h3><strong>Security</strong></h3> <p>We maintain safeguards intended to protect the personal information collected through the Website,&nbsp;App.</p> <h3><strong>Changes To This Policy</strong></h3> <p>We may update this Policy to reflect changes in our privacy practices at any time and without prior notice to you. When we do so, we will update the Effective Date of the Policy, above, and the current version of the Policy will always be available for review within the App. We encourage you to periodically review the Policy for the latest information on our privacy practices.<br><h3>Contacting Us</h3></p> <p>If you have any questions or comments about this Policy or our privacy practices, please contact us at: <a href="hello@thecocoapp.com">hello@thecocoapp.com</a></p></body></html>`;

  return (
    <Page title="privacy&policy">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h1"
            sx={{ marginBottom: { xs: "25px", sm: "45px" } }}
          >
            Privacy at Cocoapp
          </Typography>
        </Box>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
      </Container>
      <GapHandle>
        <Footer />
      </GapHandle>
    </Page>
  );
}

export default PrivacyPolicy;
