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
    color: "rgba(67, 69, 71, 1)",
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
    margin: "5px 0",
    color: "#000",
  },
}));

function TermsCondition() {
  const html = `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body><h3>Cocoapp: Terms and Conditions of Use</h3> <p>These Terms and Conditions of Use (the “Agreement”) are a legal agreement between Cocoapp, Inc. (“Company”) a Delaware corporation and you (hereinafter referred to as “you” or “your”) and governs your use of the services provided by Cocoapp (the “Services”). IN ORDER TO USE THE SERVICES, YOU MUST ACCEPT ALL OF THE TERMS OF THIS AGREEMENT. You agree that by creating an account for or otherwise using the Services, you have read, understood, and agree to be bound by all of the terms of this Agreement. Company may revise and update this Agreement at any time, in which case it will notify you and all other users of the changes to the Agreement. Your continued use of the Services will mean you accept those changes and agree to the Agreement as revised. You may not amend or change this Agreement unless Company agrees to such amendment or change in writing.</p> <h3>Your Use of the Services</h3> <p>You may use the Services, subject to the terms and conditions of this Agreement. You are solely responsible for your use of the Services. You specifically agree that you may not use the Services for anything other than a lawful and legitimate purpose. In addition to the foregoing, you may not use the Services in any way that (i) does not comply with the terms of this Agreement, as amended by Company from time to time, or any other terms, rules, or guidelines provided by Company concerning your use of the Services, or (ii) might adversely affect Company's public image, reputation or goodwill. Company reserves the right to provide maintenance and upgrades to its systems, which may make the Services temporarily unavailable. Company may have to work on its systems at other times.</p> <h3>Suspension or Termination of the Services and the Agreement</h3> <p>Notwithstanding anything contained herein to the contrary, without limiting Company's other remedies in law or equity, Company may immediately issue a warning, temporarily suspend, indefinitely suspend or terminate your ability to access the Services and/or terminate this Agreement (specifically between Company and you only), without notice or liability therefor, for any reason whatsoever (in Company's sole determination), including but not limited to if (a) you breach this Agreement; (b) Company is unable to verify or authenticate any information you provide to it (which it has no duty to do but may pursue in its sole and absolute discretion); or (c) Company believes, in its sole and absolute discretion, that your actions may cause, result in, or carry a risk of legal liability for you, Company or any third party. Upon termination of this Agreement between Company and you only, any provision of this Agreement that by its terms imposes continuing obligations on you shall survive the termination of this Agreement.</p> <h3>User Content; Password Protection</h3> <p>You represent that any information provided by you in connection with your use of the Services is accurate, complete and current, and you agree to update that information promptly if there is any change. If you are provided with a user ID and or password to use the Services, you are responsible for keeping your user ID and password secret and confidential. You agree that you are responsible for any communications, transactions or use of the Services that are made using your user ID and password, together with any fees, charges, liability or other obligation that may result from such use. You are responsible for changing your password if you believe that your password has been stolen or might otherwise be misused. You may not assign your password or any of your rights under this Agreement without the prior written consent of Company, and any attempted assignment without such consent shall be void and shall be deemed a breach of this Agreement.</p> <h3>User Materials</h3> <p>In order to use the Services, you may create or provide information, messages, data and other materials in electronic format that will be stored, uploaded, posted, e-mailed or otherwise transmitted using the Services (collectively “User Materials”). You represent that you have obtained all necessary third party rights, including, without limitation, copyrights, for any User Materials that belong to third parties. It is your responsibility to determine if it is necessary for you to obtain, and, if necessary, for obtaining, any licenses required to use third party information or content that is part of the User Materials. You agree not to use the Services for, and the User Material will not contain, any infringing, illegal, sexually explicit, hateful, vulgar, threatening, abusive, harassing, defamatory, or racially, ethnically, or otherwise objectionable material, including, without limitation, any materials that could give rise to any liability to Company or which might adversely affect Company's public image, reputation or goodwill. YOU WILL BE RESPONSIBLE FOR MAKING BACK-UP AND ARCHIVAL COPIES OF ALL USER MATERIALS. IN NO EVENT WILL COMPANY BE RESPONSIBLE TO YOU OR ANY OTHER PERSON OR PARTY FOR ANY LOSS, CORRUPTION OR ALTERATION OF USER MATERIALS, OR FOR ANY LOSS ARISING OUT OF ANY BREACH OF ANY SECURITY, INCLUDING, WITHOUT LIMITATION, ANY SPECIAL, DIRECT, INDIRECT OR OTHER DAMAGES OF ANY KIND.</p> <h3>Use of Data</h3> <p>All data, contacts, email lists, email addresses, and User Materials provided by you (collectively “Your Data”) will be collected, protected, used, and disclosed in accordance with Company's privacy policy (the “Cocoapp Privacy Policy”), which may be updated from time to time and is always available for review at <a href="https://the-cocoapp.netlify.app/privacy-policy" target="_blank">https://thecocoapp.com/privacy-policy</a>. By accepting the terms of this Agreement, you acknowledge receipt of, and agreement to, the Cocoapp Privacy Policy.</p> <h3><strong>Disclaimer of Warranty</strong></h3> <p>The services are provided as is as available and without any representations or warranties of any kind express implied statutory or otherwise including without limitation any implied warranty of merchantability non infringement or fitness for a particular purpose and company hereby disclaims the same without limiting the generality of the foregoing company neither warrants that the services will be provided in an uninterrupted secure or error free manner nor does company make any warranty as to the results obtained from the services or as to the accuracy or reliability of any content contained in or provided through the services no oral or written information or advice given by company its agents or employees will create a warranty any use of the services is at your own risk</p> <h3><strong>Limitation of Liability</strong></h3> <p>Company will not be liable for any indirect special exemplary consequential or incidental damages arising out of or in connection with your use of or inability to use the services including without limitation any damages for lost profits or data or business interruption whether arising from mistakes omissions interruptions deletion of files data or e mails errors defects viruses or other malicious code delays in operation or transmission or any failure of performance even if company has been advised of the possibility of such damages in no event will the liability of company to you for any claim whatsoever whether arising in contract tort or any other legal or equitable theory including without limitation negligence or strict liability</p> <h3>Indemnification</h3> <p>You agree to defend indemnify and hold harmless company its officers directors employees contractors customers suppliers and licensors from and against any and all costs fees loss claim or liability including without limitation all attorneys fees and expenses which they may incur in connection with a your breach of this agreement or your breach of any other rules or guidelines provided to you by company or b your use of the services</p> <h3><strong>Legal Compliance; Authority; Binding Nature</strong></h3> <p>You shall comply with all applicable laws, statutes, ordinances and regulations regarding your use of the Services. You agree, represent and warrant that (i) you understand the terms and conditions of this Agreement and that it constitutes a valid, binding obligation, and (ii) you have full power, authority and legal capacity to enter into this Agreement.</p> <h3>Choice of Law; Miscellaneous</h3> <p>This Agreement shall be governed by and construed in accordance with the laws of India. Any controversy or claim arising out of or relating to this Agreement, or the negotiation or breach thereof, shall be settled by arbitration or litigation. In the event of arbitration, the arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996, and the rules of a reputable Indian arbitration institution like the Delhi International Arbitration Centre (DIAC). The prevailing party shall be entitled to recover its reasonable attorneys' fees and other costs of arbitration or litigation, as determined by the arbitrator or court.</p> <p>This Agreement and the rights granted hereunder may not be assigned or transferred by you, in whole or in part without Company's prior written consent. Any successor in interest or assignee must agree to the terms and conditions of this Agreement. Without limiting the foregoing, you may not provide any other person access to the Services. If any provision of this Agreement is held invalid, such invalidity shall not affect any other provisions of this Agreement. Headings are inserted for reference only and shall not be construed as a part of this Agreement. No failure or delay on the part of Company to exercise any right under this Agreement will operate as a waiver thereof, nor will any single or partial exercise of any right preclude any other or further exercise thereof or of any other right. This Agreement represents the entire understanding and agreement between you and Company concerning your use of the Services, and supersedes any prior representations, understandings or agreements.<br><br>DISCLAIMER: Cocoapp is not a licensed financial advisor. Cocoapp content is not a substitute for financial advice from a professional, and Cocoapp shall not be held liable or responsible for any errors or omissions in Cocoapp's content, or for any damage suffered as a result of failing to seek competent financial advice from a professional who is familiar with your situation.</p></body></html>`;

  return (
    <Page title="privacy&policy">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h1"
            sx={{ marginBottom: { xs: "0", sm: "10px" } }}
          >
            Cocoapp Terms of Service
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

export default TermsCondition;
